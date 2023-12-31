import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ type: String, required: true }],
  instructions: {
    type: String,
    required: true,
  },
  imgUrl: { type: String, required: true },
  cookingTime: {
    type: Number,
    required: true,
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

const recipeModel = mongoose.model("recipes", recipeSchema);

export default recipeModel;
