import createRecipeCard from "./factory.js"

const recipeList = document.querySelector("#recipeList")

export default recipes => {
    // Clear the current content
    recipeList.textContent = ""

    // Fill container with recipe HTML representations
    for (const recipe of recipes) {
        const recipeCard = createRecipeCard(recipe)
        recipeList.innerHTML += recipeCard
    }
}