const express = require("express");
const cors = require("cors");

const createError = require('http-errors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const multer = require("multer");
const ejs = require('ejs');
const path = require('path');
const moment = require("moment");

const fs = require('fs');
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());




app.use("/uploads",express.static("./uploads"));
require("dotenv").config();


mongoose.connect("mongodb+srv://bimohitshrestha:Beckham123@cluster0.sjobnvj.mongodb.net/bimohit?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String
});

const User = new mongoose.model("User", userSchema);



const imgSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    price:{
      type:String,
      required:true
    },
    desc:{
      type:String,
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

const images = new mongoose.model("images",imgSchema) 

const imgconfig = multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,"./uploads")
  },
  filename:(req,file,cb)=>{
     cb(null,`image-${Date.now()}. ${file.originalname}`)
  }
})

//img filter
isImage = (req,file,cb)=>{
  if(file.mimetype.startsWith("image")){
      cb(null,true)
  }else{
      cb(new Error("Only image is allowed"))
  }
}

const upload = multer({
  storage:imgconfig,
  fileFilter:isImage
})

//user register
app.post("/reg",upload.single("photo"),async(req,res)=>{

  const {fname} = req.body;
  const {filename} =req.file;
  const {desc} = req.body;
  const {price} =req.body;
  
  

  if(!fname || !filename || !desc || !price){
      res.status(401).json({status:401,message:"fill all the data "})
  }

  try {
     const date = moment(new Date()).format("YYYY-MM-DD"); 


      const userdata = new images({
          fname:fname,
          imgpath:filename,
          price:price,
          desc:desc,
          date:date
      });

      const finaldata = await userdata.save();

      res.status(200).json({status:200,finaldata});
      
  } catch (error) {
      res.status(401).json({status:401,error})
      
  }
})

//user data get
app.get("/getdata",async(req,res)=>{
  try {
      const getUser = await images.find();

      res.status(200).json({status:200,getUser})
      
  } catch (error) {
      res.status(401).json({status:200,error})
      
  }
})
//delete user data
app.delete("/delete/:id",async(req,res)=>{
  try {
      const {id} = req.params;

      const dltUser = await images.findByIdAndDelete({_id:id})
      res.status(200).json({status:200,dltUser})
  } catch (error) {
      res.status(401).json({status:401,message:"user delete"})
  }
})





app.post('/login', async (req, res) => {
 
  try {
    
    const user = await User.findOne({
        name: req.body.name
    });
    if (!user) {
        return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
        return next(createError(400, "Wrong password or username"));
    }

    res.status(200).json(user);
} catch (err) {
    res.status(500).json(err);
}
   
   
});

app.post('/signup', async (req, res) => {
  try{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt)


   const newUser = new User({
    name:req.body.name,
    email:req.body.email,
    password:hash,        
   })
   await newUser.save()
   res.status(200).send("User has been registered succesfully.")
}catch(err){
    res.status(500).send("failed to register.")
}
});

app.post('/order', async (req, res) => {
  try {
    
    const user = await User.findOne({
        name: req.body.name
    });
    if (!user) {
        return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
        return next(createError(400, "Wrong password or username"));
    }

    res.status(200).json(user);
} catch (err) {
    res.status(500).json(err);
}
   
});





app.listen(5000, () => {
  console.log("Server started at port 5000");
});