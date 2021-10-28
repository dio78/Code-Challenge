const findSum = function(array) {
  // your code here - don't forget to return a number!
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return array.reduce(reducer);
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
  let counter = 0;
  let maxCount = 0;
  let maxIndex;
  let minCount;
  let minIndex; 
  let frequency = {
    most: null,
    least: null
  };

  array.forEach(function findMode(element) {
    counter = 0;
    array.forEach(function (string) {
      if (element == string) {
        counter++;
      }
      if (counter > maxCount) {
        maxCount = counter;
        maxIndex = array.indexOf(element);
      }
    });
  });

  minCount = maxCount;
  array.forEach(function findAntiMode(element) {
    counter = 0;
    array.forEach(function (number) {
      if (element == number) {
        counter++;
      }
    });
    if (counter < minCount && counter !== 0) {
      minCount = counter;
      minIndex = array.indexOf(element);
    };
  });

  frequency.most = array[maxIndex];
  frequency.least = array[minIndex];
  return frequency;
};


const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let strArray = str.split('');
  strArray.reverse();
  let newWord = strArray.join('')
  if (str.toLowerCase() == newWord.toLowerCase()) {
    return true
  } else {
    return false
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let currentNum;
  const products = [];
  for (let i =0; i < array.length - 1; i++) {
    currentNum = array[i];
    products.push(array[i] * array[i + 1]);
  }
  let maxNum = products.reduce((numOne, numTwo) => {
    return Math.max(numOne, numTwo)
  }, 0);
  return maxNum;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  const firstP = str.indexOf('(')
  const secondP = str.indexOf(')')
  return str.substring(0, firstP) + str.substring(secondP + 1);
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  let score = 0
  const word = str.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'n':
      case 'r':
      case 's':
      case 't':
        score += 1
        break;
      case 'd':
      case 'g':
        score += 2
        break;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        score += 3
        break;
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        score += 4
        break;
      case 'k':
        score += 5
        break;
      case 'j':
      case 'x':
        score += 8
        break;
      case 'q':
      case 'z':
        score += 10
        break;
      default:
        score = "Your word needs to be comprised of letters. Where did you even get non-letter tiles...?"
        break;
    }
  }
  return score
};
