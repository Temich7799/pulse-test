export const subtractArrays = (a, b, key) =>
  a.filter((x) => !b.some((y) => (key ? y[key] === x[key] : y === x)));

export const sortArray = (array, key) => array.sort((a, b) => a[key] - b[key]);
