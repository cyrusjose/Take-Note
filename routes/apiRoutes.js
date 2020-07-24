// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var noteJSON = require('../db/db.json');
// var noteData = require('../db/db.json');


module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        return res.json(noteJSON);
    });
    // app.post("/api/notes", function(req, res) {
    //     var newNote = req.body;
    //     res.json(newNote);
    // });
}