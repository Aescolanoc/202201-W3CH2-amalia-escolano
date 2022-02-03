import { Component } from "../components/component.js";
import { Heroes } from "../heroes.js";

export class Heroeslist extends Component {
  template;

  constructor() {
    super();
    this.heroes = localStorage.getItem("heroes")
      ? JSON.parse(localStorage.getItem("heroes"))
      : Heroes;
    this.template = this.generateTemplate();
    this.renderInner("#heroeslist");
    this.addHero();
  }
  generateTemplate() {
    let template = `
    <h2>My Heroes</h2>
    <form id="add-hero">
        <label for="new-hero">Hero name</label>
        <input id="new-hero" type="text"/>
        <button class="add-button" type="submit">Add hero</button>
    </form>
    <ul id="list">`;
    this.heroes.forEach((item, index) => {
      template += `<li>
      <a href=detail/${item.id}><span class="badge">${item.id}</span>${item.name}</a>
      <button class="delete">x</button></li>`;
    });
    template += `</ul>`;
    return template;
  }
  addHero() {
    const element = document.querySelector("#heroeslist");
    element.querySelector("form").addEventListener("submit", (ev) => {
      ev.preventDefault();
      let newhero = {};
      newhero.id = this.heroes[this.heroes.length - 1].id + 1;
      newhero.name = element.querySelector("input").value;
      this.heroes.push(newhero);
      localStorage.setItem("heroes", JSON.stringify(this.heroes));
      element.querySelector("input").value = "";
      this.template = this.generateTemplate();
      this.renderInner("#heroeslist");
      this.addHero();
    });
  }
  // deleteHero(index) {
  //   this.heroes.splice(index, 1);
  //   localStorage.setItem("heroes", JSON.stringify(this.heroes));
  //   this.template = this.generateTemplate();
  //   this.renderInner("#heroeslist");
  // }
}
