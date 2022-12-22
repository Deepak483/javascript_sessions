/**
 * @param {number[]} arr
 * @param {number} key
 * @return {boolean}
 */

function search(arr, key) {
  // You only need to implement this function.
  var ans = false;
  arr.forEach(function (value) {
    if (value == key) ans = true;
  });
  return ans;
}

if (search([1, 2, 3, 2, 3, 2], 0) != false)
  console.log(
    'Test fails: Expected false for input arr = [1, 2, 3, 2, 3, 2], and key = 0 '
  );
else
  console.log(
    'Sample test case for input arr = [1, 2, 3, 2, 3, 2], and key = 0  passed!'
  );

module.exports = search;
