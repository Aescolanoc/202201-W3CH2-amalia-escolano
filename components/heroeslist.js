import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";

export class Heroeslist extends Component {
  template;

  constructor() {
    super();
    this.heroes = Heroes;

    let template = `<ul>`;
    this.heroes.forEach((item) => {
      template += `<li>
      <a href=detail/${item.id}><span class="badge">${item.id}</span>${item.name}</a>
      <button class="delete">x</button></li>`;
    });
    template += `</ul>`;
    this.template = template;
  }
}
