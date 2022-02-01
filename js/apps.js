import { Header } from "../components/header.js";
import { Topheroes } from "../components/topheroes.js";
import { Searchbar } from "../components/searchbar.js";
import { Newheroform } from "../components/newheroeform.js";
import { Heroeslist } from "../components/heroeslist.js";

(() => {
  const main = () => {
    new Header().render("#header");
    new Topheroes().render("#topheroes");
    new Searchbar().render("#searchbar");
    new Newheroform().render("#newheroform");
    new Heroeslist().render("#heroeslist");
  };

  document.addEventListener("DOMContentLoaded", main);
})();
