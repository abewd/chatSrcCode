const { addMessage, getMessages } = require("../schema/resolvers");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;