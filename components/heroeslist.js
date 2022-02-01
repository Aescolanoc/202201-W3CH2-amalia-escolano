import { Component } from "../components/component.js";
import { Heroes } from "../components/component.js";

export class Heroeslist extends Component {
  template;

  constructor() {
    super();
    this.heroes = Heroes;

    this.template = `
      <ul>
      `;
    this.heroes.forEach((item) => {
      template += `<li>${item}</li>`;
    });
    template += `
      </ul>
    `;
  }
}
