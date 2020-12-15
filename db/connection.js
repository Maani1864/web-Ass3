const mongoose = require("mongoose");
const URI =
	"mongodb+srv://usman:mongoDB00@cluster0.z8u6n.mongodb.net/ass3?retryWrites=true&w=majority";
const connectDB = async () => {
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log("Connection Established");
};

module.exports = connectDB;
