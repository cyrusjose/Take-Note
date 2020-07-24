// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var router = require("express").Router();

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// var noteJSON = '../db/db.json';
// var noteListItems = require('../public/assets/js/index')


// module.exports = function(app) {
    router.get('/notes', function(req, res) {
        readFileAsync('../db/db.json', 'utf8', function(err, data){
            if (err) throw err;
            return res.json(JSON.parse(data));
        });
    });

    router.post('/notes', function(req, res){
        var newNotes = req.body;
        
        readFileAsync('../db/db.json', 'utf8', function(err, data){
            if (err) throw err;
            var readDb = JSON.parse(data);
            newNotes.id = readDb.length + 1;
            readDb.push(newNotes);
            writeFileAsync('../db/db.json', JSON.stringify(readDb), function(err){
                if (err) throw err;
                res.json({success: true});
            });
        });
    });

    // router.delete('/notes/:id', funciont(req,res){
    //     // Follow same example of post but delete.
    //     // readFileAsync();
    // }) 
    module.exports = router;
// }