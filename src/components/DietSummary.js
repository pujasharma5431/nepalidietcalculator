import React, { useState, useEffect, useCallback } from 'react';
import { Card, Row, Col, Button, Alert, Table, ProgressBar } from 'react-bootstrap';

const DietSummary = ({ userProfile, mealPlan, onReset, translations }) => {
  const [nutritionSummary, setNutritionSummary] = useState({
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    totalFiber: 0,
    meals: {}
  });
  
  const [recommendations, setRecommendations] = useState([]);
  const [dailyCalorieNeeds, setDailyCalorieNeeds] = useState(0);
  
  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = () => {
    const { weight, height, age, gender } = userProfile;
    
    if (!weight || !height || !age) return 0;
    
    // Convert strings to numbers
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    
    if (gender === 'female') {
      return 10 * w + 6.25 * h - 5 * a - 161;
    } else {
      return 10 * w + 6.25 * h - 5 * a + 5;
    }
  };
  
  // Calculate daily calorie needs based on BMR and activity level
  const calculateDailyCalorieNeeds = useCallback(() => {
    const bmr = calculateBMR();
    const { activityLevel } = userProfile;
    
    let activityMultiplier = 1.2; // Default: sedentary
    
    switch(activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'very_active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }
    
    return Math.round(bmr * activityMultiplier);
  }, [userProfile, calculateBMR]);
  
  // Calculate all nutrition totals
  const calculateNutrition = useCallback(() => {
    const mealSummary = {};
    let totalCals = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalFiber = 0;
    
    // Loop through each meal type
    Object.keys(mealPlan).forEach(mealType => {
      let mealCals = 0;
      let mealProtein = 0;
      let mealCarbs = 0;
      let mealFat = 0;
      let mealFiber = 0;
      
      // Loop through each food in meal
      mealPlan[mealType].forEach(food => {
        const quantity = food.quantity || 1;
        
        mealCals += food.calories * quantity;
        mealProtein += (food.nutrients.protein || 0) * quantity;
        mealCarbs += (food.nutrients.carbs || 0) * quantity;
        mealFat += (food.nutrients.fat || 0) * quantity;
        mealFiber += (food.nutrients.fiber || 0) * quantity;
      });
      
      mealSummary[mealType] = {
        calories: mealCals,
        protein: mealProtein,
        carbs: mealCarbs,
        fat: mealFat,
        fiber: mealFiber
      };
      
      totalCals += mealCals;
      totalProtein += mealProtein;
      totalCarbs += mealCarbs;
      totalFat += mealFat;
      totalFiber += mealFiber;
    });
    
    return {
      totalCalories: totalCals,
      totalProtein,
      totalCarbs,
      totalFat,
      totalFiber,
      meals: mealSummary
    };
  }, [mealPlan]);
  
  // Generate diet recommendations based on nutrition analysis
  const generateRecommendations = useCallback((nutrition, dailyNeeds) => {
    const recs = [];
    
    // Check if total calories meet daily needs
    const caloriePercentage = (nutrition.totalCalories / dailyNeeds) * 100;
    const roundedPercentage = Math.round(caloriePercentage);
    
    if (caloriePercentage < 85) {
      recs.push({
        type: 'warning',
        message: translations.lowCalorieWarning.replace('{percentage}', roundedPercentage)
      });
    } else if (caloriePercentage > 115) {
      recs.push({
        type: 'warning',
        message: translations.highCalorieWarning.replace('{percentage}', roundedPercentage)
      });
    } else {
      recs.push({
        type: 'success',
        message: translations.healthyCalorieMessage.replace('{percentage}', roundedPercentage)
      });
    }
    
    // Protein recommendations (0.8g per kg of body weight is minimum)
    const minProtein = parseFloat(userProfile.weight) * 0.8;
    if (nutrition.totalProtein < minProtein) {
      recs.push({
        type: 'warning',
        message: translations.lowProteinWarning
          .replace('{current}', Math.round(nutrition.totalProtein))
          .replace('{recommended}', Math.round(minProtein))
      });
    }
    
    // Carbs recommendations (45-65% of total calories)
    const carbCalories = nutrition.totalCarbs * 4; // 4 calories per gram of carbs
    const carbPercentage = (carbCalories / nutrition.totalCalories) * 100;
    const roundedCarbPercentage = Math.round(carbPercentage);
    
    if (carbPercentage < 45) {
      recs.push({
        type: 'info',
        message: translations.lowCarbsMessage.replace('{percentage}', roundedCarbPercentage)
      });
    } else if (carbPercentage > 65) {
      recs.push({
        type: 'info',
        message: translations.highCarbsMessage.replace('{percentage}', roundedCarbPercentage)
      });
    }
    
    // Fiber recommendations (25g for women, 38g for men)
    const recommendedFiber = userProfile.gender === 'female' ? 25 : 38;
    if (nutrition.totalFiber < recommendedFiber) {
      recs.push({
        type: 'info',
        message: translations.lowFiberMessage
          .replace('{current}', Math.round(nutrition.totalFiber))
          .replace('{recommended}', recommendedFiber)
      });
    }
    
    // Meal-specific recommendations
    if (nutrition.meals.breakfast && nutrition.meals.breakfast.calories < 0.2 * dailyNeeds) {
      recs.push({
        type: 'info',
        message: translations.lightBreakfastMessage
      });
    }
    
    // Check medication-specific dietary considerations
    if (userProfile.medications && userProfile.medications.length > 0) {
      userProfile.medications.forEach(med => {
        const lowercaseMed = med.toLowerCase();
        
        if (lowercaseMed.includes('metformin') || lowercaseMed.includes('insulin')) {
          recs.push({
            type: 'warning',
            message: translations.diabetesMedicationAdvice
          });
        }
        
        if (lowercaseMed.includes('statin') || lowercaseMed.includes('lipitor')) {
          recs.push({
            type: 'info',
            message: translations.cholesterolMedicationAdvice
          });
        }
      });
    }
    
    return recs;
  }, [userProfile]);
  
  useEffect(() => {
    const calculatedNeeds = calculateDailyCalorieNeeds();
    setDailyCalorieNeeds(calculatedNeeds);
    
    const nutrition = calculateNutrition();
    setNutritionSummary(nutrition);
    
    const recs = generateRecommendations(nutrition, calculatedNeeds);
    setRecommendations(recs);
  }, [userProfile, mealPlan, calculateDailyCalorieNeeds, calculateNutrition, generateRecommendations]);
  
  const calculateMacroPercentage = (macroNutrient, calories) => {
    if (calories === 0) return 0;
    let macroCalories = 0;
    
    switch(macroNutrient) {
      case 'protein':
        macroCalories = nutritionSummary.totalProtein * 4; // 4 calories per gram
        break;
      case 'carbs':
        macroCalories = nutritionSummary.totalCarbs * 4; // 4 calories per gram
        break;
      case 'fat':
        macroCalories = nutritionSummary.totalFat * 9; // 9 calories per gram
        break;
      default:
        macroCalories = 0;
    }
    
    return Math.round((macroCalories / calories) * 100);
  };
  
  return (
    <div className="step-container">
      <h2 className="mb-4 text-center">{translations.dietSummaryTitle}</h2>
      
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h4>{translations.yourProfile}</h4>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <td>{translations.height}</td>
                    <td>{userProfile.height} cm</td>
                  </tr>
                  <tr>
                    <td>{translations.weight}</td>
                    <td>{userProfile.weight} kg</td>
                  </tr>
                  <tr>
                    <td>{translations.age}</td>
                    <td>{userProfile.age} {translations.years}</td>
                  </tr>
                  <tr>
                    <td>{translations.gender}</td>
                    <td className="text-capitalize">{translations[userProfile.gender]}</td>
                  </tr>
                  <tr>
                    <td>{translations.activityLevel}</td>
                    <td className="text-capitalize">{translations[userProfile.activityLevel]}</td>
                  </tr>
                  <tr>
                    <td>{translations.medications}</td>
                    <td>
                      {userProfile.medications.length > 0 
                        ? userProfile.medications.join(', ') 
                        : translations.noneReported}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <h4>{translations.dailyCalorieNeeds}</h4>
              <div className="p-3 bg-light rounded">
                <h2 className="text-center">{dailyCalorieNeeds} {translations.calories}</h2>
                <p className="text-center text-muted">{translations.basedOnProfile}</p>
              </div>
              
              <h4 className="mt-4">{translations.currentIntake}</h4>
              <div className="p-3 bg-light rounded">
                <h2 className="text-center">{nutritionSummary.totalCalories} {translations.calories}</h2>
                <p className="text-center text-muted">
                  {Math.round((nutritionSummary.totalCalories / dailyCalorieNeeds) * 100)}% {translations.ofDailyNeeds}
                </p>
                
                <div className="nutrition-progress">
                  <ProgressBar now={Math.min(100, (nutritionSummary.totalCalories / dailyCalorieNeeds) * 100)} />
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Body>
          <h4>{translations.macroNutrientBreakdown}</h4>
          <Row>
            <Col md={4}>
              <div className="text-center p-3">
                <h5>{translations.protein}</h5>
                <h3>{nutritionSummary.totalProtein}g</h3>
                <p className="text-muted">
                  {calculateMacroPercentage('protein', nutritionSummary.totalCalories)}% {translations.ofCalories}
                </p>
                <ProgressBar now={calculateMacroPercentage('protein', nutritionSummary.totalCalories)} />
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-3">
                <h5>{translations.carbs}</h5>
                <h3>{nutritionSummary.totalCarbs}g</h3>
                <p className="text-muted">
                  {calculateMacroPercentage('carbs', nutritionSummary.totalCalories)}% {translations.ofCalories}
                </p>
                <ProgressBar now={calculateMacroPercentage('carbs', nutritionSummary.totalCalories)} />
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-3">
                <h5>{translations.fat}</h5>
                <h3>{nutritionSummary.totalFat}g</h3>
                <p className="text-muted">
                  {calculateMacroPercentage('fat', nutritionSummary.totalCalories)}% {translations.ofCalories}
                </p>
                <ProgressBar now={calculateMacroPercentage('fat', nutritionSummary.totalCalories)} />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Body>
          <h4>{translations.mealBreakdown}</h4>
          <Table bordered hover>
            <thead>
              <tr>
                <th>{translations.meal}</th>
                <th>{translations.calories}</th>
                <th>{translations.protein}</th>
                <th>{translations.carbs}</th>
                <th>{translations.fat}</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(nutritionSummary.meals).map(mealType => (
                <tr key={mealType}>
                  <td className="text-capitalize">{translations[mealType]}</td>
                  <td>{nutritionSummary.meals[mealType].calories} cal</td>
                  <td>{nutritionSummary.meals[mealType].protein}g</td>
                  <td>{nutritionSummary.meals[mealType].carbs}g</td>
                  <td>{nutritionSummary.meals[mealType].fat}g</td>
                </tr>
              ))}
              <tr className="table-secondary">
                <td><strong>{translations.total}</strong></td>
                <td><strong>{nutritionSummary.totalCalories} cal</strong></td>
                <td><strong>{nutritionSummary.totalProtein}g</strong></td>
                <td><strong>{nutritionSummary.totalCarbs}g</strong></td>
                <td><strong>{nutritionSummary.totalFat}g</strong></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Body>
          <h4>{translations.recommendations}</h4>
          {recommendations.map((rec, index) => (
            <Alert key={index} variant={rec.type} className="nutrition-alert">
              {rec.message}
            </Alert>
          ))}
        </Card.Body>
      </Card>
      
      <div className="d-grid gap-2 mt-4">
        <Button variant="primary" size="lg" onClick={onReset}>
          {translations.startOver}
        </Button>
      </div>
    </div>
  );
};

export default DietSummary;
