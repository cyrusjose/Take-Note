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

const noteJSON = "db.json";

router.get("/notes", function (req, res) {
  readFileAsync(noteJSON, "utf8", function (err, data) {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

router.post("/api/notes", function (req, res) {
  var newNotes = req.body;
  readFileAsync(noteJSON, "utf8", function (err, data) {
    if (err) throw err;
    var readDb = JSON.parse(data);
    newNotes.id = readDb.length + 1;
    readDb.push(newNotes);
  }).then(() => {
    writeFileAsync(noteJSON, JSON.stringify(readDb), function (err) {
      if (err) throw err;
      res.json({ success: true });
    }).then(() => res.json(dbNotesJSON));
  });
});

// router.delete('/notes/:id', funciont(req,res){
//     // Follow same example of post but delete.
//     // readFileAsync();
// })
module.exports = router;
