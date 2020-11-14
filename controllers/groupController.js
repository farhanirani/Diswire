const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
("use strict");
var btoa = require("btoa");
var atob = require("atob");
//========================================================================================
/*                                                                                      *
 *                  Create group (anyone can appoint them as admin)
 *                                                                                      */
//========================================================================================

module.exports.createGroup = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const { g_name, g_desc, g_type } = req.body;
    userid = verified.id;
    channelid = Math.floor(Math.random() * 1000000000);

    const querydata = await db.query(
      "INSERT INTO group_table(g_name, g_desc, g_creator_id, g_channel_id, g_type) VALUES (?,?,?,?,?)",
      [g_name, g_desc, userid, channelid, g_type]
    );
    // console.log(querydata[0]);
    const newquery = await db.query(
      "INSERT INTO group_connections VALUES (?,?)",
      [userid, querydata[0].insertId]
    );
    res.status(200).json({ message: "group created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                Delete group (only admin can delete)
 *                                                                                      */
//========================================================================================

module.exports.deleteGroup = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    userid = verified.id;
    const groupid = req.params.groupid;

    const checkAdmin = await db.query(
      "SELECT * FROM group_table WHERE g_id = ?",
      [groupid]
    );
    // console.log(checkAdmin[0][0]);

    if (!checkAdmin[0][0] || checkAdmin[0][0].g_creator_id != userid) {
      res.status(401).json("Not authorized!!!!!!!!");
    } else {
      const querydata = await db.query(
        "DELETE FROM group_table WHERE g_id = ?",
        [groupid]
      );

      res.status(200).json({ message: "group deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                   Remove person from group (only admin can remove)
 *                                                                                      */
//========================================================================================

module.exports.removePerson = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userid = verified.id;
    const groupid = req.params.groupid;
    const removeid = req.params.userid;

    const checkAdmin = await db.query(
      "SELECT * FROM group_table WHERE g_id = ?",
      [groupid]
    );
    console.log(removeid, userid, groupid, checkAdmin[0][0]);

    if (
      !checkAdmin[0][0] ||
      checkAdmin[0][0].g_creator_id != userid ||
      userid == removeid
    ) {
      res.status(401).json("Not authorized!!!!!!!!");
    } else {
      const querydata = await db.query(
        "DELETE FROM group_connections WHERE userid = ? AND groupid = ?",
        [removeid, groupid]
      );
      res.status(200).json({ message: "User removed successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *          Create group invite (anyone in the group can get the invite link)
 *                                                                                      */
//========================================================================================

module.exports.createInvite = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userid = verified.id;
    const groupid = req.params.groupid;

    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json("Not authorized!!!!!!!!");
    } else {
      var enc = btoa(groupid);
      res.status(200).json({ invite: enc });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *          get getUsersInGroup (anyone in the group can get the all users)
 *                                                                                      */
//========================================================================================

module.exports.getUsersInGroup = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userid = verified.id;
    const groupid = req.params.groupid;

    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json("Not authorized!!!!!!!!");
    } else {
      const usersdata = await db.query(
        "SELECT username, userid FROM user_table WHERE userid IN (SELECT userid FROM group_connections WHERE groupid=?) ",
        [groupid]
      );
      res.status(200).json(usersdata[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *      Join group using invite ( check if the invite is valid, & not in group then add)
 *                                                                                      */
//========================================================================================

module.exports.joinUsingInvite = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userid = verified.id;
    const encoded = req.params.groupid;
    var groupid = atob(encoded);

    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (checkIfInGroup[0][0]) {
      res.status(401).json("You are already in this group");
    } else {
      const querydata = await db.query(
        "INSERT INTO group_connections VALUES (?,?) ",
        [userid, groupid]
      );
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              user getMyGroups
 *                                                                                      */
//========================================================================================

module.exports.getMyGroups = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const querydata = await db.query(
      "SELECT g_id, g_name, g_desc, g_members FROM group_table WHERE g_id IN (SELECT groupid FROM group_connections WHERE userid=?) ",
      [verified.id]
    );

    res.status(200).send(querydata[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//========================================================================================
/*                admin change group type  */
//========================================================================================

module.exports.changeGroupType = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const { groupid, newtype } = req.body;
    userid = verified.id;

    const checkAdmin = await db.query(
      "SELECT * FROM group_table WHERE g_id = ?",
      [groupid]
    );

    if (!checkAdmin[0][0] || checkAdmin[0][0].g_creator_id != userid) {
      res.status(401).json("Not authorized!!!!!!!!");
    } else {
      const querydata = await db.query(
        "UPDATE group_table SET g_type = ? WHERE g_id = ?",
        [newtype, groupid]
      );
      res.status(200).json({ message: "Type updated success" });
    }
  } catch (err) {
    res.status(405).json({ error: err.message });
  }
};
