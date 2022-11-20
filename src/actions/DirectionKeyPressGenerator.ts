import { DirectionChanger } from "./DirectionChanger";
import { EDirections } from "../AppConstants";
import { KI } from "../KaboomInstance";
import { StateDispatcher } from "../utils/useVar";

export type TDirectionKeyPressGeneratorArgs = {
  directions: Array<EDirections>;
  setDirection: StateDispatcher<EDirections>;
};

export const DirectionKeyPressGenerator = ({
  directions,
  setDirection,
}: TDirectionKeyPressGeneratorArgs) =>
  directions.forEach((item) =>
    KI.onKeyPress(item, () =>
      DirectionChanger({
        setDirection: setDirection,
        nextDirection: item,
      })
    )
  );
