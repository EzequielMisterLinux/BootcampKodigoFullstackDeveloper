const Main = () => {
    let content = [
        {
            "Prep": "5 mins",
            "Cook": "5 mins",
            "Total": "10 mins"
        }
    ];

    let ingredients = [
        "4 large eggs <span class='subtext'>room temperature</span>",
        "1/4 cup whole milk",
        "1/4 teaspoon kosher salt",
        "2 tablespoons unsalted butter"
    ];

    let instructions = [
        "Beat the eggs and milk until light and frothy.",
        "Heat a nonstick skillet over medium heat and add the butter.",
        "Pour in the eggs. Let them set for a few seconds.",
        "Use a spatula to push the cooked eggs from the edges of the skillet towards the center.",
        "When the eggs are mostly set but still soft, fold them in half.",
        "Slide the omelette onto a plate."
    ];

    let nutritionFacts = [
        "Calories: 292 kcal",
        "Carbohydrates: 1g",
        "Protein: 13g",
        "Fat: 26g"
    ];

    const main = document.createElement("main");

    main.innerHTML = `
        <section class="section-image">
            <h1>Omelette Recipe</h1>
        </section> 

        <section class="section-image">
            <img class="image-first" />
        </section>

        <section class="section-recipe">
            <h2>Classic Omelette</h2>
            <ul class="content-card">
                ${content.map(cont => `
                    <li>
                        <p class="justify-line">Prep:</p> <p>${cont.Prep}</p>
                    </li>
                    <li>
                        <p class="justify-line">Cook:</p> <p>${cont.Cook}</p>
                    </li>
                    <li>
                        <p class="justify-line">Total:</p> <p>${cont.Total}</p>
                    </li>
                `).join('')}
            </ul>

            <div class="card card-ingredients">
                <h3>Ingredients</h3>
                ${ingredients.map(ingredient => `<p>${ingredient}</p>`).join('')}
            </div>

            <div class="card card-instructions">
                <h3>Instructions</h3>
                ${instructions.map((step, index) => `<p>${index + 1}. ${step}</p>`).join('')}
            </div>

            <div class="card card-nutrition">
                <h3>Nutrition Facts</h3>
                ${nutritionFacts.map(fact => `<p>${fact}</p>`).join('')}
            </div>
        </section>
    `;

    document.body.appendChild(main);
}

document.addEventListener('DOMContentLoaded', Main);
