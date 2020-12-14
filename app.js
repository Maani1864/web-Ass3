var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var sessionAuth = require("./middleware/sessionAuth");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
const { Mongoose } = require("mongoose");
var usersRouter = require("./routes/users");

var app = express();

app.use(session({ secret: "keyword", cookie: { maxAge: 6000 } }));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(sessionAuth);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	session({
		secret: "dummy text",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: true },
	})
);

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});
const MongoClient = require("mongodb").MongoClient;
const uri =
	"mongodb+srv://usman:<password>@cluster0.z8u6n.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});
module.exports = app;
