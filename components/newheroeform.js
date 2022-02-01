import { Component } from "../components/component.js";

export class Newheroform extends Component {
  template;

  constructor() {
    super();
    this.template = `
    <h2>My Heroes</h2>
    <form >
        <label for="new-hero">Hero name</label>
        <input id="new-hero" type="text"/>
        <button class="add-button">Add hero</button>
    </form>
    `;
  }
}
