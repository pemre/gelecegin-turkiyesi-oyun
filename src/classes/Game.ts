// import { i18n } from "./i18n/tr";
import { PromisesObjectPerMinistry } from "../types/types";
import { Government, Type } from "./Government";
import { Person } from "../classes/Person";
import promisesPerMinistryJSON from "../promises/tr.json";

const promisesPerMinistry: PromisesObjectPerMinistry = promisesPerMinistryJSON;

export class Game {
  constructor(
    public government: Government = new Government(),
    public person = new Person()
  ) {
    government.changeType(Type.SOCIALIST);
    government.addMinistries(promisesPerMinistry);

    console.log(government);
  }
}
