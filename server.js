const app = require("express")()
const path = require("path")

app.use("/", function (req, res, next) {
 const options = {
  root: path.join(__dirname),
 }
 const pathe = req.path
 var fileName
 if (pathe == "/1") {
  fileName = "./MTD.txt"
 } else if (pathe == "/2") {
  fileName = "./MTR.txt"
 } else {
  fileName = "./MTD.txt"
 }
 res.sendFile(fileName, options, function (err) {
  if (err) {
   next(err)
  } else {
   console.log("Sent:", fileName)
   next()
  }
 })
})
app.get("/", (req, res) => {
 const data = `1.MTD
    2.MTR
    3.MTM
    `
 res.send(data)
})

app.listen(3000)
