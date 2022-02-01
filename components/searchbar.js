import { Component } from "./component.js";

export class Searchbar extends Component {
  template;

  constructor() {
    super();
    this.template = `
    <form >
        <label for="search">Hero Search</label>
        <input id="search" type="text"/>
    </form>
    `;
  }
}
