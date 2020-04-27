const express     = require("express");
const app         = express();
const json        = express.json();

const errorList = require("./ErrorList");

const test = require("./test")

app.post("/authorization", json, (req, res) =>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')

    console.log(errorList);
    console.log(test);


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
});

module.exports = app;