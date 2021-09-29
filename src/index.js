const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs')
const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

//builtin middleware
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../template/views");
const partialPath=path.join(__dirname,"../template/partials");

//to set view engine
app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

//template engine routes
app.get("/", (req, res) => {
    res.render("Home", {
        name: "Sherry",
    });
})

app.get("/contact", (req, res) => {
    res.render("contact", {
        name: "Sherry",
        class: "SE"
    });
})

app.get("/about", (req, res) => {
    res.render("About", {
        name: req.query.name,
        age: req.query.age,
    });
})

app.get("/about/*", (req, res) => {
    res.render("404", {
        ErrorMessage: "This About Page Not Found ðŸ˜¥",
    });
})



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
  
