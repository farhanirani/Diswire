const router = require("express").Router();
const auth = require("./middleware/auth");

//========================================================================================
/*                                                                                      *
 *                              User Routes
 *                                                                                      */
//========================================================================================

const User = require("./controllers/userController");

router.post("/user/signUp", User.signUp);
router.post("/user/login", User.login);

router.get("/user/displayFriends", auth, User.displayFriends);

router.post("/user/sendRequest/:id", auth, User.sendRequest);
router.get("/user/friendRequests", auth, User.friendRequests);
router.post("/user/acceptFriend/:id", auth, User.acceptFriendReq);
router.post("/user/rejectFriend/:id", auth, User.rejectFriendReq);

router.post("/user/checkToken", User.checkToken);

//========================================================================================
/*                                                                                      *
 *                              Message Routes
 *                                                                                      */
//========================================================================================

const Message = require("./controllers/messageController");

router.get("/messages/personal/:id", auth, Message.getPersonalChat);
router.get("/messages/group/:id", auth, Message.getGroupChat);
router.post("/messages/post/:id", auth, Message.postPersonalChat);
router.post("/messages/postgroup/:id", auth, Message.postGroupChat);

module.exports = router;
