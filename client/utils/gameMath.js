export function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

export function isInRange({ x, y, dirX, dirY, range }) {
  return (
    x < dirX + range &&
    x > dirX - range &&
    (y < dirY + range && y > dirY - range)
  );
}
