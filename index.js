const express = require("express");
const app = express();
const { type } = require("os");
require('dotenv').config()
const PORT = 8000;
const {connectMongoDb}=require('./connection');
// const {logReqRes} = require('./middlewares')

const userRouter= require("./routes/user")

connectMongoDb('mongodb://127.0.0.1:27017/usersData').then(()=>console.log("MongoDb connected"))








//middleware
app.use(express.urlencoded({extended:false}))
// app.use(logReqRes("logs.txt"))


// Routes
app.use('/api/users',userRouter)
app.listen(PORT, () => console.log("APP has started on PORT " + PORT));
