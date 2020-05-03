const JWT = require("jsonwebtoken");

module.exports = class Token {
	constructor(ac_signature, ref_signature){
		this.ac_signature 	= ac_signature;
        this.ref_signature 	= ref_signature;
    }

	VerefyToken(req, res, next) {
		const bearerHeader = req.headers["authorization"];
		if(typeof bearerHeader !== "undefined"){
			const bearer = bearerHeader.split(" ");
			JWT.verify(bearer[1], this.ac_signature, (err, authData) => {
				 if(err) return res.sendStatus(403);
				 req.authData = authData;
				 next();
			});
		} else {
			res.sendStatus(403);
		}
	}

	VerefyRefToken(req, res, next) {
		const bearerHeader = req.headers["authorization"];

		if(typeof bearerHeader !== "undefined"){
			const bearer = bearerHeader.split(" ");

			JWT.verify(bearer[1], this.ref_signature, (err, authData) => {
				 if(err) return res.sendStatus(403);
				 req.authData = authData;
				 next();
			});
		} else {
			res.sendStatus(403);
		}
	}

	Create(Obj, Param){
		return JWT.sign(Obj, this.ac_signature, Param);
	}

	CreateRefresh(Obj, Param){
		return JWT.sign(Obj, this.ref_signature, Param);
	}
};
