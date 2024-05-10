const gcdRecursive = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdRecursive(b, a % b);
};
