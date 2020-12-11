var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET users listing. */
router.get("/signup", function (req, res, next) {
	res.render("users/signup");
});
router.post("/signup", async function (req, res, next) {
	let user = new User(req.body);
	await user.save();
	res.redirect("/");
});
router.get("/login", function (req, res, next) {
	res.render("users/login");
});
router.post("/login", async function (req, res, next) {
	let user = await User.findOne({
		email: req.body.email,
		password: req.body.password,
	});
	if (!user) return res.redirect("/login");
	req.session.user = user;
	return res.redirect("/");
});
router.get("/logout", function (req, res, next) {
	req.session.user = null;
	res.redirect("/login");
});
module.exports = router;
