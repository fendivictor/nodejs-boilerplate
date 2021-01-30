const knex = require("../connect");
const express = require("express");
const router = express.Router();

router.route("/:id*?").get(async (req, res) => {
  try {
    let id = req.params.id;
    let book = id ? await knex("book").where("id", id) : await knex("book");
    res.json(book);
  } catch (e) {
    console.log(e);
  }
});

router.route("/").post(async (req, res) => {
  try {
    let judul = req.body.judul;
    let sinopsis = req.body.sinopsis;
    let penulis = req.body.penulis;

    let id = await knex("book").insert({
      judul: judul,
      sinopsis: sinopsis,
      penulis: penulis,
    });

    res.json({
      id: id[0],
      judul,
      sinopsis,
      penulis,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.route("/:id").put(async (req, res) => {
  try {
    let id = req.params.id;
    let judul = req.body.judul;
    let sinopsis = req.body.sinopsis;
    let penulis = req.body.penulis;

    await knex("book").where("id", id).update({
      judul: judul,
      sinopsis: sinopsis,
      penulis: penulis,
      updatedAt: knex.fn.now(),
    });

    res.json({
      id,
      judul,
      sinopsis,
      penulis,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    let id = req.params.id;

    await knex("book").where("id", id).del();
    res.json({
      id,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
