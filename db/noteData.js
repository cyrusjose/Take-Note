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
        return this.readNotes().then(notes => {
            console.log(notes);
            let noteArr = [];
            // Try this block of code
            try {
                noteArr = [].concat(JSON.parse(notes))
            }
            // if there's an error
            catch (err){
                console.log(err);
            };
            return noteArr;
        });
    };

    addNotes(){

    };

    deleteNotes(){

    }
}

module.exports = new NotesData();