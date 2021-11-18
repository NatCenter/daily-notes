const notes = [
  {
    id: 1,
    subject: "about the arrays, objects, using the git hub ",
    date: "11/16/2021",
    feeling: "I feel interested this I would like to learn more about it. ",
    timeSpent: 10.99,
  },
  {
    id: 2,
    subject: "Github",
    date: "11/15/2021",
    feeling: "I feel like if I work on it more and it clicks with me more. ",
    timeSpent: 45.0,
  },
];
const noteAboutToday = {
  id: 3,
  subject: "for loops ",
  date: "11/16/2021",
  feeling:
    "I do have experence with for loops before but this is a great refusher  ",
  timeSpent: 55.0,
};

//const searchTerm ="Github"
notes.push(noteAboutToday);
for (const note of notes) {
  // if(note.subject  === searchTerm){
  console.log(`${note.date} 
    I leared ${note.subject}
    I ${note.feeling} 
    I spent ${note.timeSpent} minutes working on it.
    --------------------
    `);
}

//}

const moreNewerNotes = {
  subject: "functions and sending data",
  date: "11/18/2021",
  feeling:
    "When doing the functions it seems to be hard for me to add new properies to the object  ",
  timeSpent: 60.0,
};

const createNote = (note) => {
  //last index of id
  const noteIndex = notes.length - 1;
  //calls to the array of notes and making the note index
  const lastNote = notes[noteIndex];
  //adds the id number from the last note
  const newIdForNote = lastNote.id + 1;
  //gets the property of the note.id
  note.id = newIdForNote;

  //pushes note id
  notes.push(note);
};
//calls the function
createNote(moreNewerNotes);
//displays the function
console.log(notes);
