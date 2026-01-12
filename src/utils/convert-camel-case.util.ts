// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObject = Record<string, any>;

function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function convertCamelCaseKeys<T>(input: T): T {
  if (Array.isArray(input)) {
    return input.map(item => convertCamelCaseKeys(item)) as T;
  }

  if (input !== null && typeof input === "object") {
    return Object.entries(input as AnyObject).reduce((acc, [key, value]) => {
      const camelKey = toCamelCase(key);

      acc[camelKey] = convertCamelCaseKeys(value);
      return acc;
    }, {} as AnyObject) as T;
  }

  return input;
}
