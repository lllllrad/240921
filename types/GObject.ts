import { EffectBase } from "./Effect";
import { Team } from "./Team";
import { UnionToIntersection } from "./util/UnionToIntersection";

export interface GObjectBase {
  team: Team;
  effects: EffectBase<unknown>[];
  boundTo: GObject[];
  binding: GObject[];
  control: number;
  totalControlRecursively: number;
}

export type GObject = Entity | Projectile | Obstacle;

export interface Entity extends GObjectBase {
  type: "entity";
  baseStat: BaseStatForEntity;
  variableStat: VariableStatForEntity;
}

export interface Projectile extends GObjectBase {
  type: "projectile";
  baseStat: BaseStatForProjectile;
  variableStat: VariableStatForProjectile;
}

export interface Obstacle extends GObjectBase {
  type: "obstacle";
  baseStat: BaseStatForObstacle;
  variableStat: VariableStatForObstacle;
}

export type VariableStatName = keyof (VariableStatForEntity &
  VariableStatForProjectile &
  VariableStatForObstacle);

export interface BaseStatBase {
  bodyHealth: number;
  controlCapacity: number;
}

export interface VariableStatBase {
  life: number;
  control: number;
}

export interface BaseStatForEntity
  extends BaseStatBase,
    UnionToIntersection<{ a: 42 } | { b: 42 }> {
  mentalHealth: number;
  insight: number;
}

export interface VariableStatForEntity extends VariableStatBase {
  //
}

export interface BaseStatForProjectile extends BaseStatBase {
  //
}

export interface VariableStatForProjectile extends VariableStatBase {
  //
}

export interface BaseStatForObstacle extends BaseStatBase {
  //
}

export interface VariableStatForObstacle extends VariableStatBase {
  //
}
