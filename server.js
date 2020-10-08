const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/api/config", (req,res) => {
    res.json ({
        success: true,
    });
});

app.listen(PORT,  () => {
    console.log(`server is running on http://localhost:${PORT}`);
});