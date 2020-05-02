const { Router } = require("express");
const router = Router(); 

const MongoClient 	= require("mongodb").MongoClient;
const url 			= "mongodb://localhost:27017/";

const JWTCreator 	= require("../JWT/jwt");
const JWT 			= new JWTCreator("R1RLYYVB", "IR1RRLYYVB");

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    res.sendStatus(200);
});

router.get("/user", JWT.VerefyToken.bind(JWT), (req, res) => {


    mongoClient.connect((err, client)=>{
	    const db = client.db("usersdb");
	    const collection = db.collection("users");
	    collection.find((err, result) =>{
	        console.log(result);
	        res.sendStatus(200);
	    });
	});
});


module.exports = router;