import RecipeCard from "./RecipeCard.jsx";

const RecipeList = ({recipes}) => {
    console.log(recipes)
    return (
        <div>
            {recipes && recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    );
};

export default RecipeList;