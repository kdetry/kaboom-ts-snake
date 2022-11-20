import { BlockSize, EGameObjectTag } from "../AppConstants";

import { FoodItem } from "../gameobjects/FoodItem/FoodItem";
import { KI } from "../KaboomInstance";

export const RespawnFood = () => {
  const position = KI.rand(KI.vec2(1, 1), KI.vec2(13, 13));
  const fixedPosition = {
    x: Math.floor(position.x) * BlockSize,
    y: Math.floor(position.y) * BlockSize,
  };

  KI.destroyAll(EGameObjectTag.FOOD);

  KI.add(
    FoodItem({
      position: fixedPosition,
    })
  );
};
