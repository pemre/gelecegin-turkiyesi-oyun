import { IntRange } from "../types/types";

type Months = IntRange<0, 61>;

type MapperMonths = {
  [key: string]: Months;
};

const letter2MonthsMapper: MapperMonths = {
  A: 3,
  B: 6,
  C: 12,
  D: 36,
  E: 60,
};

enum Status {
  Stopped = "STOPPED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

export class Promise {
  static readonly Status = Status;
  readonly Status = Promise.Status;

  constructor(
    public description: string,
    public duration: Months = 3,
    public progress: Months = 0, // [0 - 3]
    public status: Status = Status.Stopped,

    public canSocialistGovernmentFullfill: boolean = true,
    public canStatistGovernmentFullfill: boolean = false,
    public canLiberalGovernmentFullfill: boolean = false,
    public canCentreRightGovernmentFullfill: boolean = false
  ) {}

  startProgress(): Status {
    if (this.status !== Status.Completed) {
      this.status = Status.InProgress;
    }
    return this.status;
  }

  nextTurn(): Status {
    if (this.status === Status.InProgress) {
      this.progress++;

      if (this.progress >= this.duration) {
        this.status = Status.Completed;
      }
    }

    return this.status;
  }

  // Example string: "Agac dikilecek [C|1110]"
  static parsePromiseStringWithBrackets(text: string): Promise {
    const parsedPromise = /^(.+) \[(A|B|C|D|E)\|(1|0)(1|0)(1|0)(1|0)\]$/.exec(
      text
    );

    if (!parsedPromise) {
      throw new Error(`Promise string is unrecognized: ${text}`);
    }

    const [
      ,
      description,
      monthsLetter,
      canSocialistGovernmentFullfill,
      canStatistGovernmentFullfill,
      canLiberalGovernmentFullfill,
      canCentreRightGovernmentFullfill,
    ] = parsedPromise;

    return new Promise(
      description,
      letter2MonthsMapper[monthsLetter],
      0,
      Status.Stopped,
      // + will convert to number, !! will convert to boolean
      !!+canSocialistGovernmentFullfill,
      !!+canStatistGovernmentFullfill,
      !!+canLiberalGovernmentFullfill,
      !!+canCentreRightGovernmentFullfill
    );
  }
}
