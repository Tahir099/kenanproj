const express = require("express");
const emailController = require("./mail-controller.js");
const router = express.Router();

router.post("/sendmail", emailController.sendMail);

module.exports = router;
