import getRandom from './getRandom';

const colors = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#16a085',
  '#27ae60',
  '#8e44ad',
  '#2c3e50',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#f39c12',
  '#d35400',
  '#c0392b',
];

export default function getRandomColor() {
  const randomNumber = getRandom({ min: 0, max: colors.length - 1 });

  return colors[randomNumber];
}
