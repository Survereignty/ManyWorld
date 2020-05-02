module.exports = class User{
	constructor(login, email, password, role, Creator){
		this.login 		= login;
		this.email		= email;
		this.password 	= password;
		this.role 		= role;
		this.date 		= Date.now();
		this.Creator 	= Creator;
	}
};