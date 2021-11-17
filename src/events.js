export function registerOnArrowRight() {
  let isDown = false;
  document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
      isDown = true;
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowRight') {
      isDown = false;
    }
  });

  return () => isDown;
}
export function registerOnArrowLeft() {
  let isDown = false;
  document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      isDown = true;
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft') {
      isDown = false;
    }
  });

  return () => isDown;
}
export function registerOnSpace() {
  let isDown = false;
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      isDown = true;
    }
  });
  document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      isDown = false;
    }
  });

  return () => isDown;
}
