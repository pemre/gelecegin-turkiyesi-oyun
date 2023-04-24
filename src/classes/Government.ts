import { i18n } from "../i18n/tr";
import { Ministry } from "./Ministry";

const ministries = i18n.ministries;

export class Government {
  public ministries: Array<Ministry> = [];
  public budget = 100;

  constructor(public type: string = "") {
    ministries.forEach((m) => {
      this.ministries.push(new Ministry(m.name));
    });
  }
}
