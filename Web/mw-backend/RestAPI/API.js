const { Router } = require("express");
const errorList  = require("./ErrorList");
const router = Router();

router.post("/authorization", json , (req, res) =>{
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

    res.send(200);
});

module.exports = router;