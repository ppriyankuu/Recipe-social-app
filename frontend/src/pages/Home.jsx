
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userId = useGetUserId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/recipes/");
        setRecipes(response.data);
      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    };

    const fetchSavedData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/recipes/save/ids/${userId}`
        );
        setSavedRecipes(response.data.savedRecipes);
        // console.log(response.data);
      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    };

    fetchData();
    fetchSavedData();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      setSavedRecipes([...savedRecipes, recipeId]);

      const response = await axios.put("http://localhost:8000/recipes/", {
        recipeId: recipeId,
        id: userId,
      });

      // setSavedRecipes(response.data.saveRecipes);
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto w-full h-full flex flex-col justify-center items-center gap-6 pt-2">
      <h1 className="font-bold text-5xl">Recipes</h1>
      <ul className="p-[2rem] w-full flex flex-col gap-[2rem] bg-lime-300 justify-center items-center border-4 rounded-xl border-solid border-black">
        {recipes.map((item) => {
          return (
            <li
              className="shadow-lg max-w-[500px] bg-orange-300 shadow-black rounded-lg p-[1rem]"
              key={item._id}
            >
              <div className="my-2 text-center font-bold text-xl">
                <h2>{item.name}</h2>
              </div>
              <div className="my-1">
                <p>
                  <span className="font-bold text-lg">Instructions :</span>{" "}
                  {item.instructions}
                </p>
              </div>
              <div className="overflow-hidden rounded-xl my-1">
                <img
                  className="w-[100%] object-cover"
                  src={item.imgUrl}
                  alt="/"
                />
              </div>
              <p className="font-semibold text-lg">
                Cooking Time :{" "}
                <span className="font-bold text-xl">{item.cookingTime}</span>
                <span className="text-sm">min</span>
              </p>
              {savedRecipes.includes(item._id) ? (
                <h1 className="py-1 mt-2 px-3 bg-blue-300 max-w-[70px] border-2 border-solid border-black rounded-lg text-center">
                  Saved
                </h1>
              ) : (
                <button
                  onClick={() => saveRecipe(item._id)}
                  className="py-1 mt-2 px-3 bg-lime-300 border-2 border-solid border-black rounded-lg"
                >
                  Save
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
