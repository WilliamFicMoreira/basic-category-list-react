import React, { Component } from "react";
import "./style.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "No Category";
    this.state = {categories:[]}

    this._newCategories =  this._newCategories.bind(this)
  }

  componentDidMount(){
    this.props.categories.inscribe(this._newCategories);
  }
  
  componentWillUnmount(){
    this.props.categories.unscribe(this._newCategories);
  }

  _newCategories(categories){
    this.setState({...this.state, categories});
  }

  _handleCategoryChange(event){
    event.stopPropagation();
    this.category = event.target.value;
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
    // console.log(this.title);
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
    // console.log(this.text);
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <select onChange={this._handleCategoryChange.bind(this)} className="form-cadastro_input">
          <option>No Category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Title..."
          className="form-cadastro_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Type your note..."
          className="form-cadastro_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Create your note!
        </button>
      </form>
    );
  }
}

export default RegisterForm;
