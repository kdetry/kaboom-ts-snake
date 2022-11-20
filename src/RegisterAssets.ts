import { GameSounds, GameSprites } from "./AppConstants";

import { KI } from "./KaboomInstance";
import { getKeys } from "./utils/getKeys";

export const RegisterAssets = () => {
  getKeys(GameSprites).forEach((item) =>
    KI.loadSprite(item, GameSprites[item])
  );

  //getKeys(GameSounds).forEach((item) => loadSound(item, GameSounds[item]));
};
