import { Header } from "../components/header.js";
import { Newheroform } from "../components/newheroeform.js";
import { Heroeslist } from "../components/heroeslist.js";

(() => {
  const main = () => {
    new Header().render("#header");
    new Newheroform().render("#newheroform");
    new Heroeslist().render("#heroeslist");
  };

  document.addEventListener("DOMContentLoaded", main);
})();
