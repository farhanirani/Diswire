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

    if (g_name == "") {
      res.status(500).json({ message: "enter a server name" });
    }

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
    res.status(500).json({ message: err.message });
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
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "DELETE FROM group_table WHERE g_id = ?",
        [groupid]
      );

      res.status(200).json({ message: "group deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                   leave group
 *                                                                                      */
//========================================================================================

module.exports.leaveGroup = async (req, res) => {
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
      res.status(401).json({ message: { message: "Not authorized!!!!!!!!" } });
    } else {
      const querydata = await db.query(
        "DELETE FROM group_connections WHERE userid = ? AND groupid = ?",
        [userid, groupid]
      );
      res.status(200).json({ message: "left success" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
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
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "DELETE FROM group_connections WHERE userid = ? AND groupid = ?",
        [removeid, groupid]
      );
      res.status(200).json({ message: "User removed successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    var groupid = req.params.groupid;

    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      temp = Math.floor(1000 + Math.random() * 9000);
      groupid = parseInt(temp.toString() + groupid.toString());
      // console.log(groupid);
      var enc = btoa(groupid);
      res.status(200).json({ invite: enc });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
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
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const usersdata = await db.query(
        "SELECT username, userid, profile_pic FROM user_table WHERE userid IN (SELECT userid FROM group_connections WHERE groupid=?) ",
        [groupid]
      );
      res.status(200).json(usersdata[0]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    var groupid = atob(encoded).substring(4);
    // console.log(groupid);
    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (checkIfInGroup[0][0]) {
      res.status(401).json({ message: "You are already in this server" });
    } else {
      const querydata = await db.query(
        "INSERT INTO group_connections VALUES (?,?) ",
        [userid, groupid]
      );
      res.status(200).json({ message: groupid });
    }
  } catch (err) {
    res.status(500).json({
      message:
        "Don't try to guess it xD\nIf you break the pattern message me for a gift",
    });
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
      "SELECT g_id, g_name, g_desc, g_members, g_creator_id, g_pp FROM group_table WHERE g_id IN (SELECT groupid FROM group_connections WHERE userid=?) ",
      [verified.id]
    );

    res.status(200).send(querydata[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "UPDATE group_table SET g_type = ? WHERE g_id = ?",
        [newtype, groupid]
      );
      res.status(200).json({ message: "Type updated success" });
    }
  } catch (err) {
    res.status(405).json({ message: err.message });
  }
};

module.exports.updatepp = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const userid = verified.id;
    const groupid = req.params.groupid;
    const { g_pp } = req.body;
    console.log(groupid, g_pp);
    const checkIfInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ? ",
      [userid, groupid]
    );

    if (!checkIfInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      await db.query("UPDATE group_table SET g_pp = ? WHERE g_id = ?", [
        g_pp,
        groupid,
      ]);

      res.status(200).json({ message: "updated" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
