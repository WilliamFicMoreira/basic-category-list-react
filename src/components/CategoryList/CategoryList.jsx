import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.inscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
    // console.log(categories);
  }

  _handleEventInput(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
      let categoryValue = event.target.value;
      this.props.addCategory(categoryValue);
      // console.log("Category added");
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Add category..."
          onKeyUp={this._handleEventInput.bind(this)}
        />
      </section>
    );
  }
}

export default CategoryList;
