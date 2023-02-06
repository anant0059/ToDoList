const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    var today = new Date();

    if(today.getDay() === 6 || today.getDay() === 0){
        res.send("Yay it's the weekend!");
    }
    else{
        res.send("Boo! I have to work!");
    }
    //res.send("Hello");
});

app.listen(3000, function(){
    console.log("server started on the port 3000.");
});