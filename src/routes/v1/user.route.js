const express = require("express")

const router = express.Router()

router.route("/").get((req, res) => {
    res.send("User route")
});

router.route("/:userid").get((req, res) => {
    res.send("User route")
});

module.exports = router

