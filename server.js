const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const connection = require("./config/connection")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//VIEWS ROUTES

app.get("/", (req, res) => {
    connection.query("SELECT * FROM ...", (err,data) => {
        console.table(data);
    })
    res.render("index");
});

//API ROUTEs

app.get("/api/config", (req,res) => {
    res.json ({
        success: true,
    });
});





//APP LISTENER
app.listen(PORT,  () => {
    console.log(`server is running on http://localhost:${PORT}`);
});