import express from "express";
import {
  getRecipes,
  createRecipe,
  saveRecipe,
  getSavedRecipe,
  getSavedRecipes,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipes);

router.post("/", createRecipe);

router.put("/", saveRecipe);

router.get("/save/ids/:userId", getSavedRecipe);

router.get("/save/:userId", getSavedRecipes);

export default router;
