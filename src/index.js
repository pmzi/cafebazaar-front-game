import { registerOnArrowLeft, registerOnArrowRight, registerOnSpace } from './events';
import canvasUtils from './utils/canvasUtils';
import throttle from './utils/throttle';
import {
  HEIGHT, SHOT_THROTTLE_TIME, WIDTH,
} from './config';
import Plane from './elements/Plane';
import Shot from './elements/Shot';
import generateObstacles from './generateObstacles';
import singleSongHandler from './utils/singleSongHandler';

const gunSongHandler = singleSongHandler('/assets/gun.mp3');
const explosionAudio = new Audio('/assets/explosion.mp3');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const ctx = canvas.getContext('2d');

  const player = new Plane({ ctx });

  let obstacles = generateObstacles({ ctx });
  let shots = [];

  const isArrowRightDown = registerOnArrowRight();
  const isArrowLeftDown = registerOnArrowLeft();
  const isSpaceDown = registerOnSpace();

  const throttledGenerateShot = throttle(
    {
      fn: () => new Shot({ ctx, player }),
      timeout: SHOT_THROTTLE_TIME,
    },
  );

  // Run animations
  const run = () => {
    requestAnimationFrame(() => {
      // Clear Canvas
      canvasUtils.clear({ ctx, width: WIDTH, height: HEIGHT });

      player.draw();

      // Draw and Move Shots
      shots.forEach((shot) => {
        shot.draw();
        shot.move();
      });
      // Filter Destroyed Shots
      shots = shots.filter((shot) => !shot.isDestroyed);
      // Draw Obstacles
      obstacles.forEach((obstacle) => {
        obstacle.draw();
      });
      // Filter Destroyed Obstacles
      obstacles = obstacles.filter((obstacle) => !obstacle.isDestroyed);

      if (isArrowRightDown()) {
        player.moveRight();
      }
      if (isArrowLeftDown()) {
        player.moveLeft();
      }

      if (isSpaceDown()) {
        gunSongHandler.play();
        const shot = throttledGenerateShot();
        if (shot) {
          shot.onMove = function onMove() {
            /*
            * You should check whether shot has collision with any obstacles or not
            * If yes, destroy both shot and collision
            * play explosion while shot has collision with any obstacle: explosionAudio.play();
            */
          };
          shots.push(shot);
        }
      } else {
        gunSongHandler.pause();
      }

      run();
    });
  };

  run();
});
