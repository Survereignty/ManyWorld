const express     = require("express");
const app         = express();
const json        = express.json();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/"; 
const Mongo = new MongoClient(url, { useNewUrlParser: true });

const errorList = require("./ErrorList");


app.post("/authorization", json, (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    let user;

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
				if(	req.body.password == result.password)

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
			client.close();
		})
    });
});






module.exports = app;