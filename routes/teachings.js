const express = require("express");
const router = express.Router();
const Teaching = require("../models/Teaching");

//Get all teachings
router.get("/", async (req, res) => {
  try {
    const teachings = await Teaching.find();
    res.json({ success: true, data: teachings });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Get single teaching
router.get("/:id", async (req, res) => {
  try {
    const teaching = await Teaching.findById(req.params.id);
    res.json({ success: true, data: teaching });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Add a teaching
router.post("/", async (req, res) => {
  const teaching = new Teaching({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });
  try {
    const savedTeaching = await teaching.save();
    res.json({ success: true, data: savedTeaching });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Update teaching
router.put("/:id", async (req, res) => {
  try {
    const teaching = await Teaching.findById(req.params.id);

    if (teaching.username === req.body.username) {
      const updatedTeaching = await Teaching.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        {
          new: true,
        }
      );
      return res.json({ success: true, data: updatedTeaching });
    }
    res.status(500).json({
      success: false,
      error: "You're not authorized to update this resource",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//Delete teaching
router.delete("/:id", async (req, res) => {
  try {
    const teaching = await Teaching.findById(req.params.id);
    if (teaching.username === req.body.username) {
      await Teaching.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }
    res.status(500).json({
      success: false,
      error: "You're not authorized to delete this resource",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
