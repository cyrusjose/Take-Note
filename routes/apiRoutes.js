// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const router = require("express").Router();
const dbNotesJSON = require("../db/db.json");

const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const noteJSON = "db/db.json";

router.get("/notes", function (req, res) {
  readFileAsync(noteJSON, "utf8")
    .then((data) => {
      return res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/api/notes", function (req, res) {
  var newNotes = req.body;
  readFileAsync(noteJSON, "utf8")
    .then((data) => {
      var readDb = JSON.parse(data);
      newNotes.id = readDb.length + 1;
      readDb.push(newNotes);

      writeFileAsync(noteJSON, JSON.stringify(readDb))
    .then((data) => {
      res.json({ success: true });
      return res.json(dbNotesJSON);
    })
    .catch((err) => {
      throw err;
    });
    })
    .catch((err) => {
      throw err;
    });
});

// router.delete('/notes/:id', funciont(req,res){
//     // Follow same example of post but delete.
//     // readFileAsync();
// })
module.exports = router;
