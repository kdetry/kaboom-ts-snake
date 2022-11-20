import { AreaComp, ColorComp, PosComp, RectComp } from "kaboom";

import { TPosition } from "../GameObjects.types";

export type TSnakeSegmentArgs = {
  position: TPosition;
};

export type TSnakeSegmentGameObj = RectComp | PosComp | ColorComp | AreaComp;
