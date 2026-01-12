declare global {
  /**
   * OmitTyped<T, K>
   * Removes the properties K from type T.
   * Equivalent to TypeScript's built-in Omit, but typed for clarity.
   * @template T - The base type
   * @template K - The keys to omit
   */
  type OmitTyped<T, K extends keyof T> = Omit<T, K>

  /**
   * StrictOmit<T, K>
   * Creates a type by excluding keys K from type T.
   * Similar to Omit, but uses mapped types for strict exclusion.
   * @template T - The base type
   * @template K - The keys to strictly omit
   */
  type StrictOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
  }
}

export {}
