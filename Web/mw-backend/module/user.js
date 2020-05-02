module.exports = class User{
	constructor(login, email, password, role){
		this.login 		= login;
		this.email		= email;
		this.password 	= password;
		this.role 		= role;
	}
};