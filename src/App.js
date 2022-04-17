import React, { Component } from "react";
import NoteList from "./components/NoteList";
import RegisterForm from "./components/RegisterForm";
import CategoryList from "./components/CategoryList";
import "./assets/index.css";
import "./assets/App.css";
import Categories from "./Data/Categories";
import NotesArray from "./Data/Notes";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();

    // this.state = {
    //   notes: [],
    //   //categories: ["games","songs"],
    // };
  }

  // createNote(title, text, category) {
  //   // console.log(`new note created ` + title + ` ` + text);
  //   const newNote = { title, text, category };
  //   const newNoteArray = [...this.state.notes, newNote];
  //   const newState = {
  //     notes: newNoteArray,
  //   };
  //   this.setState(newState);
  //   // console.log(this.notes.length);
  // }

  // addCategory(categoryName) {
  //   const newCategoryArray = [...this.state.categories, categoryName];
  //   const newState = { ...this.state, categories: newCategoryArray };
  //   this.setState(newState);
  // }

  // deleteNote(index) {
  //   let noteArray = this.state.notes;
  //   noteArray.splice(index, 1);
  //   this.setState({ notes: noteArray });
  //   console.log("Deleting note...");
  // }

  render() {
    return (
      <section className="conteudo">
        <RegisterForm
          categories={this.categories}
          createNote={this.notes.addNote.bind(this.notes)}
        />
        <main className="conteudo-principal">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NoteList 
            deleteNote={this.notes.deleteNote.bind(this.notes)} 
            notes={this.notes} 
          />
        </main>
      </section>
    );
  }
}

//so pode ter 1 elemento pai

// react -> lib (react com letra minuscula)
// React -> ecosistema (com o primeiro R maiusculo)
export default App;
