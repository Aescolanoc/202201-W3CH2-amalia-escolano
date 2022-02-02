import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";

export class Topheroes extends Component {
  template;
  heroes;
  constructor(title = "Top Heroes") {
    super();

    this.template = `
      <h2>${title}</h2>
      <div>
      <a href="/pages/details.html?id=${Heroes[1].id}">${Heroes[1].name}</a>
      <a href="/pages/details.html?id=${Heroes[2].id}">${Heroes[2].name}</a>
      <a href="/pages/details.html?id=${Heroes[3].id}">${Heroes[3].name}</a>
      <a href="/pages/details.html?id=${Heroes[4].id}">${Heroes[4].name}</a>
      </div>
    `;
  }
}
