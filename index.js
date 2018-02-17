var express=require('express');
var path=require('path');
var app=express();
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"src","index.html"));
});
app.get('/:timeparam',function(req,res){
    var inputTime=req.params.timeparam;
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var regexUnix=/^\d+$/g;
    var regexNatural=/^(\w+)\s*(\d{2}),\s*(\d{4})$/g;
    function timeReturn(inputTime){
        var t=new Date(inputTime);
        var time={
            unix:t.valueOf(),
            natural:months[t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()
        }
        res.send(time);
    }
    if(inputTime.match(regexUnix)&&(new Date(parseInt(inputTime)))!="Invalid Date"){
        timeReturn(parseInt(inputTime));
    }
    else if(inputTime.match(regexNatural)&&(new Date(inputTime))!="Invalid Date"){
        timeReturn(inputTime);
    }
    else{
        var time={
            unix:null,
            natural:null
        }
        res.send(time);
    }
});
app.listen(80);
console.log("Server started on port 80");