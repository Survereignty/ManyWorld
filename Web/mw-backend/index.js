const express     = require("express");
const app         = express();
const json        = express.json();

const readline     	= require("readline");
const r1         	= readline.createInterface({
  input:     process.stdin,
  output:    process.stdout
});

const test = {
    email : "vlad@gmail.com",
    password : "333222"
}

const errorList = {
	enTrueAut	: "The request was successful",
	ruTrueAut	: "Запрос прошел успешно",
	enFalseAut 	: "Invalid email or password",
	ruFalseAut 	: "Не верные email или пароль"
} 

// const bcrypt = require("bcrypt");

const MongoClient = require('mongodb').MongoClient;


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.send('ok');
});

app.post("/authorization", json, (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')
  
    if(req.body.email == test.email &&
       req.body.password == test.password)
        
        if(req.body.lang == "ru") 
        	res.json({
            	result  : true,
            	massage : errorList.ruTrueAut
        	});
    	else 
    		res.json({
            	result  : true,
            	massage : errorList.enFalseAut
        	});
    else 
    	if(req.body.lang == "ru")	
    		res.json({
            	result  : false,
            	massage : errorList.ruFalseAut
        	});
    	else 
    		res.json({
            	result  : false,
            	massage : errorList.enFalseAut
        	});

})

app.listen(3000);

r1.on("line", (input) => {
    if (input.toLowerCase() == "закрыть" || input.toLowerCase() == "завершить")
        {
            console.log("___ \nХорошего дня, хозяин! \n___");
            process.exit();
        }
})

console.log("___ \nПриложение запущено хозяин! \n___");