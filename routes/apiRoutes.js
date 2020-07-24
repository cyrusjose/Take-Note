// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require('../data/noteData');


module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(notesData);
    });
}