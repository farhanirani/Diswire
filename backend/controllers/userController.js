const bcrypt = require("bcrypt");

//========================================================================================
/*                                                                                      *
 *                              User Register
 *                                                                                      */
//========================================================================================
module.exports.addUser = async (req, res) => {
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
