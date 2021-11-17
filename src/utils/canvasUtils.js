export default {
  circle({
    x, y, radius, ctx, color,
  }) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  },
  triangle({
    x, y, width, ctx, color,
  }) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width / 2, y - width);
    ctx.lineTo(x + width, y);
    ctx.fillStyle = color;
    ctx.fill();
  },
  clear({ ctx, width, height }) {
    ctx.clearRect(0, 0, width, height);
  },
};
