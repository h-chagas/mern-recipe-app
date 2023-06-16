import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({}); //api request
    res.json(response); //send back to the front-end
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const recipe = new RecipeModel(req.body); //it gets all information from the body to create a new recipe
  try {
    const response = await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
});

router.put("/", async (req, res) => { //route to save a recipe
  try {
      const user = await UserModel.findById(req.body.userID); //get userId to find each user I am gonna change the recipe's field
      const recipe = await RecipeModel.findById(req.body.recipeID); //get recipeId to insert to this array
    user.savedRecipes.push(recipe); //push recipe to the end of the array list
    await user.save(); //save the changes made in the collection user
    res.json({savedRecipes: user.savedRecipes});
  } catch (error) {
    res.json(error);
  }
});

router.get("/savedRecipes/ids", async(req, res) => { //recipes saved by user logged in
    try {
        const user = await UserModel.findById(req.body.userID)
        res.json({savedRecipes: user?.savedRecipes})
    } catch (error) {
        res.json(error)
    }
});

router.get("/savedRecipes", async (req, res) => { //all recipes
    try {
        const user = await UserModel.findById(req.body.userID)
        const savedRecipes = await RecipeModel.find({
            _id: {$in: user.savedRecipes}
        });
        res.json({ savedRecipes })
    } catch (error) {
        res.json(error)
    }
})

export { router as recipesRouter };
