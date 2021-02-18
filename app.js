const chalk = require('chalk')
const yargs = require('yargs')
const { getNotes, addNote, removeNote } = require('./notes')

yargs.command({
  command: 'add',
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Contains note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'removes a note',
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
   removeNote(argv.title)
  }
})

yargs.command({
  command: "list",
  describe: "returns a list",
  handler: function () {
    console.log("returning the list");
  },
});

yargs.command({
  command: "read",
  describe: "returns a note",
  handler: function (argv) {
    console.log("reading a note", argv);
  },
});



yargs.parse()