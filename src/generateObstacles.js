import { NUMBER_OF_OBSTACLES } from './config';
import Obstacle from './elements/Obstacle';

export default function generateObstacles({ ctx }) {
  const obstacles = [];

  for (let i = 0; i < NUMBER_OF_OBSTACLES; i += 1) {
    obstacles.push(new Obstacle({ ctx }));
  }

  return obstacles;
}
