// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


var noteJSON = require('../db/db.json');
var noteListItems = require('../public/assets/js/index')


module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        readFileAsync(noteJSON, 'utf8', function(err, data){
            if (err){
                return console.log(err);
            }
            var notesData = JSON.parse(data)
            return res.json(notesData);
        });

    });
    
}