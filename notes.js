console.log("Loading Note.js file..");

var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Showing All notes');
};

var getNote = (title) => {
  console.log('Getting Note', title);
};

var removeNote = (title) => {
  console.log('Removing Note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
