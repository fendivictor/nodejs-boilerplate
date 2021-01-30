const knex = require("../connect");
const express = require("express");
const router = express.Router();

router.route("/:id*?").get(async (req, res) => {
  try {
    let id = req.params.id;
    let book = id ? await knex("agama").where("id", id) : await knex("agama");
    res.json(book);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
