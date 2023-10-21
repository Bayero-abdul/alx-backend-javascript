export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (view.byteOffset + view.byteLength > buffer.byteLength) throw new RangeError('Position outside range');

  view.setUint8(position, value);
  return view;
}
