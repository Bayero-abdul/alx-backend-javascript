export default class ClassRoom {
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof maxStudentsSize === 'number') this._maxStudentsSize = maxStudentsSize;
    else throw new TypeError('MaxStudentSize should be a number');
  }
}
