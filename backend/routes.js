const router = require("express").Router();

//========================================================================================
/*                                                                                      *
 *                              User Routes
 *                                                                                      */
//========================================================================================

const User = require("./controllers/userController");

router.post("/user/add", User.addUser);

module.exports = router;
