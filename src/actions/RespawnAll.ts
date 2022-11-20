import { EDirections } from "../AppConstants";
import { KI } from "../KaboomInstance";
import { RespawnFood } from "./RespawnFood";
import { RespawnSnake } from "./RespawnSnake";
import { StateDispatcher } from "../utils/useVar";

export type TRespawnAllArgs = {
  setRunAction: StateDispatcher<boolean>;
  setDirection: StateDispatcher<EDirections>;
};

export const RespawnAll = ({ setRunAction, setDirection }: TRespawnAllArgs) => {
  setRunAction(() => false);
  KI.wait(0.5, () => {
    RespawnSnake({ setDirection });
    RespawnFood();
    setRunAction(() => true);
  });
};
