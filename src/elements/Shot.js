import {
  PADDING, PLANE_WIDTH, SHOT_RADIUS, SHOT_SPEED,
} from '../config';
import canvasUtils from '../utils/canvasUtils';
import getRandomColor from '../utils/getRandomColor';
import Shape from './Shape';

export default class Shot extends Shape {
  constructor({
    ctx, player,
  }) {
    super();

    this.ctx = ctx;
    this.x = PLANE_WIDTH / 2 + player.x;
    this.y = player.y - PLANE_WIDTH - PADDING;
    this.radius = SHOT_RADIUS;
    this.color = getRandomColor();
    this.onMove = () => {};
  }

  move() {
    if (this.isDestroyed) return;

    this.y -= SHOT_SPEED;

    if (this.y <= -1 * this.radius) {
      this.destroy();
    }
  }

  draw() {
    canvasUtils.circle({
      x: this.x,
      y: this.y - SHOT_SPEED,
      ctx: this.ctx,
      radius: this.radius,
      color: this.color,
    });

    if (typeof this.onMove === 'function') this.onMove();
  }
}
