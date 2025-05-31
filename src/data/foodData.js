const foodData = {
  breakfast: [
    {
      id: 1,
      name: "Sel Roti",
      image: "sel_roti.jpg",
      calories: 250,
      servingSize: "1 piece",
      nutrients: {
        protein: 3,
        carbs: 40,
        fat: 8,
        fiber: 1
      }
    },
    {
      id: 2,
      name: "Aalu Tama",
      image: "aalu_tama.jpg",
      calories: 180,
      servingSize: "1 cup",
      nutrients: {
        protein: 5,
        carbs: 25,
        fat: 7,
        fiber: 4
      }
    },
    {
      id: 3,
      name: "Dhido",
      image: "dhido.jpg",
      calories: 200,
      servingSize: "1 cup",
      nutrients: {
        protein: 4,
        carbs: 42,
        fat: 1,
        fiber: 3
      }
    },
    {
      id: 4,
      name: "Nepali Tea (Chiya)",
      image: "chiya.jpg",
      calories: 70,
      servingSize: "1 cup",
      nutrients: {
        protein: 2,
        carbs: 8,
        fat: 3,
        fiber: 0
      }
    }
  ],
  lunch: [
    {
      id: 5,
      name: "Dal Bhat",
      image: "dal_bhat.jpg",
      calories: 350,
      servingSize: "1 plate",
      nutrients: {
        protein: 12,
        carbs: 60,
        fat: 5,
        fiber: 6
      }
    },
    {
      id: 6,
      name: "Momo",
      image: "momo.jpg",
      calories: 300,
      servingSize: "6 pieces",
      nutrients: {
        protein: 15,
        carbs: 35,
        fat: 10,
        fiber: 2
      }
    },
    {
      id: 7,
      name: "Gundruk",
      image: "gundruk.jpg",
      calories: 80,
      servingSize: "1/2 cup",
      nutrients: {
        protein: 2,
        carbs: 15,
        fat: 1,
        fiber: 5
      }
    },
    {
      id: 8,
      name: "Saag",
      image: "saag.jpg",
      calories: 60,
      servingSize: "1 cup",
      nutrients: {
        protein: 3,
        carbs: 6,
        fat: 3,
        fiber: 4
      }
    }
  ],
  snacks: [
    {
      id: 9,
      name: "Chatpate",
      image: "chatpate.jpg",
      calories: 150,
      servingSize: "1 cup",
      nutrients: {
        protein: 4,
        carbs: 20,
        fat: 6,
        fiber: 3
      }
    },
    {
      id: 10,
      name: "Samosa",
      image: "samosa.jpg",
      calories: 200,
      servingSize: "1 piece",
      nutrients: {
        protein: 4,
        carbs: 25,
        fat: 10,
        fiber: 2
      }
    },
    {
      id: 11,
      name: "Nimki",
      image: "nimki.jpg",
      calories: 180,
      servingSize: "1/2 cup",
      nutrients: {
        protein: 3,
        carbs: 22,
        fat: 9,
        fiber: 1
      }
    },
    {
      id: 12,
      name: "Bhatmas Sadeko",
      image: "bhatmas_sadeko.jpg",
      calories: 200,
      servingSize: "1/2 cup",
      nutrients: {
        protein: 12,
        carbs: 10,
        fat: 12,
        fiber: 7
      }
    }
  ],
  dinner: [
    {
      id: 13,
      name: "Thukpa",
      image: "thukpa.jpg",
      calories: 280,
      servingSize: "1 bowl",
      nutrients: {
        protein: 12,
        carbs: 40,
        fat: 6,
        fiber: 4
      }
    },
    {
      id: 14,
      name: "Pulao",
      image: "pulao.jpg",
      calories: 320,
      servingSize: "1 cup",
      nutrients: {
        protein: 6,
        carbs: 55,
        fat: 8,
        fiber: 3
      }
    },
    {
      id: 15,
      name: "Dhindo with Chicken Curry",
      image: "dhindo_chicken.jpg",
      calories: 450,
      servingSize: "1 plate",
      nutrients: {
        protein: 25,
        carbs: 45,
        fat: 15,
        fiber: 4
      }
    },
    {
      id: 16,
      name: "Kwati",
      image: "kwati.jpg",
      calories: 220,
      servingSize: "1 cup",
      nutrients: {
        protein: 14,
        carbs: 35,
        fat: 3,
        fiber: 8
      }
    }
  ],
  sides: [
    {
      id: 17,
      name: "Achar",
      image: "achar.jpg",
      calories: 70,
      servingSize: "2 tbsp",
      nutrients: {
        protein: 1,
        carbs: 12,
        fat: 2,
        fiber: 2
      }
    },
    {
      id: 18,
      name: "Saag",
      image: "saag.jpg",
      calories: 60,
      servingSize: "1 cup",
      nutrients: {
        protein: 3,
        carbs: 6,
        fat: 3,
        fiber: 4
      }
    },
    {
      id: 19,
      name: "Aalu Tarkari",
      image: "aalu_tarkari.jpg",
      calories: 120,
      servingSize: "1/2 cup",
      nutrients: {
        protein: 2,
        carbs: 20,
        fat: 4,
        fiber: 3
      }
    },
    {
      id: 20,
      name: "Dahi (Yogurt)",
      image: "dahi.jpg",
      calories: 90,
      servingSize: "1/2 cup",
      nutrients: {
        protein: 5,
        carbs: 7,
        fat: 5,
        fiber: 0
      }
    }
  ],
  vegetables: [
    {
      id: 21,
      name: "Cauli Tarkari",
      image: "cauli_tarkari.jpg",
      calories: 85,
      servingSize: "1 cup",
      nutrients: {
        protein: 3,
        carbs: 8,
        fat: 5,
        fiber: 3
      },
      category: "veg"
    },
    {
      id: 22,
      name: "Nepali Green Beans",
      image: "green_beans.jpg",
      calories: 40,
      servingSize: "1 cup",
      nutrients: {
        protein: 2,
        carbs: 7,
        fat: 0.5,
        fiber: 4
      },
      category: "veg"
    },
    {
      id: 23,
      name: "Bhanta (Eggplant) Curry",
      image: "bhanta_curry.jpg",
      calories: 120,
      servingSize: "1 cup",
      nutrients: {
        protein: 2,
        carbs: 15,
        fat: 7,
        fiber: 6
      },
      category: "veg"
    },
    {
      id: 24,
      name: "Pharsi (Pumpkin) Tarkari",
      image: "pharsi_tarkari.jpg",
      calories: 70,
      servingSize: "1 cup",
      nutrients: {
        protein: 1,
        carbs: 15,
        fat: 1,
        fiber: 3
      },
      category: "veg"
    }
  ],
  nonVeg: [
    {
      id: 25,
      name: "Chicken Curry",
      image: "chicken_curry.jpg",
      calories: 250,
      servingSize: "1 cup",
      nutrients: {
        protein: 25,
        carbs: 8,
        fat: 14,
        fiber: 2
      },
      category: "non-veg"
    },
    {
      id: 26,
      name: "Mutton Sekuwa",
      image: "mutton_sekuwa.jpg",
      calories: 320,
      servingSize: "100g",
      nutrients: {
        protein: 28,
        carbs: 3,
        fat: 22,
        fiber: 0
      },
      category: "non-veg"
    },
    {
      id: 27,
      name: "Fish Tarkari",
      image: "fish_tarkari.jpg",
      calories: 180,
      servingSize: "1 piece",
      nutrients: {
        protein: 22,
        carbs: 5,
        fat: 9,
        fiber: 0
      },
      category: "non-veg"
    },
    {
      id: 28,
      name: "Chicken Momos",
      image: "chicken_momos.jpg",
      calories: 300,
      servingSize: "6 pieces",
      nutrients: {
        protein: 18,
        carbs: 30,
        fat: 12,
        fiber: 2
      },
      category: "non-veg"
    }
  ],
  pulses: [
    {
      id: 29,
      name: "Masoor Dal",
      image: "masoor_dal.jpg",
      calories: 120,
      servingSize: "1 cup",
      nutrients: {
        protein: 9,
        carbs: 20,
        fat: 0.5,
        fiber: 8
      },
      category: "veg"
    },
    {
      id: 30,
      name: "Kalo Dal",
      image: "kalo_dal.jpg",
      calories: 150,
      servingSize: "1 cup",
      nutrients: {
        protein: 10,
        carbs: 25,
        fat: 1,
        fiber: 10
      },
      category: "veg"
    },
    {
      id: 31,
      name: "Chana Dal",
      image: "chana_dal.jpg",
      calories: 160,
      servingSize: "1 cup",
      nutrients: {
        protein: 11,
        carbs: 27,
        fat: 1.5,
        fiber: 8
      },
      category: "veg"
    }
  ]
};

export default foodData;
