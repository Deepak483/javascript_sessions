/**
 * @param {number[]} arr
 */

function sortNumerically(arr) {
  // You only need to implement this function.
  // return arr.sort();
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
}

var arr = [20, 10, 50, 60];
if (sortNumerically(arr) && arr != [10, 20, 50, 60])
  console.log(
    'Test fails: Expected [10, 20, 50, 60] for input arr = [20, 10, 50, 60] '
  );
else console.log('Sample test case for input arr = [20, 10, 50, 60] passed!');

module.exports = sortNumerically;
