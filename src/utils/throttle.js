export default function throttle({ fn, timeout }) {
  let timer;
  return (...args) => {
    if (timer) return null;
    timer = setTimeout(() => {
      timer = null;
    }, timeout);
    return fn(...args);
  };
}
