const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");


const filepath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../src/templates/views");
const partials_path = path.join(__dirname, "../src/templates/partials");

console.log(template_path);

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.use(express.static(filepath))


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("*", (req, res) => {
    res.render("404error", {
        errormsg: "OOOPS 404 PAGE NOT FOUND"

    })

    
})

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})