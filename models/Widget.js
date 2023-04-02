const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const widgetSchema = new mongoose.Schema({
	enabled: {
		type: Boolean,
		default: true,
	},
	widgetName: {
		type: String,
		trim: true,
	},
	widgetCategory: {
		type: String,
		trim: true,
	},
	widgetDescription: {
		type: String,
		trim: true,
	},
	widgetCode: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model("widget", widgetSchema);
