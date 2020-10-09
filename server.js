const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection")

const app = express();

const PORT = process.env.PORT || 8080;

//Serve static content for the app from the 'public' directory in the application directory
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//VIEWS ROUTES

app.get("/", (req, res) => {
    connection.query("SELECT * FROM burger", (err,data) => {
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