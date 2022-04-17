export default class NotesArray {
  constructor() {
    this.notes = [];
    this._inscribed = [];
  }

  inscribe(func){
    this._inscribed.push(func);
  }

  unscribe(func){
    this._inscribed = this._inscribed.filter(func => func !== func);
  }

  notify(){
    this._inscribed.forEach(func => {
      func(this.notes);
    });
  }

  addNote(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}

class Note {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
