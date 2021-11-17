export default class Shape {
  constructor() {
    this.isDestroyed = false;
  }

  destroy() {
    this.isDestroyed = true;
  }
}
