// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const landingRouter = require("./routes/index.js");

// MIDDLEWARE - Communication between endpoints, runs between req and res.
app.use("/", landingRouter)


// ROUTES
app.get("/home", (req, res)=>{
    res.send("This is the Home page!")
});

app.get("/about", (req, res)=>{
    res.send("This is the About page!")
});

app.get("/contact", (req, res)=>{
    res.send("This is the Contact page!")
});

// PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
});