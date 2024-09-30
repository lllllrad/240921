import { GObject, VariableStatName } from "./GObject";

export interface EffectBase<TState> {
  strength: number;
  duration: number;
  state: TState;
  create: (
    strength: number,
    duration: number,
    context: EffectContext
  ) => [state: TState, output: (EffectCreateOutput | EffectTickOutput)[]];
  tick: (
    state: TState
  ) => [nextState: TState, output: EffectTickOutput[], nextTick: number];
  destroy: (state: TState) => void;
}

export interface EffectContext {
  to: GObject;
  by: GObject;
}

export type EffectTeam = "buff" | "neutral" | "debuff";

export type EffectTeamTarget =
  | EffectTeam
  | "buffAndNeutral"
  | "debuffAndNeutral"
  | "all";

export type EffectCreateOutput =
  | EffectCreateOutputAmplifyStatChangeByEffect
  | EffectCreateOutputAmplifyStatChangeByNonEffect
  | EffectCreateOutputEffectDurationChange
  | EffectCreateOutputStatChangeTemporarily;

export type EffectTickOutput =
  | EffectTickOutputStatChangeRelativelyPermanantly
  | EffectTickOutputSpawnGObject;

export interface EffectCreateOutputAmplifyStatChangeByEffect {
  type: "amplifyStatChangeByEffect";
  targetTeam: EffectTeamTarget;
  targetTermType: "all" | "permanent" | "temporary";
  coeffecient: number;
}

export interface EffectCreateOutputAmplifyStatChangeByNonEffect {
  type: "amplifyStatChangeByNonEffect";
  target: VariableStatName;
  coeffecient: number;
}

export interface EffectCreateOutputEffectDurationChange {
  type: "effectDurationChange";
  target: VariableStatName;
  coeffecient: number;
}

export interface EffectCreateOutputStatChangeTemporarily {
  type: "statChangeTemporarily";
  transaction: StatChange[];
}

export interface EffectTickOutputStatChangeRelativelyPermanantly {
  type: "statChangeRelativelyPermanantly";
  transaction: StatChange[];
}

export interface EffectTickOutputSpawnGObject {
  type: "spawnGObject";
  spawnedGObject: GObject;
}

export type StatChange = StatChangeRelatively | StatChangeAbsolutely;

export interface StatChangeRelatively {
  type: "relative";
  target: VariableStatName;
  coeffecient: number;
}

export interface StatChangeAbsolutely {
  type: "absolute";
  target: VariableStatName;
  change: number;
}
