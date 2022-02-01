import { Component } from "../components/component.js";
import { Heroes } from "../components/component.js";

export class Topheroes extends Component {
  template;
  heroes;
  constructor(title = "Top Heroes") {
    super();

    this.template = `
      <h2>${title}</h2>
      <div>
      <a href="">${Heroes[1].name}</a>
      <a href="">${Heroes[2].name}</a>
      <a href="">${Heroes[2].name}</a>
      <a href="">${Heroes[3].name}</a>
      </div>
    `;
  }
}
