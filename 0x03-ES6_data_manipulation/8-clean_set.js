export default function cleanSet(set, startString) {
  const array = Array.from(set);
  const values = array.filter((string) => string.startsWith(startString));
  return values;
}