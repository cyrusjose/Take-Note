// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const router = require("express").Router();
const notes = require("../db/noteData");

router.get('/notes', (req, res) => {
    notes.getNotes().then(notes => res.json(notes))
});

router.post('/notes', (req, res) => {
    notes.addNotes(req.body).then(notes => res.json(notes))
});

// router.delete('/api/notes/:id', (req, res) => {

// });



module.exports = router;
