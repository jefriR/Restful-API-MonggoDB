const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");

router.get("/", async (req, res) => {
  try {
    const mahasiswas = await Mahasiswa.find();
    res.json(mahasiswas);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.get("/:nim", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.nim);
    res.json(mahasiswa);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.post("/", async (req, res) => {
  const mahasiswa = new Mahasiswa({
    name: req.body.name,
    nim: req.body.nim,
    major: req.body.major
  });

  try {
    const savedMahasiswa = await mahasiswa.save();
    res.json(savedMahasiswa);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.get("/spesific", (req, res) => {
  res.send("Route Mahasiswa Spesific");
});

router.delete("/:nim", async (req, res) => {
  try {
    const removeMhs = await Mahasiswa.remove({
      _id: req.params.nim
    });
    res.json(removeMhs);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

router.patch("/:nim", async (req, res) => {
  try {
    const updateMhs = await Mahasiswa.updateOne({
      _id: req.params.nim
    }, {
      $set: {
        major: req.body.major
      }
    });
    res.json(updateMhs);
  } catch (error) {
    res.json({
      message: error
    });
  }
});

module.exports = router;