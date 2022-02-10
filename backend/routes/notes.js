const express = require("express");
const router = express.Router();
// wha pr hmm app.get use krte the but yha pr router.get use krnege

// ab yha pr models me se user module ko import krenge then usko use krke
const Note = require("../models/Note");

// ab yen middleware ko use krne ke liye use import kr rhe h and usse token se id lenge and use req me bhej denge
var fetchuser = require("../middleware/fetchuser");

// this is for validation of input
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes of the logged in user using : GET "/api/auth/fetchallnotes" Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    // req.user middleware se aayega
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route 2: Add a new note using post method  : POST "/api/auth/addnote" Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid descriptiom").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      // yen errors ke liye h , this will return bad request and the error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, tag } = req.body;

      const note = await new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
        console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// ab yha pr router ko export krenge
module.exports = router;
