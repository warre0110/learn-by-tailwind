/*
 * Unique items in an array.
 */
export const uniq = <T>(a: T[]): T[] =>
    a.filter((t, index) => a.indexOf(t) === index)
