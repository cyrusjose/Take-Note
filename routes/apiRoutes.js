const router =require("express").Router();
const notes = require("../db/noteData.js");


router.get("/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
})
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
})
router.delete("/notes/:id", function(req, res){
    notes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
})

module.exports = router;