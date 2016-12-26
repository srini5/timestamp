var express = require("express")();

express.get('/time/:timestamp', function(req,res){
    console.log("received: "+req.params.timestamp);
    var inputDate = req.params.timestamp;
    var dateVal = new Date((isNaN(inputDate))?inputDate:Number(inputDate));
    var humanDate = "", unixDate = "";
    console.log("dateVal: "+ dateVal);
    console.log("month:" + dateVal.getMonth() + "--day:"+ dateVal.getDate() 
        + "--year:" + dateVal.getFullYear());
    if(isNaN(dateVal.getMonth())){
        humanDate = null;
        unixDate = null;
    }else{
        var month = "";
        switch(dateVal.getMonth()){
            case 0: month = "January"; break;
            case 1: month = "February"; break;
            case 2: month = "March"; break;
            case 3: month = "April"; break;
            case 4: month = "May"; break;
            case 5: month = "June"; break;
            case 6: month = "July"; break;
            case 7: month = "August"; break;
            case 8: month = "September"; break;
            case 9: month = "October"; break;
            case 10: month = "November"; break;
            case 11: month = "December"; break;
            }
        humanDate = (dateVal.getDate() && dateVal.getFullYear()) ?
            month + " " + dateVal.getDate() + ", " + dateVal.getFullYear()
            : null;
        unixDate = Date.parse(dateVal);
    }
    
    console.log(" date: "+ unixDate + "\t -->" + humanDate);

    var response = {
      "unix" : unixDate,
      "natural" : humanDate
    };
    
    
    console.log(JSON.stringify(response));
    
    res.writeHead(200,{"Content-Type":"text/json"});
    res.write(JSON.stringify(response));
    res.end();

}).listen(process.env.PORT || 8080);
