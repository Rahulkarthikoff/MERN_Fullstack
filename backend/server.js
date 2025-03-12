const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./model/UserSchema");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()
const app = express();


app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));



app.post("/register",async (req,res)=>{
    const {name, email, password }= req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser)return res.status(400).json({message: "User already exists."});

        const hashedPassword = await bcrypt.hash(password,10);



        const newUser = new User({name, email, password:hashedPassword});

        await newUser.save();

        res.status(201).json({message: "User Registration Success"});

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message : "Server Error"});
    }

});




app.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    try{
    const user = await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({message: "Invalid User and password"})
    }
    const JWT_SECRET = process.env.JWT_SECRET

    const token = jwt.sign({id: user._id},JWT_SECRET, {expiresIn : "1h"});

    res.json({token,user: {id: user._id, name: user.name, email: user.email}});

    }
    catch(err)
    {
        res.status(500).json({message : "Server Error"});
    }
});


const PORT = process.env.PORT;

app.listen(PORT || 5000,()=>{
    console.log(`Server Running on Port ${PORT}`);
})