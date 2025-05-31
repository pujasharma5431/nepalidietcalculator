import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Dropdown, Button } from 'react-bootstrap';
import UserProfile from './components/UserProfile';
import MealPlanner from './components/MealPlanner';
import DietSummary from './components/DietSummary';
import translations from './data/translations';

function App() {
  const [language, setLanguage] = useState('english');
  const t = translations[language];

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
          <div className="language-selector-container">
            <Dropdown className="language-selector">
              <Dropdown.Toggle variant="light" id="dropdown-language">
                {t.language}: {language === 'english' ? t.languageEn : t.languageNe}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLanguage('english')}>{translations.english.languageEn}</Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage('nepali')}>{translations.nepali.languageNe}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <h1>{t.appTitle}</h1>
          <h3>{t.appSubtitle}</h3>
        </div>
        
        <Container className="main-content my-4">
          {currentStep === 'profile' && (
            <UserProfile 
              userProfile={userProfile} 
              onSubmit={handleProfileSubmit}
              language={language}
              translations={t}
            />
          )}
          
          {currentStep === 'meals' && (
            <MealPlanner 
              userProfile={userProfile}
              mealPlan={mealPlan}
              onSubmit={handleMealSubmit}
              language={language}
              translations={t}
            />
          )}
          
          {currentStep === 'summary' && (
            <DietSummary 
              userProfile={userProfile}
              mealPlan={mealPlan}
              onReset={resetApp}
              language={language}
              translations={t}
            />
          )}
        </Container>
        
        <footer className="app-footer text-center py-3">
          <p>{t.footer}</p>
        </footer>
      </Container>
    </div>
  );
}

export default App;
