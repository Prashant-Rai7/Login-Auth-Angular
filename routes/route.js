// const app = require('express').Router;
const express = require("express");
const app = express.Router()
const signup_data = require("../models/model");
const mongoose = require("mongoose");


// app.get('/', (req,res) => {
//     res.json({name: "Prashant Rai", wish: "Happy Birthday"})
// })

app.get('/', async (req, res) => {
  try {
    const data = await signup_data.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});






module.exports = app