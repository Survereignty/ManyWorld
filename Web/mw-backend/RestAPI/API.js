const express     = require("express");
const app         = express();
const json        = express.json();


const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

const errorList 	= require("./ErrorList");
const user 			= require("../module/user");


const JWT 			= require("jsonwebtoken");
const signature 	= "R1RLYYVB";
const expiration 	= "4h";


app.post("/authorization", json, (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

	mongoClient.connect((err, client)=>{
	 
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.findOne({ email: req.body.email }, (err, result) =>{
	        if (result === null)
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

	        else
				if(	req.body.password == result.password){

					result.token = JWT.sign({name: result.name, email: result.email, role: result.role}, signature, { expiresIn: expiration });
					console.log(result.token);
					if(req.body.lang == "ru")
						res.json({
							result  : true,
							massage : errorList.ruTrueAut,
							token 	: result.token
						});
					else
						res.json({
							result  : true,
							massage : errorList.enTrueAut,
							token 	: result.token
						});
				}else{
					
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
				}		
			client.close();	
		})
    });
});

app.post("/user", json, (req, res)=> {
	res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
	mongoClient.connect((err, client)=>{
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.findOne({ email: req.body.email }, (err, result) =>{
	        if (result === null){
	            collection.insertOne(new User(req.body.name, req.body.email, req.body.password, req.body.role), (err, result)=>{
	                
	                if(err) { 
	                	console.log("Ошибка - " + err);
	                	
	                	if(req.body.lang == ru) 	res.json({result  : false, massage : errorList.ruFAddUser});
	                	else 						res.json({result  : false, massage : errorList.enFAddUser});
					}	
	                client.close();
	                if(req.body.lang == ru)			res.json({result  : true, massage : errorList.ruTAddUser});
	                else 							res.json({result  : true, massage : errorList.enTAddUser});
	            });
            }
	        else {
	        	if(req.body.lang == ru) 			res.json({result  : true, massage : errorList.ruRAddUser});
                else 								res.json({result  : true, massage : errorList.enRAddUser});
	        }
	        client.close();
	    });
	});
});


app.post("/refresh", json, (req, res) => {

})

module.exports = app;