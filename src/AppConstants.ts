import { KaboomOpt } from "kaboom";
import { getCanvasElement } from "./utils/getCanvasElement";

export const EngineConfiguration: KaboomOpt = {
  width: 720,
  height: 400,
  scale: 1.5,
  crisp: true,
  canvas: getCanvasElement(),
  global: false,
  background: [240, 240, 240],
};

export const BlockSize = 20;
export const DefaultSnakeLength = 3;
export const MoveDelay = 0.20;

export enum EGameScenes {
  GAME = "game",
  GAMEOVER = "gameover",
}

export enum EGameSpriteKeys {
  PIZZA = "pizza",
}

export const GameSprites: Record<EGameSpriteKeys, string> = {
  [EGameSpriteKeys.PIZZA]: "/sprites/pizza.png",
};

export enum EGameSoundKeys {}

export const GameSounds: Record<EGameSoundKeys, string> = {};

export enum EGameObjectTag {
  WALL = "wall",
  SNAKE = "snake",
  FOOD = "food",
}

export enum EDirections {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export const OppositeDirections: Record<EDirections, EDirections> = {
  [EDirections.UP]: EDirections.DOWN,
  [EDirections.DOWN]: EDirections.UP,
  [EDirections.LEFT]: EDirections.RIGHT,
  [EDirections.RIGHT]: EDirections.LEFT,
};

export const DefaultDirection = EDirections.RIGHT;
