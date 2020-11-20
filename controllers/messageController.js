const jwt = require("jsonwebtoken");

//========================================================================================
/*                                                                                      *
 *                              Get personal chat
 *                                                                                      */
//========================================================================================

module.exports.getPersonalChat = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    id1 = verified.id;
    id2 = req.params.id;

    const querydata = await db.query(
      "SELECT * FROM messages_personal, user_table WHERE (userid=m_sender_id ) AND ((m_sender_id = ? AND m_reciever_id = ?) OR (m_sender_id = ? AND m_reciever_id = ?)) ORDER BY m_id ASC",
      [id1, id2, id2, id1]
    );
    res.status(200).json(querydata[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Get group chat
 *                                                                                      */
//========================================================================================

module.exports.getGroupChat = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    userid = verified.id;
    groupid = req.params.id;

    const checkIfUserInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ?",
      [userid, groupid]
    );

    // console.log(checkIfUserInGroup[0][0]);
    if (!checkIfUserInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "SELECT * FROM messages_group,user_table WHERE m_group_id = ? AND userid = m_sender_id ORDER BY m_id",
        [groupid]
      );
      res.status(200).json(querydata[0]);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Post personal message
 *                                                                                      */
//========================================================================================

module.exports.postPersonalChat = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const { messagedata } = req.body;
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    id1 = verified.id;
    id2 = req.params.id;

    const querydata = await db.query(
      "INSERT INTO messages_personal(m_body, m_sender_id, m_reciever_id) VALUES (?,?,?)",
      [messagedata, id1, id2]
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Send group message
 *                                                                                      */
//========================================================================================

module.exports.postGroupChat = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const token = req.header("x-auth-token");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const { messagedata } = req.body;
    userid = verified.id;
    groupid = req.params.id;

    const checkIfUserInGroup = await db.query(
      "SELECT * FROM group_connections WHERE userid = ? AND groupid = ?",
      [userid, groupid]
    );

    // console.log(checkIfUserInGroup[0][0]);
    if (!checkIfUserInGroup[0][0]) {
      res.status(401).json({ message: "Not authorized!!!!!!!!" });
    } else {
      const querydata = await db.query(
        "INSERT INTO messages_group(m_body, m_sender_id, m_group_id) VALUES (?,?,?)",
        [messagedata, userid, groupid]
      );
      res.status(200).json({ message: "success" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
