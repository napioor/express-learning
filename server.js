const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmiCalculator",function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var finalResult = weight / (height * height);

   res.send("BMI is " + finalResult);
});

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});
// app.listen(port, ( => console.log('Calculator app listening at http://localhost:${port}'));