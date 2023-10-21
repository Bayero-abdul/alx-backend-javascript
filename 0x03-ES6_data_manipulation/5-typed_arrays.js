export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position >= length && buffer.byteLength !== length) throw new Error('Position outside range');

  const view = new DataView(buffer);
  view.setUint8(position, value);
  return view;
}
