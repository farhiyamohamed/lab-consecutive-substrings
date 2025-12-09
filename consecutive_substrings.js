/**
 * Function: getConsecutiveSubstrings
 * Description: Returns all consecutive substrings of a given string
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
function getConsecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }

  return result;
}

// Example test cases
console.log(getConsecutiveSubstrings("abc")); // ["a","ab","abc","b","bc","c"]
console.log(getConsecutiveSubstrings("a"));   // ["a"]
console.log(getConsecutiveSubstrings(""));    // []
