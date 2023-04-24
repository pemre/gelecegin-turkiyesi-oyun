export const weightedScore = (
  weight: number,
  min: number,
  max: number,
  value: number
) => {
  const percentage = (value * 100) / (min + max);

  return weight * (percentage / 100);
};

// weightedScoreReverse
export const weightedScor_ = (
  weight: number,
  min: number,
  max: number,
  value: number
) => {
  const percentage = (value * 100) / (min + max);

  return (weight * (100 - percentage)) / 100;
};
