const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//========================================================================================
/*                                                                                      *
 *                              Check token
 *                                                                                      */
//========================================================================================

module.exports.checkToken = async (req, res) => {
  const db = req.app.locals.db;
  // console.log(req.header("x-auth-token"));
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await db.query("SELECT * FROM user_table WHERE userid=? ", [
      verified.id,
    ]);
    if (!user[0][0]) return res.json(false);

    return res.status(200).json(user[0][0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              User get username
 *                                                                                      */
//========================================================================================

module.exports.getusername = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const user = await db.query(
      "SELECT username FROM user_table WHERE userid=? ",
      [req.params.userid]
    );
    if (!user[0][0]) return res.json(false);
    return res.status(200).json(user[0][0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              User update profile pic
 *                                                                                      */
//========================================================================================

module.exports.updatePP = async (req, res) => {
  const db = req.app.locals.db;
  const { profile_pic } = req.body;
  // console.log(profile_pic);
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    db.query("update user_table set profile_pic = ? where userid = ?", [
      profile_pic,
      verified.id,
    ]);
    res.status(200).send({ message: "friend request Sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              User Register
 *                                                                                      */
//========================================================================================
module.exports.signUp = async (req, res) => {
  const db = req.app.locals.db;
  const {
    username,
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    profile_pic,
  } = req.body;
  if (!username || !password || !confirmPassword)
    return res.status(406).json({ msg: "Not all fields have been entered." });
  if (password !== confirmPassword)
    return res
      .status(406)
      .json({ msg: "Enter the same password twice for verification." });

  const existingUser = await db.query(
    "SELECT * FROM user_table WHERE username=? OR email=?",
    [username, email]
  );

  if (existingUser[0][0] != null)
    return res
      .status(406)
      .json({ msg: "An account with this username or email already exists." });
  //all parameters passed
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  try {
    const insert = await db.query(
      "INSERT INTO `user_table`(`username`,`firstname`,`lastname`,`email`,`pass`,`user_numberofconnection`,`user_numberofgroups`,`profile_pic`) VALUES (?,?,?,?,?,?,?,?)",
      [username, firstname, lastname, email, passwordHash, 0, 0, profile_pic]
    );
    res.status(200).send({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating user" });
  }
};

//========================================================================================
/*                                                                                      *
 *                              User Login
 *                                                                                      */
//========================================================================================

module.exports.login = async (req, res) => {
  const db = req.app.locals.db;
  try {
    // console.log(req.body);
    const { userName, password } = req.body;

    // validate
    if (!userName || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await db.query("SELECT * FROM user_table WHERE username=? ", [
      userName,
    ]);

    // console.log(user[0][0]);
    const newuser = user[0][0];

    if (!newuser)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." });

    const isMatch = await bcrypt.compare(password, newuser.pass);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign(
      { id: newuser.userid, username: newuser.username },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      token,
      user: {
        userName: newuser.username,
        id: newuser.userid,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Send friend request
 *                                                                                      */
//========================================================================================

module.exports.sendRequest = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    // check if there alreacdy is a friend request
    const checkdata = await db.query(
      "SELECT * FROM personal_connections WHERE friend_request!='B' AND ((userid1=? AND userid2=?) OR (userid1=? AND userid2=?)) ",
      [req.params.id, verified.id, verified.id, req.params.id]
    );
    // console.log(checkdata[0][0]);

    if (checkdata[0][0]) {
      res.status(401).json("Not authorized");
    } else {
      db.query(
        "INSERT INTO `personal_connections`(`userid1`, `userid2`) VALUES (?,?)",
        [verified.id, req.params.id]
      );
      res.status(200).send({ message: "friend request Sent" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Get friend requests
 *                                                                                      */
//========================================================================================

module.exports.friendRequests = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const querydata = await db.query(
      "SELECT userid, username, profile_pic FROM user_table WHERE userid!=? AND (userid IN (SELECT userid1 FROM personal_connections WHERE (userid1=? OR userid2=?) AND friend_request = 'P') OR userid IN (SELECT userid2 FROM personal_connections WHERE (userid1=? OR userid2=?) AND friend_request = 'P')) ",
      [verified.id, verified.id, verified.id, verified.id, verified.id]
    );

    // console.log(querydata[0]);
    res.status(200).send(querydata[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Post accept FriendReq
 *                                                                                      */
//========================================================================================

module.exports.acceptFriendReq = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    // console.log(req.params.id);
    // console.log(verified);

    // check if there actually is a friend request made by user1 to user2
    const checkdata = await db.query(
      "SELECT * FROM personal_connections WHERE userid1=? AND userid2=? AND friend_request='P' ",
      [req.params.id, verified.id]
    );
    // console.log(checkdata[0][0]);

    if (!checkdata[0][0]) {
      res.status(401).json("Not authorized");
    } else {
      db.query(
        "UPDATE personal_connections SET friend_request='A' WHERE userid1=? AND userid2=?",
        [req.params.id, verified.id]
      );
      res.status(200).send({ message: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Post reject/remove FriendReq
 *                                                                                      */
//========================================================================================

module.exports.rejectFriendReq = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    // console.log(req.params.id);
    // console.log(verified);

    const checkdata = await db.query(
      "SELECT * FROM personal_connections WHERE (userid1=? AND userid2=?) OR (userid1=? AND userid2=?) ",
      [req.params.id, verified.id, verified.id, req.params.id]
    );
    // console.log(checkdata[0][0]);

    if (!checkdata[0][0]) {
      res.status(401).json("Not authorized");
    } else {
      db.query(
        "UPDATE personal_connections SET friend_request='R' WHERE (userid1=? AND userid2=?) OR (userid1=? AND userid2=?) ",
        [req.params.id, verified.id, verified.id, req.params.id]
      );
      res.status(200).send({ message: "successfully removed friend" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              User display Friends
 *                                                                                      */
//========================================================================================

module.exports.displayFriends = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    // console.log(verified);

    const querydata = await db.query(
      "SELECT userid, username, profile_pic FROM user_table WHERE userid!=? AND (userid IN (SELECT userid1 FROM personal_connections WHERE (userid1=? OR userid2=?) AND friend_request = 'A') OR userid IN (SELECT userid2 FROM personal_connections WHERE (userid1=? OR userid2=?) AND friend_request = 'A')) ",
      [verified.id, verified.id, verified.id, verified.id, verified.id]
    );
    // console.log(querydata[0]);
    res.status(200).send(querydata[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
