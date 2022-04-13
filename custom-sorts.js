function ageSort(users) {
  let copyUsers = users.slice();
  let sortedUsers = [];


  while(copyUsers.length > 0) {
    let index;
    let lowestAge = Infinity;

    for(let i = 0; i < copyUsers.length; i++) {
      let current = copyUsers[i]
      if(current["age"] < lowestAge) {
        lowestAge = current["age"]
        index = i;
      }
    }

    sortedUsers.push(copyUsers[index])
    copyUsers.splice(index, 1)

  }

  return sortedUsers;
}


function oddEvenSort(arr) {
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
