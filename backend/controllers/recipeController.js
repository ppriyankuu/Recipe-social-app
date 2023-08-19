import recipeModel from "../models/recipeModel.js";
import userModel from "../models/userModel.js";

const getRecipes = async (req, res) => {
  try {
    const response = await recipeModel.find({});

    res.status(200).json(response);
  } catch (error) {
    console.log(`error in getRecipes: ${error.message}`);
  }
};

const createRecipe = async (req, res) => {
  const recipe = new recipeModel(req.body);

  try {
    const response = await recipe.save();

    res.status(200).json(response);
  } catch (error) {
    console.log(`error in createRecipe: ${error.message}`);
  }
};

const saveRecipe = async (req, res) => {
  try {
    const { recipeId, id } = req.body;

    if (!recipeId || !id) {
      return res
        .status(400)
        .json({ message: "Both recipeId and id are required." });
    }

    const recipe = await recipeModel.findById(recipeId);
    const user = await userModel.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Make sure user.savedRecipes is an array
    if (!Array.isArray(user.savedRecipes)) {
      user.savedRecipes = [];
    }

    user.savedRecipes.push(recipe);
    await user.save();

    res.status(200).json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    console.log(`error in saveRecipe: ${error.message}`);
    res.status(500).json({ message: "Error saving recipe" });
  }
};

const getSavedRecipe = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    console.log(`error in getSavedRecipes: ${error.message}`);
    res.status(500).json({ message: "Error fetching saved recipes" });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.savedRecipes) {
      // If savedRecipes array is not defined, return an empty array
      return res.json({ savedRecipes: [] });
    }

    const savedRecipes = await recipeModel.find({
      _id: { $in: user.savedRecipes },
    });

    res.json({ savedRecipes });
  } catch (error) {
    console.log(`error in getSavedRecipes: ${error.message}`);
    res.status(500).json({ message: "Error fetching saved recipes" });
  }
};

export {
  getRecipes,
  createRecipe,
  saveRecipe,
  getSavedRecipe,
  getSavedRecipes,
};
