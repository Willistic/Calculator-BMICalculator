//jshint esversion:6

const { response, request } = require("express")

const bodyParser = require("body-parser")
const express = require("express")


const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html")
})

app.post("/", function(request, response) {

    const num1 = Number(request.body.num1)
    const num2 = Number(request.body.num2)

    const result = num1 + num2
    response.send("The result of the calculation is " + result)
})

app.get("/bmicalculator", function(require, response) {
    response.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(request, response) {
    const weight = parseFloat(request.body.weight)
    const height = parseFloat(request.body.height)

    const bmi = weight / (height * height)

    response.send("Your BMI is " + bmi)
})

app.listen(3000, function() {
    console.log("Listening on port localhost:3000")
})