require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express()
const workoutRoutes = require('./routes/Workouts.js')

// Middleware
app.use(express.json());

app.use((  req, res, next) => {
    console.log(req.path, req.method);
    next();
}
);
// to parse JSON bodies




app.get('/',(req,res)=>{
    res.json({
        message:"Hello World</h1>"
    })
}
)

app.use('/workouts', workoutRoutes)

mongoose.connect(process.env.Mongo_Uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });



app.listen(process.env.PORT_NUMBER,()=>{
    console.log("Server is running on port "+process.env.PORT_NUMBER);
})