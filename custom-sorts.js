function ageSort(users) {
  let copyUsers = users.slice();
  let sortedUsers = [];


  while (copyUsers.length > 0) {
    let index;
    let lowestAge = Infinity;

    for (let i = 0; i < copyUsers.length; i++) {
      let current = copyUsers[i]
      if (current["age"] < lowestAge) {
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
  let even = [];
  let odd = [];
  while (arr.length > 0) {
    let smallestEven = Infinity;
    let smallestOdd = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        if (arr[i] < smallestEven) {
          smallestEven = arr[i];
        }
      } else {
        if (arr[i] < smallestOdd) {
          smallestOdd = arr[i];
        }
      }
    }

    if (smallestEven !== Infinity) {
      even.push(smallestEven);
      let smallestEvenIndex = arr.indexOf(smallestEven);
      arr.splice(smallestEvenIndex, 1);
    }
    if (smallestOdd !== Infinity) {
      odd.push(smallestOdd);
      let smallestOddIndex = arr.indexOf(smallestOdd);
      arr.splice(smallestOddIndex, 1);
    }
  }
  return odd.concat(even);
}

function validAnagrams(s, t) {
  let sArray = s.split("")
  let tArray = t.split("")

  sArray.sort()
  tArray.sort()

  if(sArray.join("") === tArray.join("")) {
    return true;
  }
  return false;
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
