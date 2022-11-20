import { BlockSize, EGameObjectTag } from "../../AppConstants";

import { KI } from "../../KaboomInstance";

export const WallItem = () => [
  KI.rect(BlockSize, BlockSize),
  KI.color(KI.RED),
  KI.area(),
  EGameObjectTag.WALL,
];
