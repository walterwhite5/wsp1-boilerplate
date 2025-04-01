import "dotenv/config"
import logger from "morgan"
import express from "express"
import nunjucks from "nunjucks"
import session from "express-session"
import bcrypt, { hash } from "bcrypt"


const app = express()
const port = 3000

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})

app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { sameSite: true }
}))

app.use(express.static("public"))

app.use(logger("dev"))



app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }
  res.render("index.njk",
    { title: "Test", message: "Funkar?", views: req.session.views }
  )
})

//app.get("/", (req, res) => {

  //let myPlaintextPassword = "SecurePass100"
  //bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
  //  console.log(hash)
  //})

  //res.render("index.njk",
  //  { title: "Qvixter", message: "Best service, legit." }
  //)
//})



app.get("/login", (req,res) => {
  // visa loginformulär
})




app.post("/login", (req, res) => {
  // req.body
  console.log(req.body)
  // installera body-parser
  // hämta data från databasen för att sedan
  // jämföra lösenorden med bcrypt.compare()
  // om lösenorden stämmer, result == True
  // då sätter du req.session.loggedin = True
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})