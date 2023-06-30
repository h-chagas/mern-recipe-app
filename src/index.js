// Setup Express
import dotenv  from "dotenv"
import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'

dotenv.config()

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

//db connection
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@recipes.jehmlkb.mongodb.net/recipes?retryWrites=true&w=majority`)

//Run Server
app.listen(process.env.PORT || 3001, () => console.log("Server started!"));

