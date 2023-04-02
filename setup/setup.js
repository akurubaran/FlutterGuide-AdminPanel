require("dotenv").config({ path: __dirname + "/../.variables.env" });
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

async function createAdmin() {
	try {
		const Admin = require("../models/Admin");
		var newAdmin = new Admin();
		const passwordHash = newAdmin.generateHash("12345678");

		await new Admin({
			email: "admin@flutterguide.com",
			password: passwordHash,
			name: "Flutter Guide",
			surname: "Admin",
		}).save();
		console.log("👍👍👍👍👍👍👍👍 Admin created : Done!");
		process.exit();
	} catch (e) {
		console.log("\n👎👎👎👎👎👎👎👎 Error! The Error info is below");
		console.log(e);
		process.exit();
	}
}
createAdmin();
// if (process.argv.includes("--delete")) {
//   deleteData();
// } else {
//   loadData();
// }
