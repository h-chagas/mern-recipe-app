import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }], //in a array once there are more than one ingredients
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  userOwner: { //link with user who is creating the recipe
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }, 
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema); //recipes is the name of the schema in MongoDB. If there isn't this schema, it will be created!
