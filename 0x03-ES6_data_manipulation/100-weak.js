export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const queries = weakMap.get(endpoint);
  if (queries && queries >= 5) throw new Error('Endpoint load is high.');

  if (queries === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, queries + 1);
  }
}
