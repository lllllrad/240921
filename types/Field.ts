import { Element } from "./Element";

export type Field = MagicField | EquipmentField | ProductionField;

export type MagicField =
  | "magic"
  | `${Element}Magic`
  | "spirit"
  | `${Element}Spirit`;
export type EquipmentField =
  | "sword"
  | "spear"
  | "axe"
  | "bow"
  | "ring"
  | "bracelet"
  | "necklace"
  | "earring";
export type ProductionField =
  | EnchantField
  | SmithField
  | GatherField
  | FarmField;

export type EnchantField = `${Element}Enchant` | "Enchant";
export type SmithField = "smith" | "sew";
export type GatherField = "stone" | "crystal";
export type FarmField = "herb" | "fruit";
