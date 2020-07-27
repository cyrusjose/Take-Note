const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class NotesData {
  constructor(){
    this.idNumber = 0;
  }
    readNotes() {
        return readFileAsync("db/db.json", "utf8");

    }
    writeNotes(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
    getNotes() {
        return this.readNotes().then(notes => {
            let noteArr;
            try {
                noteArr = [].concat(JSON.parse(notes));
            }
            catch (err) {
               noteArr = [];
            }
            return noteArr;
        })

    }
    addNotes(note) {
        const { title, text } = note;
        const newNote = { title, text, id: ++this.idNumber }
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(upadate => this.writeNotes(upadate))
            .then(() => newNote)

    }
    deleteNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(updated => this.writeNotes(updated))
    }
}

module.exports = new NotesData();