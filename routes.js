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
router.patch("/user/updatePP", auth, User.updatePP);

router.post("/user/checkToken", User.checkToken);
router.get("/user/getusername/:userid", User.getusername);

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

//========================================================================================
/*                                                                                      *
 *                              Group Routes
 *                                                                                      */
//========================================================================================

const Group = require("./controllers/groupController");

router.get("/group", auth, Group.getMyGroups);
router.post("/group/create", auth, Group.createGroup);
router.delete("/group/delete/:groupid", auth, Group.deleteGroup);
router.post("/group/remove/:groupid/:userid", auth, Group.removePerson);
router.delete("/group/leavegroup/:groupid", auth, Group.leaveGroup);
router.get("/group/groupinvite/:groupid", auth, Group.createInvite);
router.post("/group/groupinvite/:groupid", auth, Group.joinUsingInvite);
router.patch("/group/changegrouptype", auth, Group.changeGroupType);
router.get("/group/users/:groupid", auth, Group.getUsersInGroup);

module.exports = router;
