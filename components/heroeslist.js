import { Component } from "../components/component.js";
import { Heroes } from "../components/component.js";

export class Heroeslist extends Component {
  template;

  constructor() {
    super();
    this.heroes = Heroes;

    let template = `<ul>`;
    this.heroes.forEach((item) => {
      console.log(item.name);
      template += `<li>${item.name}</li>`;
    });
    template += `</ul>`;
    this.template = template;
  }
}
