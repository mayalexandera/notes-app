const fs = require("fs");

const getNotes = function () {
  return "this is a string";
};

const addNote = function(title, body) {
  console.log(title, body)

  const notes = loadNotes();
  const dupes = notes.filter((note) =>{
    note.title === title
  });
  
  if (dupes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);

  } else {

    console.log("title is already taken");

  }
};

const removeNote = function(title) {
  const notes = loadNotes()
  const filteredNotes = notes.filter(note => {
    if(note.title !== title) {
      return note
    }
  })
  console.log(filteredNotes)

  saveNotes(filteredNotes)
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
  loadNotes()
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    console.log(dataJSON)
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
