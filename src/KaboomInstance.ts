import kaboom, { KaboomCtx } from "kaboom";

import { EngineConfiguration } from "./AppConstants";

// a.k.a KaboomInstance
export const KI: KaboomCtx = kaboom(EngineConfiguration);
