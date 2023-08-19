import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipes",
    },
  ],
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
