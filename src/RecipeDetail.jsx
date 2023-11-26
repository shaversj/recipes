import { useParams } from 'react-router-dom';
const RecipeDetail = ({recipes}) => {
    let params = useParams();
    const recipe = recipes.find(item => item.id == params.id)

    return (
        <div className={"space-y-2"}>
            <h1>{recipe.Name}</h1>
            <h2>Ingredients</h2>
            <ul className={"list-disc list-inside"}>
                {recipe && recipe.Ingredients.map((ingredient) => <li className={"pl-4"}>{ingredient.Measurement} - {ingredient.Name}</li>)}
            </ul>
            <h2>Directions</h2>
            <ol className={"list-decimal list-inside"}>
                {recipe && recipe.Steps.map((step) => <li className={"pl-4"}>{step}</li>)}
            </ol>
        </div>
    );
};

export default RecipeDetail;