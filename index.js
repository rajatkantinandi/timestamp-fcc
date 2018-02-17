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
            unix:Math.floor(t.valueOf()/1000),
            natural:months[t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()
        }
        res.send(time);
    }
    if(inputTime.match(regexUnix)&&(new Date(parseInt(inputTime)))!="Invalid Date"){
        timeReturn(parseInt(inputTime)*1000);
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
// listen for requests :)
var listener = app.listen(process.argv[2], function () {
  console.log('Your app is listening on port ' + listener.address().port);
});