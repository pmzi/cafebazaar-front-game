export default function singleSongHandler(src) {
  const audio = new Audio(src);
  audio.loop = true;
  let isBeingPlayed = false;

  return {
    play() {
      if (isBeingPlayed) return;
      isBeingPlayed = true;

      audio.play();
    },
    pause() {
      if (!isBeingPlayed) return;
      isBeingPlayed = false;
      audio.pause();
      audio.currentTime = 0;
    },
  };
}
