import { EGameScenes } from "./AppConstants";
import { KI } from "./KaboomInstance";
import { RegisterAssets } from "./RegisterAssets";
import { RegisterScenes } from "./RegisterScenes";

RegisterAssets();
RegisterScenes();

KI.go(EGameScenes.GAME);
