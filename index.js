const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/products", (req, res) => {
    res.render("products")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.get("/about", (req, res) => {
    res.render("about")
})



app.listen(3000, () => {
    console.log("App is listinding on port 3000")
})