import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

class NoteList extends Component {
  // jsx already do the code below automatically
  // constructor(props){
  //   super(props)
  // }

  constructor(){
    super();
    this.state = {notes:[]}
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount(){
    this.props.notes.inscribe(this._newNotes);
  }

  componentWillUnmount(){
    this.props.notes.unscribe(this._newNotes);
  }

  _newNotes(notes){
    this.setState({...this.state, notes});
  }


  render() {
    return (
      <ul className="lista-notas">
        {this.state.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <NoteCard
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title}
                text={note.text}
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
