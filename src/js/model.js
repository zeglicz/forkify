export const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message}`);
        console.log(res, data);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.recipe_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        console.error(err);
    }
};
