
/** 
 * Enumerate type is a type that generates an array of numbers from 0 to N
*/
export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>
  
/**
 * Range type is a type that generates an array of numbers from F to T, F being a minimum of 0
 */
export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
