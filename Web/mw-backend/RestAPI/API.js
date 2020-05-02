const express	= require("express");
const app		= express();
const json 		= express.json();

const corse 	= require("cors");

const MongoClient 	= require("mongodb").MongoClient;
const url 			= "mongodb://localhost:27017/";

const errorList = require("./ErrorList");
const user 		= require("../module/user");

const JWTCreator 	= require("../JWT/jwt");
const JWT 			= new JWTCreator("R1RLYYVB", "IR1RRLYYVB");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../" + __dirname + "/public/img/" )
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + " - " + Date.now());
  }
});
const upload = multer({storage : storage});

app.post("/authorization", json, (req, res) =>{

    const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

	mongoClient.connect((err, client)=>{
	 
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.findOne({ login: req.body.login }, (err, result) =>{
	        if (result === null)
				res.sendStatus(401);
	        else
				if(	req.body.password == result.password){

					result.ac_token = JWT.Create({login: result.login, email: result.email, role: result.role}, { expiresIn: "1m" });
					result.ref_token = JWT.CreateRefresh({login: result.login, email: result.email, role: result.role}, { expiresIn: "30d" });
					if(req.body.lang == "ru")
						res.json({
							result  	: true,
							massage 	: errorList.enTrueAut,
							ac_token 	: result.ac_token,
							ref_token	: result.ref_token,
							name 		: result.name,
							role 		: result.role
						});
					else
						res.json({
							result  	: true,
							massage 	: errorList.enTrueAut,
							ac_token 	: result.ac_token,
							ref_token	: result.ref_token,
							name 		: result.name,
							role 		: result.role
						});
				}else{
					
					res.sendStatus(401);
				}		
			client.close();	
		})
    });
});

app.post("/user", corse(), json, JWT.VerefyToken.bind(JWT), (req, res)=> {

    const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
	mongoClient.connect((err, client)=>{
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.findOne({ login: req.body.login }, (err, result) =>{
	        if (result === null){
	            collection.insertOne(new User(req.body.login, "NON", req.body.password, req.body.role), (err, result)=>{
	              
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


app.post("/refresh", json, JWT.VerefyRefToken.bind(JWT), (req, res) => {

	const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

	mongoClient.connect((err, client)=>{
	 
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.findOne({ login: req.body.login }, (err, result) =>{
			res.json({
				ac_token 	: JWT.Create({login: result.login, email: result.email, role: result.role}, { expiresIn: "1m" }),
				ref_token	: JWT.CreateRefresh({login: result.login, email: result.email, role: result.role}, { expiresIn: "30d" })
			})
			client.close();	
		})
    });
})

module.exports = app;