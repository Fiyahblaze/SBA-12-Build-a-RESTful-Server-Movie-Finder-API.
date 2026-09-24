// DEPENDENCIES
const express = require("express");
const router = express.Router();

// Landing Route
router.get("/", (req, res)=>{
    res.send("This is the new landing page")
});

module.exports = router;