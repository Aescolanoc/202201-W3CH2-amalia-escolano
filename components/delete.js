import { Heroes } from "../heroes";

export class Delete {
  deleteHero(hero) {
    console.log(hero);
    Heroes.splice(hero, 1);
  }
}
