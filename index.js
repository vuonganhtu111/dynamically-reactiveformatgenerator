function longestPalindrome(s) {
  const map = new Map();
  let hasOdd = false;
  let result = 0;
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const count of map.values()) {
    if (count % 2 === 0) result += count;
    else {
      result += count - 1;
      hasOdd = true;
    }
  }
  return hasOdd ? result + 1 : result;
}
