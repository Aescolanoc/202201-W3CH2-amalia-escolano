import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";
import { Heroeslist } from "./heroeslist.js";

export class Newheroform extends Component {
  template;

  constructor() {
    super();

    this.template = `
    <h2>My Heroes</h2>
    <form id="add-hero">
        <label for="new-hero">Hero name</label>
        <input id="new-hero" type="text"/>
        <button class="add-button" type="submit">Add hero</button>
    </form>
    `;
    // this.addHero();
  }
  addHero() {
    const element = document.querySelector("#newheroform");

    element.querySelector("form").addEventListener("submit", (ev) => {
      ev.preventDefault();
      let newhero = {};
      newhero.id = Heroes.length - 1;
      newhero.name = element.querySelector("input").value;
      Heroes.push(newhero);
      console.log(newhero);
      this.render("#newheroform");
      this.addHero();
    });
  }
}
