const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
require('./database/db');


const Routes = require('./routes/route')
app.use(Routes)
const Model = require('./models/model')

 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 