const fs = require('fs');
const express = require('express');

let app = express();

app.listen(8080,() => {
    console.log("test server");
})

app.get("/test",(req,res,next) => {
    res.send("test");
})

function loadJSON(filename = ''){
    if(fs.existsSync(filename)){
        return JSON.parse(fs.readFileSync(filename).toString());
    }
    else{
        return '';
    }
}

function saveJSON(filename = '',json = '""'){
    fs.writeFileSync(filename,JSON.stringify(json,null,2))
}

//console.log(loadJSON('data.json'))

//saveJSON('data.json',data);