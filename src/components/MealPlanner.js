import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Badge, Accordion, Alert } from 'react-bootstrap';
import foodData from '../data/foodData';

const MealPlanner = ({ userProfile, mealPlan, onSubmit, translations }) => {
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: [...mealPlan.breakfast],
    lunch: [...mealPlan.lunch],
    snacks: [...mealPlan.snacks],
    dinner: [...mealPlan.dinner]
  });
  
  const [customFoods, setCustomFoods] = useState({
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  });

  const [newCustomFood, setNewCustomFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    servingSize: '',
    mealType: 'breakfast'
  });
  
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [lastAddedFood, setLastAddedFood] = useState('');
  const [activeKey, setActiveKey] = useState('0');

  const toggleFoodSelection = (mealType, food) => {
    setSelectedMeals(prevSelected => {
      const currentSelection = [...prevSelected[mealType]];
      const index = currentSelection.findIndex(item => item.id === food.id);
      
      if (index === -1) {
        // Add food if not already selected
        return {
          ...prevSelected,
          [mealType]: [...currentSelection, { ...food, quantity: 1 }]
        };
      } else {
        // Remove food if already selected
        return {
          ...prevSelected,
          [mealType]: currentSelection.filter(item => item.id !== food.id)
        };
      }
    });
  };

  const handleQuantityChange = (mealType, foodId, quantity) => {
    setSelectedMeals(prevSelected => {
      const updatedMeal = prevSelected[mealType].map(food => {
        if (food.id === foodId) {
          return { ...food, quantity: parseInt(quantity) || 1 };
        }
        return food;
      });
      
      return {
        ...prevSelected,
        [mealType]: updatedMeal
      };
    });
  };

  const handleCustomFoodChange = (e) => {
    const { name, value } = e.target;
    setNewCustomFood(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addCustomFood = (e) => {
    e.preventDefault();
    
    if (!newCustomFood.name || !newCustomFood.calories) {
      alert('Please provide at least a name and calories for your custom food');
      return;
    }
    
    const customFood = {
      id: `custom-${Date.now()}`,
      name: newCustomFood.name,
      calories: parseInt(newCustomFood.calories),
      servingSize: newCustomFood.servingSize || '1 serving',
      nutrients: {
        protein: parseInt(newCustomFood.protein) || 0,
        carbs: parseInt(newCustomFood.carbs) || 0,
        fat: parseInt(newCustomFood.fat) || 0,
        fiber: 0
      },
      isCustom: true
    };
    
    // Add to custom foods list
    setCustomFoods(prev => ({
      ...prev,
      [newCustomFood.mealType]: [...prev[newCustomFood.mealType], customFood]
    }));
    
    // Also add to selected foods
    setSelectedMeals(prev => ({
      ...prev,
      [newCustomFood.mealType]: [...prev[newCustomFood.mealType], { ...customFood, quantity: 1 }]
    }));
    
    // Show success message and keep track of the meal type
    setLastAddedFood(newCustomFood.name);
    setShowSuccessAlert(true);
    
    // Keep the accordion open
    setActiveKey('0');
    
    // Only reset the form fields except for meal type
    const currentMealType = newCustomFood.mealType;
    setNewCustomFood({
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      servingSize: '',
      mealType: currentMealType // Keep the same meal type for convenience
    });
    
    // Hide the success alert after 3 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  const handleSubmit = () => {
    onSubmit(selectedMeals);
  };

  const isFoodSelected = (mealType, foodId) => {
    return selectedMeals[mealType].some(food => food.id === foodId);
  };

  return (
    <div className="step-container">
      <h2 className="mb-4 text-center">{translations.mealPlannerTitle}</h2>
      <p className="text-center mb-4">{translations.mealPlannerSubtitle}</p>
      
      <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)} className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{translations.addCustomFood}</Accordion.Header>
          <Accordion.Body>
            {showSuccessAlert && (
              <Alert variant="success" className="mb-3">
                <strong>{lastAddedFood}</strong> {translations.customFoodAdded}
              </Alert>
            )}
            <Form onSubmit={addCustomFood}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.foodName}</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={newCustomFood.name}
                      onChange={handleCustomFoodChange}
                      placeholder={translations.foodName}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.mealType}</Form.Label>
                    <Form.Select
                      name="mealType"
                      value={newCustomFood.mealType}
                      onChange={handleCustomFoodChange}
                    >
                      <option value="breakfast">{translations.breakfast}</option>
                      <option value="lunch">{translations.lunch}</option>
                      <option value="snacks">{translations.snacks}</option>
                      <option value="dinner">{translations.dinner}</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.calories}</Form.Label>
                    <Form.Control
                      type="number"
                      name="calories"
                      value={newCustomFood.calories}
                      onChange={handleCustomFoodChange}
                      placeholder="200"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.servingSize}</Form.Label>
                    <Form.Control
                      type="text"
                      name="servingSize"
                      value={newCustomFood.servingSize}
                      onChange={handleCustomFoodChange}
                      placeholder={translations.servingSize}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.protein}</Form.Label>
                    <Form.Control
                      type="number"
                      name="protein"
                      value={newCustomFood.protein}
                      onChange={handleCustomFoodChange}
                      placeholder="5"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.carbs}</Form.Label>
                    <Form.Control
                      type="number"
                      name="carbs"
                      value={newCustomFood.carbs}
                      onChange={handleCustomFoodChange}
                      placeholder="30"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>{translations.fat}</Form.Label>
                    <Form.Control
                      type="number"
                      name="fat"
                      value={newCustomFood.fat}
                      onChange={handleCustomFoodChange}
                      placeholder="2"
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <Button variant="primary" type="submit" className="me-2">
                    {translations.addCustomFood}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      {/* Meal sections */}
      {['breakfast', 'lunch', 'snacks', 'dinner'].map((mealType) => (
        <div key={mealType} className="mb-5">
          <h3 className="mb-3 text-capitalize">{translations[mealType]}</h3>
          
          <Row xs={1} md={2} lg={3} className="g-4 mb-4">
            {/* Standard food options */}
            {foodData[mealType].map(food => (
              <Col key={food.id}>
                <Card 
                  className={`food-card ${isFoodSelected(mealType, food.id) ? 'selected' : ''}`}
                  onClick={() => toggleFoodSelection(mealType, food)}
                >
                  <Card.Img 
                    variant="top" 
                    src={`/placeholder-food.jpg`} 
                    className="food-image"
                    alt={food.name}
                  />
                  <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                    <Card.Text>
                      <Badge bg="info">{food.calories} calories</Badge>{' '}
                      <small className="text-muted">per {food.servingSize}</small>
                    </Card.Text>
                    <Card.Text>
                      <small>
                        Protein: {food.nutrients.protein}g • 
                        Carbs: {food.nutrients.carbs}g • 
                        Fat: {food.nutrients.fat}g
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
            {/* Custom food options */}
            {customFoods[mealType].map(food => (
              <Col key={food.id}>
                <Card 
                  className={`food-card ${isFoodSelected(mealType, food.id) ? 'selected' : ''}`}
                  onClick={() => toggleFoodSelection(mealType, food)}
                >
                  <Card.Body>
                    <Card.Title>
                      {food.name} <Badge bg="secondary">Custom</Badge>
                    </Card.Title>
                    <Card.Text>
                      <Badge bg="info">{food.calories} calories</Badge>{' '}
                      <small className="text-muted">per {food.servingSize}</small>
                    </Card.Text>
                    <Card.Text>
                      <small>
                        Protein: {food.nutrients.protein}g • 
                        Carbs: {food.nutrients.carbs}g • 
                        Fat: {food.nutrients.fat}g
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          {/* Selected foods */}
          {selectedMeals[mealType].length > 0 && (
            <div className="selected-foods p-3 bg-light rounded mb-3">
              <h5>Selected {mealType} items:</h5>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="mb-2"
                onClick={() => {
                  setNewCustomFood(prev => ({
                    ...prev,
                    mealType: mealType
                  }));
                  setActiveKey('0');
                }}
              >
                {translations.addNewCustomItem}
              </Button>
              {selectedMeals[mealType].map(food => (
                <div key={food.id} className="d-flex align-items-center mb-2">
                  <div className="flex-grow-1">
                    <strong>{food.name}</strong> - {food.calories} cal/{food.servingSize}
                  </div>
                  <div className="d-flex align-items-center">
                    <Form.Label className="me-2 mb-0">{translations.quantity}:</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      style={{ width: '70px' }}
                      value={food.quantity || 1}
                      onChange={(e) => handleQuantityChange(mealType, food.id, e.target.value)}
                    />
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      className="ms-2"
                      onClick={() => toggleFoodSelection(mealType, food)}
                    >
                      {translations.reset}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <div className="d-grid gap-2 mt-4">
        <Button 
          variant="primary" 
          size="lg" 
          onClick={handleSubmit}
          disabled={Object.values(selectedMeals).every(meal => meal.length === 0)}
        >
          {translations.calculateDietSummary}
        </Button>
      </div>
    </div>
  );
};

export default MealPlanner;
