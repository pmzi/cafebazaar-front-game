import {
  HEIGHT, PADDING, PLANE_MOVEMENT_SIZE, PLANE_WIDTH, WIDTH,
} from '../config';
import canvasUtils from '../utils/canvasUtils';
import getRandomColor from '../utils/getRandomColor';
import Shape from './Shape';

export default class Plane extends Shape {
  constructor({
    ctx,
  }) {
    super();

    this.ctx = ctx;
    this.x = WIDTH / 2;
    this.y = HEIGHT - PADDING;
    this.color = getRandomColor();
    this.width = PLANE_WIDTH;
  }

  moveLeft() {
    if (this.x - PLANE_MOVEMENT_SIZE <= PADDING) return;
    this.x -= PLANE_MOVEMENT_SIZE;
  }

  moveRight() {
    if (WIDTH <= this.x + PLANE_WIDTH + PADDING + PLANE_MOVEMENT_SIZE) return;
    this.x += PLANE_MOVEMENT_SIZE;
  }

  draw() {
    canvasUtils.triangle({
      ctx: this.ctx,
      x: this.x,
      y: this.y,
      width: this.width,
      color: this.color,
    });
  }
}
