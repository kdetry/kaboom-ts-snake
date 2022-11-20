import { BlockSize, EGameObjectTag } from "../../AppConstants";

import { KI } from "../../KaboomInstance";
import { TSnakeSegmentArgs } from "./SnakeSegment.types";

export const SnakeSegment = ({ position }: TSnakeSegmentArgs) => [
  KI.rect(BlockSize, BlockSize),
  KI.pos(position.x, position.y),
  KI.color(KI.BLUE),
  KI.area(),
  EGameObjectTag.SNAKE,
];

//const snake = add(SnakeSegment({ position: { x: 1, y: 1 } }));
