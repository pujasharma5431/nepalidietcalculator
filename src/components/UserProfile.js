import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Accordion } from 'react-bootstrap';

const UserProfile = ({ userProfile, onSubmit }) => {
  const [profile, setProfile] = useState({
    ...userProfile,
    dailyRoutine: userProfile.dailyRoutine || {
      wakeUpTime: '06:00',
      breakfastTime: '07:30',
      lunchTime: '13:00',
      snackTime: '16:00',
      dinnerTime: '19:30',
      sleepTime: '22:30',
      workHours: '09:00-17:00',
      exerciseTime: '18:00',
      exerciseDuration: 30
    },
    weightGoal: userProfile.weightGoal || 'maintain'
  });
  const [medications, setMedications] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRoutineChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      dailyRoutine: {
        ...prev.dailyRoutine,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process medications into an array
    const medicationArray = medications
      .split(',')
      .map(med => med.trim())
      .filter(med => med.length > 0);
    
    const updatedProfile = {
      ...profile,
      medications: medicationArray
    };
    
    onSubmit(updatedProfile);
  };

  return (
    <div className="step-container">
      <h2 className="mb-4 text-center">Personal Information</h2>
      <Card className="p-4 mb-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="height">
                <Form.Label>Height (cm)</Form.Label>
                <Form.Control 
                  type="number" 
                  name="height"
                  value={profile.height} 
                  onChange={handleChange}
                  required
                  placeholder="Enter your height in centimeters"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="weight">
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Control 
                  type="number" 
                  name="weight"
                  value={profile.weight} 
                  onChange={handleChange}
                  required
                  placeholder="Enter your weight in kilograms"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                  type="number" 
                  name="age"
                  value={profile.age} 
                  onChange={handleChange}
                  required
                  placeholder="Enter your age"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select 
                  name="gender"
                  value={profile.gender} 
                  onChange={handleChange}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="activityLevel">
            <Form.Label>Activity Level</Form.Label>
            <Form.Select 
              name="activityLevel"
              value={profile.activityLevel} 
              onChange={handleChange}
              required
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Lightly active (light exercise 1-3 days/week)</option>
              <option value="moderate">Moderately active (moderate exercise 3-5 days/week)</option>
              <option value="active">Active (hard exercise 6-7 days/week)</option>
              <option value="very_active">Very active (very hard exercise, physical job or training twice a day)</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="medications">
            <Form.Label>Medications (comma separated)</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={2}
              value={medications} 
              onChange={(e) => setMedications(e.target.value)}
              placeholder="Enter any medications you're taking (e.g., Metformin, Insulin, etc.)"
            />
            <Form.Text className="text-muted">
              This information will help us provide better dietary recommendations.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="weightGoal">
            <Form.Label>Weight Goal</Form.Label>
            <Form.Select 
              name="weightGoal"
              value={profile.weightGoal} 
              onChange={handleChange}
              required
            >
              <option value="lose">Lose Weight (Calorie Deficit)</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight (Calorie Surplus)</option>
            </Form.Select>
          </Form.Group>
          
          <Accordion className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Daily Routine</Accordion.Header>
              <Accordion.Body>
                <p className="text-muted mb-3">This information helps us recommend optimal meal timings for your goals.</p>
                
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="wakeUpTime">
                      <Form.Label>Wake Up Time</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="wakeUpTime"
                        value={profile.dailyRoutine.wakeUpTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="sleepTime">
                      <Form.Label>Sleep Time</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="sleepTime"
                        value={profile.dailyRoutine.sleepTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="workHours">
                      <Form.Label>Work/School Hours</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="workHours"
                        value={profile.dailyRoutine.workHours} 
                        onChange={handleRoutineChange}
                        placeholder="e.g., 09:00-17:00"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="exerciseTime">
                      <Form.Label>Exercise Time</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="exerciseTime"
                        value={profile.dailyRoutine.exerciseTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3" controlId="exerciseDuration">
                  <Form.Label>Exercise Duration (minutes)</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="exerciseDuration"
                    value={profile.dailyRoutine.exerciseDuration} 
                    onChange={handleRoutineChange}
                    min="0"
                    max="180"
                  />
                </Form.Group>
                
                <h5 className="mt-4 mb-3">Meal Times</h5>
                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="breakfastTime">
                      <Form.Label>Breakfast</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="breakfastTime"
                        value={profile.dailyRoutine.breakfastTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="lunchTime">
                      <Form.Label>Lunch</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="lunchTime"
                        value={profile.dailyRoutine.lunchTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="dinnerTime">
                      <Form.Label>Dinner</Form.Label>
                      <Form.Control 
                        type="time" 
                        name="dinnerTime"
                        value={profile.dailyRoutine.dinnerTime} 
                        onChange={handleRoutineChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="snackTime">
                  <Form.Label>Snack Time</Form.Label>
                  <Form.Control 
                    type="time" 
                    name="snackTime"
                    value={profile.dailyRoutine.snackTime} 
                    onChange={handleRoutineChange}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" type="submit" size="lg">
              Continue to Meal Planning
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default UserProfile;
