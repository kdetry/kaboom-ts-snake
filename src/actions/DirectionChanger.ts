import { EDirections, OppositeDirections } from "../AppConstants";

import { StateDispatcher } from "../utils/useVar";

export type TDirectionChangerArgs = {
  setDirection: StateDispatcher<EDirections>;
  nextDirection: EDirections;
};

export const DirectionChanger = ({
  setDirection,
  nextDirection,
}: TDirectionChangerArgs) => {
  setDirection((previousDirection) => {
    if (previousDirection !== OppositeDirections[nextDirection]) {
      return nextDirection;
    }
    return previousDirection;
  });
};
