const router = require("express")();
const { check } = require("../controller/check");

router.post("/check", check);

module.exports = router;