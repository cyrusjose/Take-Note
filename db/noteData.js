const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class NotesData {

    readNotes(){
        return readFileAsync('db/db.json', 'utf8');
    };

    writeNotes(){
        return writeFileAsync('db/db.json', JSON.stringify(note))
    };

    getNotes(){

    };

    addNotes(){

    };

    deleteNotes(){
        
    }
}

module.exports = new NotesData();