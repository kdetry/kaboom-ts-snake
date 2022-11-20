import {
  BlockSize,
  DefaultSnakeLength,
  EDirections,
  EGameObjectTag,
  EGameScenes,
  MoveDelay,
} from "../AppConstants";

import { DirectionChanger } from "../actions/DirectionChanger";
import { DirectionKeyPressGenerator } from "../actions/DirectionKeyPressGenerator";
import { KI } from "../KaboomInstance";
import { MapItem } from "../gameobjects/MapItem/MapItem";
import { RespawnAll } from "../actions/RespawnAll";
import { RespawnFood } from "../actions/RespawnFood";
import { SceneDef } from "kaboom";
import { SnakeBody } from "../gameobjects/Snake/SnakeBody";
import { SnakeSegment } from "../gameobjects/Snake/SnakeSegment";
import { WallItem } from "../gameobjects/WallItem/WallItem";
import { getAxis } from "../utils/getAxis";
import { useVar } from "../utils/useVar";

export const GameScene: SceneDef = () => {
  const [currentDirection, setCurrentDirection] = useVar<EDirections>(
    EDirections.RIGHT
  );
  const [runAction, setRunAction] = useVar<boolean>(false);
  const [snakeLength, setSnakeLength] = useVar<number>(DefaultSnakeLength);

  const [timer, setTimer] = useVar<number>(0);

  KI.addLevel(MapItem, {
    width: BlockSize,
    height: BlockSize,
    pos: KI.vec2(0, 0),
    "=": WallItem,
  });

  RespawnAll({ setRunAction, setDirection: setCurrentDirection });

  DirectionKeyPressGenerator({
    directions: [
      EDirections.UP,
      EDirections.DOWN,
      EDirections.LEFT,
      EDirections.RIGHT,
    ],
    setDirection: setCurrentDirection,
  });

  const onFail = () => {
    const lastSnakeLength = snakeLength();
    setRunAction(() => false);
    setSnakeLength(() => DefaultSnakeLength);
    setTimer(() => 0);
    KI.shake(15);
    KI.wait(1, () =>
      KI.go(EGameScenes.GAMEOVER, {
        score: lastSnakeLength,
      })
    );
  };

  KI.onCollide(EGameObjectTag.SNAKE, EGameObjectTag.FOOD, () => {
    setSnakeLength((previous) => previous + 1);
    RespawnFood();
  });

  KI.onCollide(EGameObjectTag.SNAKE, EGameObjectTag.WALL, onFail);
  KI.onCollide(EGameObjectTag.SNAKE, EGameObjectTag.SNAKE, onFail);

  KI.onUpdate(() => {
    if (!runAction()) return;
    setTimer((timer) => timer + KI.dt());
    if (timer() < MoveDelay) return;
    setTimer(() => 0);

    const tmpCurrentDirection = currentDirection();
    const moveData = {
      x:
        getAxis(tmpCurrentDirection, [EDirections.LEFT, EDirections.RIGHT]) *
        BlockSize,
      y:
        getAxis(tmpCurrentDirection, [EDirections.UP, EDirections.DOWN]) *
        BlockSize,
    };

    const snakeHead = SnakeBody[SnakeBody.length - 1];

    SnakeBody.push(
      KI.add(
        SnakeSegment({
          position: {
            x: snakeHead.pos.x + moveData.x,
            y: snakeHead.pos.y + moveData.y,
          },
        })
      )
    );

    console.log("snakeLength()", snakeLength());
    console.log("SnakeBody", SnakeBody.length);

    if (SnakeBody.length > snakeLength()) {
      const firstSegment = SnakeBody.shift();
      if (firstSegment) KI.destroy(firstSegment);
    }
  });
};
