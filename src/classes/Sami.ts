import { weightedScore, weightedScor_ } from "../helpers/weighted-score";

export class Sami {
  constructor(
    public weeklyWorkingHours: number = 45, //            [0 - 60]
    public weeklyVoluntaryHours: number = 0, //           [0 - 25]
    public monthlyWage: number = 2400, //                 [0 - 10000]
    public booksReadPerYear: number = 7, //               [0 - 50]
    public interestInArtsSportsScience: number = 25, //   [0 - 100]
    public averageLife: number = 79, //                   [50 - 100]
    public yearlyDoctorVisits: number = 6, //             [1 - 10]
    public countriesVisited: number = 2, //               [0 - 40]
    public averageCommuteToWork: number = 48, //          [1 - 60]
    public yearsOfEducation: number = 8, //               [0 - 20]
    public retiringAge: number = 65, //                   [0 - 100]
    public expenseCommuting: number = 150, //             [0 - 300]
    public expenseFood: number = 500, //                  [0 - 1000]
    public expenseHousing: number = 1000, //              [0 - 2000]
    public expenseClothing: number = 100, //              [0 - 150]
    public expenseElectronics: number = 200, //           [0 - 300]
    public expenseCommunication: number = 100, //         [0 - 150]
    public expenseWater: number = 50, //                  [0 - 150]
    public expenseElectricityAndHeating: number = 100, // [0 - 150]
    public expenseSocialActivities: number = 120 //       [0 - 150]
  ) {}

  getHappiness(): number {
    const happiness =
      weightedScor_(5, 0, 60, this.weeklyWorkingHours) +
      weightedScore(10, 0, 25, this.weeklyVoluntaryHours) +
      weightedScore(5, 0, 10000, this.monthlyWage) +
      weightedScore(5, 0, 50, this.booksReadPerYear) +
      weightedScore(5, 0, 100, this.interestInArtsSportsScience) +
      weightedScore(5, 50, 100, this.averageLife) +
      weightedScor_(7, 1, 10, this.yearlyDoctorVisits) +
      weightedScore(5, 0, 40, this.countriesVisited) +
      weightedScor_(5, 1, 60, this.averageCommuteToWork) +
      weightedScore(10, 0, 20, this.yearsOfEducation) +
      weightedScor_(5, 0, 100, this.retiringAge) +
      weightedScor_(3, 0, 300, this.expenseCommuting) +
      weightedScor_(6, 0, 1000, this.expenseFood) +
      weightedScor_(6, 0, 2000, this.expenseHousing) +
      weightedScor_(3, 0, 150, this.expenseClothing) +
      weightedScor_(3, 0, 300, this.expenseElectronics) +
      weightedScor_(3, 0, 150, this.expenseCommunication) +
      weightedScor_(3, 0, 150, this.expenseWater) +
      weightedScor_(3, 0, 150, this.expenseElectricityAndHeating) +
      weightedScor_(3, 0, 150, this.expenseSocialActivities);
    return happiness.toFixed(1);
  }
}
