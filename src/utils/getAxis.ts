import { EDirections } from "../AppConstants";

export const getAxis = (
  currentDirection: EDirections,
  axis: [EDirections, EDirections]
) => {
  return currentDirection === axis[0]
    ? -1
    : currentDirection === axis[1]
    ? 1
    : 0;
};
