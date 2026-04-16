require("dotenv").config();
const app = require('./app')
const db = require('./db');

app.listen(5071, ()=>{
    console.log("Server is running on port 5071");
})