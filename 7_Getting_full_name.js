/**
 * @param {object[]} arr
 * @return {string[]}
 */

function getFullName(obj) {
  // You only need to implement this function.
  const getFName = item => [item.firstname, item.lastname].join(' ');
  return obj.map(getFName);
}

if (
  getFullName([
    { firstname: 'Robert', lastname: 'Obrain' },
    { firstname: 'Kevin', lastname: 'Hart' },
    { firstname: 'Dane', lastname: 'Cobby' },
  ]).toString() != ['Robert Obrain', 'Kevin Hart', 'Dane Cobby']
)
  console.log(
    "Test fails: Expected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby'] "
  );
else console.log('Sample test case passed!');

module.exports = getFullName;
