import { EGameScenes } from "./AppConstants";
import { GameOverScene } from "./scenes/GameOverScene";
import { GameScene } from "./scenes/GameScene";
import { KI } from "./KaboomInstance";

export const RegisterScenes = () => {
  KI.scene(EGameScenes.GAME, GameScene);
  KI.scene(EGameScenes.GAMEOVER, GameOverScene);
};
