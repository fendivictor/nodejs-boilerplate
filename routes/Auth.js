const express = require("express");
const bcrypt = require("bcrypt");
const knex = require("../connect");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "*123#";

router.route("/signup").post(async (req, res, next) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    let id = await knex("user").insert({
      username: username,
      password: bcrypt.hashSync(password, 8),
    });

    res.json({
      id: id[0],
      username,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.route("/signin").post(async (req, res, next) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.username;

    let getUsername = await knex("user")
      .where({
        username: username,
      })
      .first();

    if (!getUsername) {
      res.json({
        message: "Invalid username",
      });
    }

    let passwordIsValid = bcrypt.compareSync(password, getUsername.password);

    if (!passwordIsValid) {
      res.json({
        message: "Invalid password",
      });
    }

    let token = jwt.sign({ username: username, role: role }, secretKey);

    await knex("user")
      .where({
        username: username,
      })
      .update({
        lastLogin: knex.fn.now(),
      });

    res.json({
      token: token,
      getUsername,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
