import { Header } from "../components/header.js";
import { Topheroes } from "../components/topheroes.js";
import { Searchbar } from "../components/searchbar.js";
import { Newheroform } from "../components/newheroeform.js";
import { Heroeslist } from "../components/heroeslist.js";
import { Detail } from "../components/detail.js";

(() => {
  const main = () => {
    new Header().render("#header");
    switch (location.pathname) {
      case "/index.html":
        new Topheroes().render("#topheroes");
        new Searchbar().render("#searchbar");
        break;

      case "/pages/heroes.html":
        new Newheroform().renderInner("#newheroform");
        new Heroeslist().renderInner("#heroeslist");
        break;

      default:
        new Detail().render("#detail");
        break;
    }
  };

  document.addEventListener("DOMContentLoaded", main);
})();
