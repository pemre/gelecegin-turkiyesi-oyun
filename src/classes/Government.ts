import { PromisesObjectPerMinistry } from "../types/types";
import { Ministry } from "./Ministry";
import { Promise } from "./Promise";

export enum Type {
  SOCIALIST = "SOCIALIST",
  STATIST = "STATIST",
  LIBERAL = "LIBERAL",
  CENTRE_RIGHT = "CENTRE_RIGHT",
}

export class Government {
  constructor(
    public ministries: Array<Ministry> = [],
    public type: Type = Type.SOCIALIST,
    public budget = 100
  ) {
    ministries.forEach((m) => {
      this.ministries.push(new Ministry(m.name));
    });
  }

  changeType(type: Type): void {
    this.type = type;
  }

  // TODO Make BETTER
  addMinistries(promisesPerMinistry: PromisesObjectPerMinistry): void {
    for (const key in promisesPerMinistry) {
      const ministryName = key as keyof PromisesObjectPerMinistry;
      const promiseStrings = promisesPerMinistry[ministryName];

      console.debug(`Ministry: ${ministryName}`, promiseStrings);

      const ministry = new Ministry(ministryName);

      promiseStrings.forEach((rawPromise: string) => {
        const promise = Promise.parsePromiseStringWithBrackets(rawPromise);
        ministry.addPromise(promise);
      });

      this.ministries.push(ministry);
    }
  }
}
