import {
  BlockSize,
  DefaultDirection,
  DefaultSnakeLength,
  EDirections,
} from "../AppConstants";

import { KI } from "../KaboomInstance";
import { SnakeBody } from "../gameobjects/Snake/SnakeBody";
import { SnakeSegment } from "../gameobjects/Snake/SnakeSegment";
import { StateDispatcher } from "../utils/useVar";

export type TRespawnSnakeArgs = {
  setDirection: StateDispatcher<EDirections>;
};

export const RespawnSnake = ({ setDirection }: TRespawnSnakeArgs) => {
  while (SnakeBody.length > 0) {
    const item = SnakeBody.pop();
    if (item) KI.destroy(item);
  }

  for (let i = 0; i < DefaultSnakeLength; i++)
    SnakeBody.push(
      KI.add(
        SnakeSegment({ position: { x: BlockSize, y: BlockSize * (i + 1) } })
      )
    );

  setDirection(() => DefaultDirection);
};
