import { EGameScenes } from "../AppConstants";
import { KI } from "../KaboomInstance";
import { ScoreTextItem } from "../gameobjects/ScoreTextItem/ScoreTextItem";
import { generateGameOverText } from "../utils/generateGameOverText";

export type TGameOverSceneArgs = {
  score: number;
};

let highScore = 0;
export const GameOverScene = ({ score }: TGameOverSceneArgs) => {
  const {
    add,
    pos,
    rect,
    width,
    height,
    color,
    origin,
    onKeyPress,
    BLACK,
    go,
  } = KI;

  if (score > highScore) highScore = score;

  add([pos(0, 0), rect(width(), height()), color(BLACK)]);

  add([
    ...ScoreTextItem(generateGameOverText(score, highScore)),
    origin("center"),
    pos(width() / 2, height() / 2),
  ]);
  onKeyPress("space", () => go(EGameScenes.GAME));
};
