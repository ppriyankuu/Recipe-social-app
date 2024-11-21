import React, { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const navigate = useNavigate();
  const userId = useGetUserId();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imgUrl: "",
    cookingTime: 0,
    owner: userId,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;

    setRecipe({ ...recipe, ingredients });
  };

  const addElement = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/recipes/", recipe);
      alert("Recipe Created Successfully!");
      setRecipe({
        name: "",
        ingredients: [],
        instructions: "",
        imgUrl: "",
        cookingTime: 0,
        owner: userId,
      });
      navigate("/");
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };

  return (
    <div className="w-[500px] py-5 mx-auto mt-10 shadow-lg shadow-black rounded-xl flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Create Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex w-[85%] flex-col justify-between gap-5 items-center"
      >
        <input
          className="w-full py-1 px-4 h-10 border-black border-2 rounded-lg"
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          placeholder="Name of the dish"
        />

        <div className="w-full flex flex-col gap-2">
          {recipe.ingredients.map((item, index) => (
            <input
              key={index}
              className="w-full py-1 px-4 h-10 border-black border-2 rounded-lg"
              type="text"
              name="name"
              value={item}
              placeholder="add ingredient"
              onChange={(event) => handleIngChange(event, index)}
            />
          ))}
          <button
            onClick={addElement}
            type="button"
            className="py-1 px-5 bg-lime-300 border-2 border-solid border-black rounded-lg"
          >
            Add ingredient
          </button>
        </div>
        <textarea
          placeholder="Instructions"
          className="py-1 px-4 border-2 resize-none border-solid border-black rounded-lg"
          cols="46"
          rows="3"
          value={recipe.instructions}
          onChange={handleChange}
          name="instructions"
        ></textarea>
        <input
          className="w-full py-1 px-4 h-10 border-black border-2 rounded-lg"
          type="text"
          name="imgUrl"
          onChange={handleChange}
          value={recipe.imgUrl}
          placeholder="Image url"
        />
        <input
          className="w-full py-1 px-4 h-10 border-black border-2 rounded-lg"
          type="Number"
          name="cookingTime"
          placeholder="Cooking Time (in mins)"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-2 px-5 bg-lime-300 border-2 border-solid border-black rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Recipe;
