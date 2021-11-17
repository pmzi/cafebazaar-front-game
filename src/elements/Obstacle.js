import { HEIGHT, PADDING, WIDTH } from '../config';
import canvasUtils from '../utils/canvasUtils';
import getRandom from '../utils/getRandom';
import getRandomColor from '../utils/getRandomColor';
import Shape from './Shape';

const MIN_RADIUS = 10;
const MAX_RADIUS = 20;

const X_MAX_OBSTACLES_POSITION = WIDTH - PADDING;
const X_MIN_OBSTACLES_POSITION = PADDING;

const Y_MAX_OBSTACLES_POSITION = HEIGHT * (2 / 3);
const Y_MIN_OBSTACLES_POSITION = PADDING;

export default class Obstacle extends Shape {
  constructor({ ctx }) {
    super();

    const randomRadius = getRandom({ min: MIN_RADIUS, max: MAX_RADIUS });

    const randomX = getRandom(
      {
        min: X_MIN_OBSTACLES_POSITION + randomRadius,
        max: X_MAX_OBSTACLES_POSITION - randomRadius,
      },
    );
    const randomY = getRandom(
      {
        min: Y_MIN_OBSTACLES_POSITION + randomRadius,
        max: Y_MAX_OBSTACLES_POSITION - randomRadius,
      },
    );

    this.x = randomX;
    this.y = randomY;
    this.ctx = ctx;
    this.radius = randomRadius;
    this.color = getRandomColor();
  }

  draw() {
    if (this.isDestroyed) return;

    canvasUtils.circle({
      x: this.x,
      y: this.y,
      ctx: this.ctx,
      radius: this.radius,
      color: this.color,
    });
  }
}
