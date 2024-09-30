export type ToMap<TUnion extends Record<TTag, string>, TTag extends string> = {
  [K in TUnion[TTag]]: Extract<TUnion, Record<TTag, K>>;
};
