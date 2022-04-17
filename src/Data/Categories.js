export default class Categories {
  constructor() {
    this.categories = [];
    this._inscribed = [];
  }

  inscribe(func){
    this._inscribed.push(func);
  }

  unscribe(func){
    console.log(this._inscribed.length)
    this._inscribed = this._inscribed.filter(func => func !== func);
    console.log(this._inscribed.length)
  }

  notify(){
    this._inscribed.forEach(func => {
      func(this.categories);
    });
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notify();
  }
}
