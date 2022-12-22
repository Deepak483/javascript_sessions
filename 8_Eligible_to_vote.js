/**
 * @param {number[]} ages
 * @return {number[]}
 */

function canVote(ages) {
  // You only need to implement this function.
  return ages.filter(age => age >= 18);
}

if (JSON.stringify(canVote([32, 33, 16, 40])) !== JSON.stringify([32, 33, 40]))
  console.log(
    'Test fails: Expected [32, 33, 40] for input ages = [32, 33, 16, 40]'
  );
else console.log('Sample test case for input arr = [32, 33, 16, 40] passed!');

module.exports = canVote;
