/**
 * @param {number[]} arr
 * @return {number | undefined}
 */

function firstEven(arr) {
  // You only need to implement this function.
  const evenNumber = arr.find(function findEven(element) {
    return element % 2 === 0;
  });
  return evenNumber;
}

if (firstEven([1, 2, 3, 2, 3, 2]) != 2)
  console.log('Test fails: Expected 2 for input arr = [1, 2, 3, 2, 3, 2] ');
else console.log('Sample test case for input arr = [1, 2, 3, 2, 3, 2] passed!');

module.exports = firstEven;
