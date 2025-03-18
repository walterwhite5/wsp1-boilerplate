import "dotenv/config"
import logger from "morgan"
import express from "express"
import nunjucks from "nunjucks"
import bcrypt from "bcrypt"

const app = express()
const port = 3000

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})

app.use(express.static("public"))

app.use(logger("dev"))

app.get("/", (req, res) => {
  res.render("index.njk",
    { title: "Qvixter", message: "Best service, legit." }
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


let myPlaintextPassword = "SecurePass100"
bcrpyt.hash(myPlaintextPassword, 10, function(err, hash) {
  console.log(hash)
})