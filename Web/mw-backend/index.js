const express 	= require("express");
const app 		= express();
const json 		= express.json();

const readline 	= require("readline");
const r1 		= readline.createInterface({
  input: 	process.stdin,
  output: 	process.stdout
});

const test = {
	email : "vlad@gmail.com",
	password : "333222"
}

const bcrypt = require("bcrypt");

const MongoClient = require('mongodb').MongoClient;


app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html")
});

app.use((req, res, next) => {
	if (!request.body) return response.sendStatus(400);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, application/json;charset=utf-8');
    next();

    app.options('*', (req, res) => {        
    	res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.send();
    });
})

app.post("/authorization", json, (req, res) =>{
	if(	req.body.email 	== test.email && 
		req.body.password == test.password) 
		res.send(1);
	else res.send(0);
})

app.listen(3000);

r1.on("line", (input) => {
	if (input.toLowerCase() == "закрыть" || input.toLowerCase() == "завершить")
		{
			console.log("___ \nХорошего дня, хозяин!");
			process.exit();
		}
})

console.log("Приложение запущено хозяин! \n___");

