/**
 * @param {string[]} names
 * @param {number} startIndex
 * @param {number} deleteCount
 * @return {string[]}
 */

function remove(names, startIndex, deleteCount) {
  // You only need to implement this function.
  return names.splice(startIndex, deleteCount);
}

if (
  JSON.stringify(remove(['Ravi', 'Pulkit', 'Kiran', 'Aagam'], 2, 2)) !==
  JSON.stringify(['Kiran', 'Aagam'])
)
  console.log(
    "Test fails: Expected ['Kiran'] for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], startIndex = 2, deleteCount = 2"
  );
else
  console.log(
    "Sample test case for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], startIndex = 2, deleteCount = 2 passed!"
  );

module.exports = remove;
