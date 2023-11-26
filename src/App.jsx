import RecipeList from "./RecipeList.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
        <div className={"bg-black"}>
            <div className={"bg-white min-h-screen max-w-screen-sm mx-auto px-5"}>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default App
