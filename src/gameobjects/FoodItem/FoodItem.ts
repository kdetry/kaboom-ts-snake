import { BlockSize, EGameObjectTag } from "../../AppConstants";

import { KI } from "../../KaboomInstance";
import { TFoodItemArgs } from "./FoodItem.types";

export const FoodItem = ({ position }: TFoodItemArgs) => [
  KI.rect(BlockSize, BlockSize),
  KI.color(KI.GREEN),
  KI.pos(position.x, position.y),
  KI.area(),
  EGameObjectTag.FOOD,
];
