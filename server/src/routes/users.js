import dotenv  from "dotenv"
import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from "../models/Users.js";

dotenv.config()

const router = express.Router()


router.post("/register", async(req, res) => {
    const { username, password } = req.body;  //sending information from the front-end to the back-end - REQ
    const user = await UserModel.findOne({username: username}); //confirming with the db if the username exists.

    if(user) { 
        return res.json({ message: "This username is already taken!"}) //back-end replying to front-end that the user already exists - RES
    }

    const hashedPassword = await bcrypt.hash(password, 10); //to hash passwords
        const newUser = new UserModel({username, password: hashedPassword}) //add user to the db, using a hashed password above created  (traditional way to add something to MongoDB with mongoose)
    await newUser.save();

    res.json({ message: `User ${newUser.username} Registered Successfully!`}); //back-end replying to front-end that the user was registered with success - RES
});


router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username: username});

    if(!user) { 
        return res.json({ message: "User doesn't exist"}) 
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);  //decrypting the password with .compare from bcrypt

    if (!isPasswordValid) { 
        return res.json({ message: "Username or Password is invalid"})
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN); //creates a token with json web token
    res.json({token, userID: user._id});
});



export {router as userRouter};