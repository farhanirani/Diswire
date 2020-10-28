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

// SELECT * FROM messages_personal WHERE (m_sender_id = 1 AND m_reciever_id = 2) OR (m_sender_id = 2 AND m_reciever_id = 1)
// router.get("/messages/personal/:id", Message.getPersonalChat);
// SELECT * FROM messages_group WHERE m_group_id = 1
// router.get("/messages/group/:id", Message.getGroupChat);

module.exports = router;
