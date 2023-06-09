// Setup Express
import express from "express"
import cors from "cors"
import mongoose from 'mongoose'

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log("Server started!"));