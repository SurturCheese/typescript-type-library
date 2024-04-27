import { NonEmptyArray } from "./nonEmptyArray.type";

export function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
  return arr.length > 0;
}
