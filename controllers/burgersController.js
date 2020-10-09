const express = require("express");

const router = express.Router();

//the one from the model directory
const burger = require("../models/burger.js");




//Export routes for server.js to use
module.exports = router;