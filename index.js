const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function (req,res){
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  const query=req.body.location;
const apiKey="0911b603f35d4a70958134935230801";
const url ="https://api.weatherapi.com/v1/current.json?key=%200911b603f35d4a70958134935230801&q=" + query + "&aqi=yes";

https.get(url,function(resp) {
    console.log(resp.statusCode);
    resp.on("data",function(data){
        const weather =JSON.parse(data);
      //  const temp=weather.current.air_quality.co;
    //    console.log(temp);
        res.send(weather);
      });
    });
//console.log(req.body.location);
});
app.listen(3000,function(){
  console.log("server is running on port 3000");
});
