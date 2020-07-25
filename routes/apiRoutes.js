// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const router = require("express").Router();
const notes = require("../db/noteData.js s");


const noteJSON = "db/db.json";

router.get("/notes", function (req, res) {
  return readFileAsync(noteJSON, "utf8")
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/api/notes", function (req, res) {
  var newNotes = req.body;
  readFileAsync(noteJSON, "utf8")
    .then((data) => {
      var readDb = JSON.parse(data);
      newNotes.id = readDb.length + 1;
      readDb.push(newNotes);
      return res.json(readDb);
    })
    .catch((err) => {
      console.log(err);
    });
  writeFileAsync(noteJSON, JSON.stringify(readDb))
    .then((data) => {
      res.json({ success: true });
      return res.json(dbNotesJSON);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.delete('/notes/:id', funciont(req,res){
//     // Follow same example of post but delete.
//     // readFileAsync();
// })
module.exports = router;
