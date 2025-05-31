// Translations for the Diet Calculator application
const translations = {
  english: {
    // App.js
    appTitle: "नेपाली खाना योजनाकार",
    appSubtitle: "Nepali Diet Calculator",
    footer: "© 2025 नेपाली खाना योजनाकार | Nepali Diet Calculator",
    
    // Navigation
    next: "Next",
    back: "Back",
    reset: "Reset",
    submit: "Submit",
    
    // UserProfile.js
    profileTitle: "Personal Details",
    profileSubtitle: "Please enter your information to get personalized diet recommendations",
    height: "Height (cm)",
    weight: "Weight (kg)",
    age: "Age",
    gender: "Gender",
    male: "Male",
    female: "Female",
    activityLevel: "Activity Level",
    sedentary: "Sedentary (little or no exercise)",
    light: "Light (exercise 1-3 times/week)",
    moderate: "Moderate (exercise 3-5 times/week)",
    active: "Active (exercise 6-7 times/week)",
    veryActive: "Very Active (hard exercise daily)",
    medications: "Medications (if any)",
    addMedication: "Add Medication",
    
    // MealPlanner.js
    mealPlannerTitle: "Meal Planner",
    mealPlannerSubtitle: "Select Nepali foods for your meals",
    breakfast: "Breakfast",
    lunch: "Lunch",
    snacks: "Snacks",
    dinner: "Dinner",
    addCustomFood: "Add Custom Food",
    customFoodAdded: "Custom food added successfully!",
    customFoodTitle: "Add Custom Food Item",
    foodName: "Food Name",
    calories: "Calories",
    servingSize: "Serving Size",
    protein: "Protein (g)",
    carbs: "Carbs (g)",
    fat: "Fat (g)",
    mealType: "Meal Type",
    addNewCustomItem: "+ Add New Custom Item",
    quantity: "Quantity",
    calculateDietSummary: "Calculate Diet Summary",
    
    // DietSummary.js
    summaryTitle: "Diet Summary",
    yourProfile: "Your Profile",
    dailyCalories: "Daily Calories",
    totalCalories: "Total Calories",
    calorieNeeds: "Calorie Needs",
    currentIntake: "Current Intake",
    nutritionBreakdown: "Nutrition Breakdown",
    macronutrients: "Macronutrients",
    mealBreakdown: "Meal Breakdown",
    recommendations: "Recommendations",
    total: "Total",
    startOver: "Start Over",
    
    // Diet recommendations
    lowCalorieWarning: "Your current diet provides only {percentage}% of your daily calorie needs. Consider adding more food to meet your energy requirements.",
    highCalorieWarning: "Your current diet provides {percentage}% of your daily calorie needs, which exceeds your requirements. Consider reducing portion sizes.",
    healthyCalorieMessage: "Your current diet provides {percentage}% of your daily calorie needs, which is within a healthy range.",
    lowProteinWarning: "Your diet is low in protein ({current}g vs. recommended {recommended}g). Consider adding more protein-rich foods like lentils, beans, yogurt, or lean meats.",
    lowCarbsMessage: "Your diet is relatively low in carbohydrates ({percentage}% of calories). Consider adding more whole grains, fruits, or starchy vegetables.",
    highCarbsMessage: "Your diet is high in carbohydrates ({percentage}% of calories). Consider balancing with more proteins and healthy fats.",
    lowFiberMessage: "Your diet provides {current}g of fiber, which is below the recommended {recommended}g. Consider adding more fruits, vegetables, and whole grains.",
    lightBreakfastMessage: "Your breakfast is relatively light. Consider adding more nutrient-dense foods to start your day.",
    diabetesMedicationAdvice: "Based on your medications, you may need to monitor your carbohydrate intake carefully. Consider consulting with a healthcare provider for personalized advice.",
    cholesterolMedicationAdvice: "Based on your medications, focus on heart-healthy foods like oats, beans, and fatty fish while limiting saturated fats.",
    
    // Language selector
    language: "Language",
    languageEn: "English",
    languageNe: "नेपाली",
  },
  nepali: {
    // App.js
    appTitle: "नेपाली खाना योजनाकार",
    appSubtitle: "नेपाली खाना योजनाकार",
    footer: "© 2025 नेपाली खाना योजनाकार",
    
    // Navigation
    next: "अर्को",
    back: "पछाडि",
    reset: "रिसेट",
    submit: "पेश गर्नुहोस्",
    
    // UserProfile.js
    profileTitle: "व्यक्तिगत विवरण",
    profileSubtitle: "कृपया आफ्नो व्यक्तिगत जानकारी भर्नुहोस्",
    height: "उचाई (से.मी.)",
    weight: "वजन (के.जी.)",
    age: "उमेर",
    gender: "लिङ्ग",
    male: "पुरुष",
    female: "महिला",
    activityLevel: "गतिविधि स्तर",
    sedentary: "निष्क्रिय (थोरै वा कुनै व्यायाम छैन)",
    light: "हल्का (हप्तामा 1-3 पटक व्यायाम)",
    moderate: "मध्यम (हप्तामा 3-5 पटक व्यायाम)",
    active: "सक्रिय (हप्तामा 6-7 पटक व्यायाम)",
    veryActive: "धेरै सक्रिय (दैनिक कडा व्यायाम)",
    medications: "औषधिहरू (यदि कुनै छ भने)",
    addMedication: "औषधि थप्नुहोस्",
    
    // MealPlanner.js
    mealPlannerTitle: "खाना योजनाकार",
    mealPlannerSubtitle: "तपाईंको खानाको लागि नेपाली खानाहरू चयन गर्नुहोस्",
    breakfast: "बिहानको खाना",
    lunch: "दिउँसोको खाना",
    snacks: "खाजा",
    dinner: "बेलुकाको खाना",
    addCustomFood: "आफ्नै खाना थप्नुहोस्",
    customFoodAdded: "आफ्नै खाना सफलतापूर्वक थपियो!",
    customFoodTitle: "आफ्नै खाना थप्नुहोस्",
    foodName: "खानाको नाम",
    calories: "क्यालोरी",
    servingSize: "सर्भिङ साइज",
    protein: "प्रोटिन (ग्राम)",
    carbs: "कार्बोहाइड्रेट (ग्राम)",
    fat: "बोसो (ग्राम)",
    mealType: "खानाको प्रकार",
    addNewCustomItem: "+ नयाँ खाना थप्नुहोस्",
    quantity: "मात्रा",
    calculateDietSummary: "आहार सारांश गणना गर्नुहोस्",
    
    // DietSummary.js
    summaryTitle: "खाना सारांश",
    yourProfile: "तपाईंको प्रोफाइल",
    dailyCalories: "दैनिक क्यालोरी",
    totalCalories: "कुल क्यालोरी",
    calorieNeeds: "क्यालोरी आवश्यकता",
    currentIntake: "हालको सेवन",
    nutritionBreakdown: "पोषण विश्लेषण",
    macronutrients: "मुख्य पोषक तत्वहरू",
    mealBreakdown: "खाना विश्लेषण",
    recommendations: "सिफारिशहरू",
    total: "कुल",
    startOver: "पुन: सुरु",
    
    // Diet recommendations
    lowCalorieWarning: "तपाईंको वर्तमान आहारले तपाईंको दैनिक क्यालोरी आवश्यकताको केवल {percentage}% प्रदान गर्दछ। तपाईंको ऊर्जा आवश्यकताहरू पूरा गर्न अधिक खाना थप्नुहोस्।",
    highCalorieWarning: "तपाईंको वर्तमान आहारले तपाईंको दैनिक क्यालोरी आवश्यकताको {percentage}% प्रदान गर्दछ, जुन तपाईंको आवश्यकताहरू भन्दा बढी छ। सेवन मात्रा घटाउने विचार गर्नुहोस्।",
    healthyCalorieMessage: "तपाईंको वर्तमान आहारले तपाईंको दैनिक क्यालोरी आवश्यकताको {percentage}% प्रदान गर्दछ, जुन स्वस्थ दायरामा छ।",
    lowProteinWarning: "तपाईंको आहारमा प्रोटिन कम छ ({current}g प्रति सिफारिस गरिएको {recommended}g)। दाल, सिमी, दही, वा पातलो मासु जस्ता प्रोटिनयुक्त खानेकुराहरू थप्ने विचार गर्नुहोस्।",
    lowCarbsMessage: "तपाईंको आहार कार्बोहाइड्रेटमा अपेक्षाकृत कम छ (क्यालोरीको {percentage}%)। अधिक साबुत अनाज, फलफूल, वा स्टार्चयुक्त सब्जीहरू थप्ने विचार गर्नुहोस्।",
    highCarbsMessage: "तपाईंको आहार कार्बोहाइड्रेटमा उच्च छ (क्यालोरीको {percentage}%)। अधिक प्रोटिन र स्वस्थ बोसोसँग सन्तुलन गर्ने विचार गर्नुहोस्।",
    lowFiberMessage: "तपाईंको आहारले {current}g फाइबर प्रदान गर्दछ, जुन सिफारिस गरिएको {recommended}g भन्दा कम छ। अधिक फलफूल, सब्जी, र साबुत अनाज थप्ने विचार गर्नुहोस्।",
    lightBreakfastMessage: "तपाईंको बिहानको खाना अपेक्षाकृत हल्का छ। तपाईंको दिन सुरु गर्न अधिक पौष्टिक खानेकुराहरू थप्ने विचार गर्नुहोस्।",
    diabetesMedicationAdvice: "तपाईंको औषधिहरूको आधारमा, तपाईंले आफ्नो कार्बोहाइड्रेट सेवनलाई ध्यानपूर्वक अनुगमन गर्न आवश्यक हुन सक्छ। व्यक्तिगत सल्लाहको लागि स्वास्थ्य सेवा प्रदायकसँग परामर्श गर्ने विचार गर्नुहोस्।",
    cholesterolMedicationAdvice: "तपाईंको औषधिहरूको आधारमा, जौ, सिमी, र बोसोयुक्त माछा जस्ता हृदय-स्वस्थ खानेकुराहरूमा ध्यान केन्द्रित गर्नुहोस् र संतृप्त बोसोलाई सीमित गर्नुहोस्।",
    
    // Language selector
    language: "भाषा",
    languageEn: "English",
    languageNe: "नेपाली",
  }
};

export default translations;
