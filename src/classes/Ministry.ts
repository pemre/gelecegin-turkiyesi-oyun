export class Ministry {
  constructor(
    public name: string,
    public budget: number = 5 // [1 - 81] // public promises: Array,
  ) {}

  decreaseBudget(): string {
    if (this.budget <= 1) {
      return "MINISTRY_BUDGET_IS_MINIMUM";
    }

    this.budget--;
    return "OK";
  }

  increaseBudget(): string {
    if (this.budget >= 81) {
      return "MINISTRY_BUDGET_IS_MAXIMUM";
    }

    this.budget++;
    return "OK";
  }
}
