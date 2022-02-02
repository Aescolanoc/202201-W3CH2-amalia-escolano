import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";

export class Detail extends Component {
  template;
  heroes;
  constructor() {
    super();

    this.template = `
      <h2>Heroes details</h2>
      <div>
      <span></span>
      </div>
      <div>
      <label htmlFor="hero-name"></label>
      <input type="text" />
      </div>
      <button>Go back</button>
      <button>save</button>
    `;
  }
  wichHero() {
    const idHeroe = window.location.search;
    console.log(idHeroe);
  }
}
