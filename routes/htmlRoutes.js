// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var router = require("express").Router();

var path = require("path");
const { Router } = require("express");


// ===============================================================================
// ROUTING
// ===============================================================================

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });


    // If no matching route is found default to home
    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    module.exports = router;
