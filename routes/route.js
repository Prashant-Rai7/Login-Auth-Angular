const express = require("express");
const app = express.Router() 
const signup_data = require("../models/model");



//to register data of user in database using Angular form.
app.post('/register', (req,res) => {
      console.log(req.body);
      const user = new signup_data({
        adminName: req.body.adminName,
        email: req.body.email,
        password: req.body.password,
      })
      user.save()
      .then(() => {
        res.json({success: true, message: "Account has been created"})
        
      }).catch((err) => {
        console.log(err);
        if(err.code === 11000){
          return res.json({success: false, message: "Email Already Exists"})
        }
        res.json({success: false, message: err})
      })
})


//to login user using the credentials used in signup.
app.post('/login', (req,res) => {

})

//to fetch data from database of registered user.
app.get('/logindata', async (req, res) => {
  try {
    const data = await signup_data.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = app