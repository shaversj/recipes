import {HiChevronRight} from "react-icons/hi";
import {Link} from "react-router-dom";

const RecipeCard = ({recipe}) => {
    return (
        <>
            <Link to={`/recipe/${recipe.id}`} className={"flex gap-x-2 items-center"}>

                    <img className={"w-[50px] h-[50px]"} src={recipe.Image} alt={""} />
                    <div>
                        <h1 className={"text-black text-[14px]"}>{recipe.Name}</h1>
                        <ul className={"flex space-x-5 list-disc"}>
                            <li className={"text-[10px] empty:hidden"}>{recipe.Difficulty}</li>
                            <li className={"text-[10px] empty:hidden"}>{recipe.PrepTime} prep time</li>
                            <li className={"text-[10px] empty:hidden"}>{recipe.CookTime} cook time</li>
                        </ul>

                    </div>
                <HiChevronRight className={"ml-auto"} size={"2em"} />


            </Link>
        </>
    );
};

export default RecipeCard;