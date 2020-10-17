// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Convert a string to an array of numbers

const convertCreditCardNumber = (str) => {
  const creditCardArr = str.split("");

  for (let i = 0; i < creditCardArr.length; i++) {
    // Convert each element in the creditCardArr array to a number

    creditCardArr[i] = +creditCardArr[i];
  }

  return creditCardArr;
};

// Check if the credit card number is valid or not

const validateCred = (arr) => {
  let sum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr.length - 1) % 2 === i % 2) {
      sum += arr[i];
    } else {
      if (arr[i] * 2 > 9) {
        sum += arr[i] * 2 - 9;
      } else {
        sum += arr[i] * 2;
      }
    }
  }

  return sum % 10 === 0;
};

// Return all the invalid credit card numbers from an array of credit card numbers

const findInvalidCards = (arr) => {
  const invalidCards = [];

  for (let i = 0; i < arr.length; i++) {
    // If the credit card number is invalid, add this invalid credit card number to the end of the invalidCards array

    !validateCred(arr[i]) && invalidCards.push(arr[i]);
  }

  return invalidCards;
};

// Find out which credit card companies gave out invalid credit cards

const idInvalidCardCompanies = (arr) => {
  // By creating a set instead of an array, it's sure that this data strcture will contain no duplicates

  const invalidCompanies = new Set();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i][0]) {
      case 3:
        // The add method is basically the equivalent of the push method, but for sets! It adds elements to the end of a set

        invalidCompanies.add("Amex (American Express)");
        break;
      case 4:
        invalidCompanies.add("Visa");
        break;
      case 5:
        invalidCompanies.add("Mastercard");
        break;
      case 6:
        invalidCompanies.add("Discover");
        break;
      default:
        console.log("Company Not Found!");
        break;
    }
  }

  /* Even though we chose to create a set instead of an array as this will make sure our data structure will contain no duplicates, we still want to return an array.
  To do this, we just need to use the spread operator which will expand the set. Then, we are just adding the elements in the set to an array. So now, we have an array with
  no duplicates */
  return [...invalidCompanies];
};
