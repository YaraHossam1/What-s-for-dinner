var recipes = [
  {
    rate: 4.6,
    review: 278,
    PrepTime: 15,
    CookTime: 20,
    Servings: 4,
    image: "./Images/imageye___-_imgi_2_photo-1509722747041-616f39b57569.jpg",
    recipeDifficulty: "easy",
    recipeCountry: "American",
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    Ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    Instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    Nutrition: {
      Calories: "420 kcal",
      Carbohydrates: "32g",
      Fiber: "4g",
      Protein: "26g",
      Fat: "20g",
      Sodium: "780mg",
    },
    ChefsTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },

  {
    rate: 4.8,
    review: 320,
    PrepTime: 20,
    CookTime: 30,
    Servings: 4,
    image: "./Images/imageye___-_imgi_2_photo-1585032226651-759b368d7246.jpg",
    recipeDifficulty: "medium",
    recipeCountry: "Italian",
    name: "Creamy Pasta",
    description: "Rich and creamy pasta with garlic parmesan sauce",
    Ingredients: [
      "400g pasta",
      "2 cups heavy cream",
      "1 cup parmesan cheese",
      "2 garlic cloves",
      "2 tablespoons butter",
    ],
    Instructions: [
      "Boil pasta until al dente.",
      "Melt butter in a pan.",
      "Add garlic and cook for 1 minute.",
      "Pour cream and parmesan cheese.",
      "Mix pasta with sauce and serve.",
    ],
    Nutrition: {
      Calories: "520 kcal",
      Carbohydrates: "55g",
      Fiber: "3g",
      Protein: "18g",
      Fat: "24g",
      Sodium: "650mg",
    },
    ChefsTips: [
      "Use fresh parmesan",
      "Do not overcook pasta",
      "Add mushrooms if desired",
    ],
  },

  {
    rate: 4.7,
    review: 210,
    PrepTime: 10,
    CookTime: 15,
    Servings: 2,
    image: "./Images/imageye___-_imgi_2_photo-1603133872878-684f208fb84b.jpg",
    recipeDifficulty: "easy",
    recipeCountry: "Greek",
    name: "Greek Salad",
    description: "Fresh salad with feta cheese and olives",
    Ingredients: ["Tomatoes", "Cucumber", "Feta cheese", "Olives", "Olive oil"],
    Instructions: [
      "Chop vegetables.",
      "Add olives and feta cheese.",
      "Drizzle olive oil.",
      "Mix well and serve.",
    ],
    Nutrition: {
      Calories: "250 kcal",
      Carbohydrates: "12g",
      Fiber: "5g",
      Protein: "8g",
      Fat: "18g",
      Sodium: "500mg",
    },
    ChefsTips: ["Use fresh vegetables", "Add lemon juice for extra flavor"],
  },

  {
    rate: 4.9,
    review: 450,
    PrepTime: 25,
    CookTime: 40,
    Servings: 5,
    image: "./Images/photo-1546069901-ba9599a7e63c.jpg",
    recipeDifficulty: "medium",
    recipeCountry: "Italian",
    name: "Pepperoni Pizza",
    description: "Classic homemade pepperoni pizza",
    Ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Pepperoni slices",
    ],
    Instructions: [
      "Prepare pizza dough.",
      "Spread tomato sauce.",
      "Add cheese and pepperoni.",
      "Bake for 20 minutes.",
    ],
    Nutrition: {
      Calories: "600 kcal",
      Carbohydrates: "70g",
      Fiber: "4g",
      Protein: "22g",
      Fat: "28g",
      Sodium: "900mg",
    },
    ChefsTips: ["Preheat oven well", "Use pizza stone if available"],
  },

  {
    rate: 4.5,
    review: 180,
    PrepTime: 15,
    CookTime: 25,
    Servings: 3,
    image: "./Images/photo-1568901346375-23c9450c58cd.jpg",
    recipeDifficulty: "easy",
    recipeCountry: "Indian",
    name: "Grilled Chicken",
    description: "Juicy grilled chicken with spices",
    Ingredients: ["Chicken breasts", "Yogurt", "Garlic", "Spices"],
    Instructions: [
      "Marinate chicken.",
      "Heat grill.",
      "Cook chicken until done.",
      "Serve hot.",
    ],
    Nutrition: {
      Calories: "390 kcal",
      Carbohydrates: "8g",
      Fiber: "1g",
      Protein: "40g",
      Fat: "18g",
      Sodium: "540mg",
    },
    ChefsTips: ["Marinate overnight", "Do not overcook chicken"],
  },

  {
    rate: 4.7,
    review: 260,
    PrepTime: 30,
    CookTime: 50,
    Servings: 6,
    image: "./Images/photo-1612874742237-6526221588e3.jpg",
    recipeDifficulty: "hard",
    recipeCountry: "French",
    name: "Chocolate Cake",
    description: "Soft and rich chocolate cake",
    Ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter"],
    Instructions: [
      "Mix dry ingredients.",
      "Add eggs and butter.",
      "Pour into baking pan.",
      "Bake until ready.",
    ],
    Nutrition: {
      Calories: "480 kcal",
      Carbohydrates: "60g",
      Fiber: "3g",
      Protein: "6g",
      Fat: "22g",
      Sodium: "300mg",
    },
    ChefsTips: ["Use high-quality cocoa", "Let cake cool before serving"],
  },
];

var lastRandom = -1;
function changeRecipes() {
  var randomRecipe;
  while (true) {
    randomRecipe = Math.floor(Math.random() * recipes.length);

    if (randomRecipe != lastRandom) {
      break;
    }
  }

  lastRandom = randomRecipe;
  var currentRecipe = recipes[randomRecipe];

  var IngredientsHTML = "";
  for (let i = 0; i < currentRecipe.Ingredients.length; i++) {
    IngredientsHTML += `
                 <div class="ingredient-item">
                    <span class="ing-num">${i + 1}</span
                    ><span class="ing-text">${currentRecipe.Ingredients[i]}</span>
                  </div>
    `;
  }
  var InstructionsHTML = "";
  for (let i = 0; i < currentRecipe.Instructions.length; i++) {
    InstructionsHTML += `
                 <div class="step-row">
                    <span class="step-badge">${i + 1}</span
                    ><span class="step-text"
                      >${currentRecipe.Instructions[i]}</span
                    >
                  </div>`;
  }
  var ChefsTipsHTML = "";
  for (let i = 0; i < currentRecipe.ChefsTips.length; i++) {
    ChefsTipsHTML += `
    <div class="tip-row">
                  <span class="tip-check"
                    ><i class="fas fa-circle-check"></i></span
                  ><span class="tip-text"
                    >${currentRecipe.ChefsTips[i]}</span
                  >
                </div>
    `;
  }

  var alertMessage = "";
  if (recipes[randomRecipe].CookTime + recipes[randomRecipe].PrepTime >= 45) {
    alertMessage += `
    <div
              class="alert-message rounded-2 d-flex align-items-center gap-2 my-3"
            >
              <div class="icon">
                <i class="fas fa-triangle-exclamation"></i>
              </div>
              <div class="content">
                <p>Extended Preparation Time</p>
                <p>
                  This recipe requires more than 45 minutes to prepare. Plan
                  accordingly!
                </p>
              </div>
            </div>
    `;
  }
  document.getElementById("demo").innerHTML = `
      <div class="row bg-white g-3">
          <div class="col-lg-5 col-12 position-relative left mt-0">
            <div class="image-holder">
              <img
                src=${currentRecipe.image}
                alt="Caprese Sandwich"
                class="img-fluid"
              />
            </div>

            <div class="hero-img-overlay">
              <span class="stars-badge bg-white">
                <span class="star"
                  ><i class="fas fa-star text-warning"></i
                ></span>
                ${currentRecipe.rate}
                <span
                  class="text-muted fw-normal ms-1"
                  style="font-size: 0.8rem"
                  >(${currentRecipe.review} reviews)</span
                >
              </span>
            </div>

            <div
              class="timing-bar position-absolute d-flex bg-white justify-content-around"
            >
              <div class="timing-item one">
                <p class="icon"><i class="fas fa-clock"></i></p>
                <p class="label">Prep Time</p>
                <p class="value">${currentRecipe.PrepTime} min</p>
              </div>
              <div class="timing-item two">
                <p class="icon"><i class="fas fa-fire-burner"></i></p>
                <p class="label">Cook Time</p>
                <p class="value">${currentRecipe.CookTime} min</p>
              </div>
              <div class="timing-item three">
                <p class="icon"><i class="fas fa-users"></i></p>
                <p class="label">Servings</p>
                <p class="value">${currentRecipe.Servings} people</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12 right mt-0">
            <div class="d-flex align-items-start justify-content-between mb-3">
              <div>
                <div class="d-flex gap-2 mb-3">
                  <span class="badge easy">${currentRecipe.recipeDifficulty}</span>
                  <span class="badge italian">${currentRecipe.recipeCountry}</span>
                </div>
                <h1 class="recipe-title fw-bold">${currentRecipe.name}</h1>
                <p class="recipe-subtitle">
                  ${currentRecipe.description}
                </p>
              </div>
              <div class="d-flex gap-2 ms-3 mt-1">
                <button class="action-btn" title="Save">
                  <i class="fas fa-bookmark"></i>
                </button>
                <button class="action-btn" title="Share">
                  <i class="fa fa-share-nodes"></i>
                </button>
              </div>
            </div>

            ${alertMessage}
            <div class="tab-content" id="pills-tabContent">
              <ul
                class="nav nav-pills mb-3 recipe-tabs mb-4"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <i class="fas fa-list-check"></i> Ingredients
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <i class="fas fa-book-open"></i>Instructions
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <i class="fas fa-chart-pie"></i>Nutrition
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-disabled"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                  >
                    <i class="fas fa-lightbulb"></i>Chef's Tips
                  </button>
                </li>
              </ul>
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="ingredients-card d-flex flex-column gap-3">
                  ${IngredientsHTML}
                </div>
              </div>
              <div
                class="tab-pane fade Instructions"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div class="d-flex flex-column gap-4">
                  ${InstructionsHTML}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div class="nutrition-grid row g-3">
                  <div class="col-lg-6 col-12 d-flex flex-column gap-3">
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-orange">
                        <i class="fas fa-fire"></i>
                      </div>
                      <span class="nutrition-name">Calories</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Calories} kcal</span>
                    </div>
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-blue">
                        <i class="fas fa-dumbbell"></i>
                      </div>
                      <span class="nutrition-name">Protein</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Protein}g</span>
                    </div>
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-yellow">
                        <i class="fas fa-wheat-awn"></i>
                      </div>
                      <span class="nutrition-name">Carbohydrates</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Carbohydrates}g</span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 d-flex flex-column gap-3">
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-red">
                        <i class="fas fa-droplet"></i>
                      </div>
                      <span class="nutrition-name">Fat</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Fat}g</span>
                    </div>
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-green">
                        <i class="fas fa-seedling"></i>
                      </div>
                      <span class="nutrition-name">Fiber</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Fiber}g</span>
                    </div>
                    <div class="nutrition-row">
                      <div class="nutrition-icon-box nic-pink">
                        <i class="fas fa-cube"></i>
                      </div>
                      <span class="nutrition-name">Sodium</span>
                      <span class="nutrition-val">${currentRecipe.Nutrition.Sodium}mg</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              >
                ${ChefsTipsHTML}
              </div>
            </div>
            <div class="grayline"></div>
            <div class="mt-4 pt-2">
              <button class="btn-try" onclick="changeRecipes()">
                ↻ Try Another Recipe
              </button>
            </div>
          </div>
        </div>
  `;
}
