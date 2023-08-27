export const fixDecimals = function (value, left, right) {
  return Math.abs(value)
    .toFixed(right)
    .padStart(left + right + 1, '0');
};
