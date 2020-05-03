const express	= require("express");
const app		= express();
const json 		= express.json();

const MongoClient 	= require("mongodb").MongoClient;
const url 			= "mongodb://localhost:27017/";

const errorList = require("./ErrorList");
const User 		= require("../module/user");

const JWTCreator 	= require("../JWT/jwt");
const JWT 			= new JWTCreator("R1RLYYVB", "IR1RRLYYVB");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  	req.DirImg = "../" + __dirname + "/public/img/";
    cb(null, req.DirImg )
  },
  filename: function (req, file, cb) {
  	date += file.originalname + " - " + Date.now();
  	req.DirImg += date; 
    cb(null, date);
  }
});
const upload = multer({storage : storage});

const SendRes = (req, res, resul, ru, en) => {
	if(req.body.lang == "ru")		res.json({result  : resul, massage : ru});
    else 							res.json({result  : resul, massage : en});
};

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


app.route("/user")
	.get(JWT.VerefyToken.bind(JWT), (req, res) => {

		if(req.authData.role == 1){

			const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

		    mongoClient.connect((err, client)=>{

			    const db = client.db("usersdb");
			    const collection = db.collection("users");
			    collection.find().toArray((err, result) => {
			        res.json({
			        	users: result.reverse()
			        })
			        client.close()
			    });
			});
		} else {
			SendRes(req, res, false, errorList.ruLowUser, errorList.enLowUser);
		}
	})
	.post(json, JWT.VerefyToken.bind(JWT), (req, res)=> {
		if(req.authData.role == 1){

	    	const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

			mongoClient.connect((err, client)=>{

			    const db = client.db("usersdb");
			    const collection = db.collection("users");

			    collection.findOne({ login: req.body.login }, (err, result) =>{
			        
			        if (!result){
			            collection.insertOne(new User(req.body.login, "NON", req.body.password, req.body.role, req.body.Creator), (err, result)=>{
			              
			                if(err) { 
			                	console.log("Ошибка - " + err);
			                	SendRes(req, res, false, errorList.ruFAddUser, errorList.enFAddUser);
							}	
			                
			                SendRes(req, res, true, errorList.ruTAddUser, errorList.enTAddUser);
			            	client.close();
			            });
		            }
			        else
			        	SendRes(req, res, false, errorList.ruRAddUser, errorList.enRAddUser);
			        client.close();
			    });
			});
		} else {
			SendRes(req, res, false, errorList.ruLowUser, errorList.enLowUser);
		}
	})
	.delete(json, JWT.VerefyToken.bind(JWT), (req, res)=>{
		console.log(req);

		if(req.authData.role == 1){
			
			const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
			
			mongoClient.connect((err, client)=>{
				
				const db = client.db("usersdb");
			    const collection = db.collection("users");
			    collection.deleteOne({login: req.body.login}, (err, result) => {

			    	if(err) SendRes(req, res, true, errorList.ruFDeleted, errorList.enFDeleted);
			    	SendRes(req, res, true, errorList.ruDeleted, errorList.enDeleted);	
			    });
				client.close();	    
			})
		} else {
			SendRes(req, res, false, errorList.ruLowUser, errorList.enLowUser);
		}
	})
	.put(json, JWT.VerefyToken.bind(JWT), (req, res)=>{
		
		if(req.authData.role == 1){
			
			const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
			
			mongoClient.connect((err, client)=>{
				
				const db = client.db("usersdb");
			    const collection = db.collection("users");
			    console.log(req.body);
			    console.log(req.body.update.email);
			    collection.updateOne({login: req.body.login}, {$set: req.body.update}, (err, result) => {
			    	
			    	if(!result) SendRes(req, res, false, errorList.ruFAddUser, errorList.enFAddUser);
			    	res.sendStatus(200);
			    });
			})
		} else {
			SendRes(req, res, false, errorList.ruDeleted, errorList.enDeleted);
		}
	})

app.get("/refresh", JWT.VerefyRefToken.bind(JWT), (req, res) => {
	res.json({
		ac_token 	: JWT.Create({login: req.authData.login, email: req.authData.email, role: req.authData.role}, { expiresIn: "1m" }),
		ref_token	: JWT.CreateRefresh({login: req.authData.login, email: req.authData.email, role: req.authData.role}, { expiresIn: "30d" })
	});
})

app.route("/item")
	.get(JWT.VerefyToken.bind(JWT), (req, res) => {
		if(req.authData.role == 1)
		{
			const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

		    mongoClient.connect((err, client)=>{

			    const db = client.db("usersdb");
			    const collection = db.collection("items");
			    
			    collection.find().toArray((err, result) => {
			        res.json({
			        	users: result
			        })
			        client.close()
			    });
			});
		}
	    else 
	    	SendRes(req, res, false, errorList.ruLowUser, errorList.enLowUser);
	})
	.post(json, JWT.VerefyToken.bind(JWT), (req, res)=> {
		if(req.authData.role == 1){

	    	const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

			mongoClient.connect((err, client)=>{

			    const db = client.db("usersdb");
			    const collection = db.collection("items");

			    collection.findOne({ name: req.body.name }, (err, result) =>{
			        
			        if (!result){
			            collection.insertOne(new User(req.body.name, req.body.prt, req.body.tag, req.body.img), (err, result)=>{
			              
			                if(err) { 
			                	console.log("Ошибка - " + err);
			                	SendRes(req, res, false, errorList.ruFAddUser, errorList.enFAddUser);
							}	
			                
			                SendRes(req, res, true, errorList.ruTAddUser, errorList.enTAddUser);
			            	client.close();
			            });
		            }
			        else
			        	SendRes(req, res, false, errorList.ruRAddUser, errorList.enRAddUser);
			        client.close();
			    });
			});
		} else {
			SendRes(req, res, false, errorList.ruLowUser, errorList.enLowUser);
		}
	})

module.exports = app;