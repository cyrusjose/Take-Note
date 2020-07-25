const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class NotesData {

    readNotes(){
        return readFileAsync('db/db.json', 'utf8');
    }

    writeNotes(note){
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes(){
        return this.readNotes().then(notes => {
            console.log(notes);
            let noteArr;
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
    }

    addNotes(){
        this.idNum = 0;
        const {title, text} = note;
        const newNote = {title, text, id: ++this.idNum};
        return this.getNotes()
        // Get all the notes from previous and add new notes to the end of the array
        .then(notes => [...notes, newNote])
        // Write notes in file and update
        .then(update => this.writeNotes(update))
        .then(() => newNote)
    }

    // deleteNotes(){

    // }
}

module.exports = new NotesData();