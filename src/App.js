import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import UserProfile from './components/UserProfile';
import MealPlanner from './components/MealPlanner';
import DietSummary from './components/DietSummary';

function App() {
  const [userProfile, setUserProfile] = useState({
    height: '',
    weight: '',
    age: '',
    gender: 'male',
    activityLevel: 'moderate',
    medications: []
  });

  const [mealPlan, setMealPlan] = useState({
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  });

  const [currentStep, setCurrentStep] = useState('profile');

  const handleProfileSubmit = (profileData) => {
    setUserProfile(profileData);
    setCurrentStep('meals');
  };

  const handleMealSubmit = (mealData) => {
    setMealPlan(mealData);
    setCurrentStep('summary');
  };

  const resetApp = () => {
    setUserProfile({
      height: '',
      weight: '',
      age: '',
      gender: 'male',
      activityLevel: 'moderate',
      medications: []
    });
    setMealPlan({
      breakfast: [],
      lunch: [],
      snacks: [],
      dinner: []
    });
    setCurrentStep('profile');
  };

  return (
    <div className="App">
      <Container fluid className="p-0">
        <div className="app-header text-center py-4">
          <h1>नेपाली खाना योजनाकार</h1>
          <h3>Nepali Diet Calculator</h3>
        </div>
        
        <Container className="main-content my-4">
          {currentStep === 'profile' && (
            <UserProfile 
              userProfile={userProfile} 
              onSubmit={handleProfileSubmit} 
            />
          )}
          
          {currentStep === 'meals' && (
            <MealPlanner 
              userProfile={userProfile}
              mealPlan={mealPlan}
              onSubmit={handleMealSubmit}
            />
          )}
          
          {currentStep === 'summary' && (
            <DietSummary 
              userProfile={userProfile}
              mealPlan={mealPlan}
              onReset={resetApp}
            />
          )}
        </Container>
        
        <footer className="app-footer text-center py-3">
          <p>© 2025 नेपाली खाना योजनाकार | Nepali Diet Calculator</p>
        </footer>
      </Container>
    </div>
  );
}

export default App;
