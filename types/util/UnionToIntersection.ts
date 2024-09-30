export type UnionToIntersection<T> = (
  T extends any ? (_: T) => any : never
) extends (_: infer I) => any
  ? I
  : never;
