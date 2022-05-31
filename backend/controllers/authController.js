const Users = require("../models/user");
const bcrypt = require("bcrypt");

const authControllers = {
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUSer = await new Users({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });
      const accountUser = await newUSer.save();
      res.status(200).json(accountUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const user = await Users.findOne({ username: req.body.username });
      const password = await bcrypt.compare(req.body.password, user.password);
      if (!user) {
        res.status(404).json("User not found !");
      }
      if (!password) {
        res.status(404).json("Wrong password !!!");
      }
      if (user && password) {
        const { password, ...orther } = user._doc;
        res.status(202).json({ ...orther });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authControllers;
