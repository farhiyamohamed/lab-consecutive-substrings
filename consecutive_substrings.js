/**
 * getConsecutiveSubstrings(str)
 * Returns an array of all consecutive substrings (length >= 1)
 * in the order they appear.
 *
 * Example: 'abc' => ['a','ab','abc','b','bc','c']
 */

function getConsecutiveSubstrings(str) {
  const result = [];

  // Loop through starting positions
  for (let i = 0; i < str.length; i++) {
    // Loop through ending positions
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }

  return result;
}

module.exports = getConsecutiveSubstrings;
