// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var router = require("express").Router();
const { Router } = require("express");

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const { json } = require("body-parser");


var noteJSON = '../db/db.json';


    router.get('/notes', function(req, res) {
        readFileAsync(noteJSON, 'utf8', function(err, data){
            if (err) throw err;
            return res.json(JSON.parse(data));
        });
    });

    router.post('/notes', function(req, res){
        var newNotes = req.body;
        
        readFileAsync(noteJSON, 'utf8', function(err, data){
            if (err) throw err;
            var readDb = JSON.parse(data);
            newNotes.id = readDb.length + 1;
            readDb.push(newNotes);
            writeFileAsync(noteJSON, JSON.stringify(readDb), function(err){
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
