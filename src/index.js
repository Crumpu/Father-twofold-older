'use strict';

/**
 * This function calculates how many years later (or how many years ago) the father's age was twice the son's age.
 * @param {Number} fatherAge - Father's current age.
 * @param {Number} sonAge - Son's current age.
 * @returns - the number of years is returned until (after) the father’s age is (was) twice as large as the son’s age.
 */

function deltaOfAge(fatherAge, sonAge) {
  const ageOfPaternity = fatherAge - sonAge;
  if (fatherAge < 0 || sonAge < 0) {
    return 'Age cannot be negative';
  }
  if (ageOfPaternity < 15) {
    return 'You are too young, to be a father :D';
  }
  for (let i = 0; i <= fatherAge; i++) {
    if ((fatherAge + i) / (sonAge + i) === 2) {
      if (i === 0) {
        return 'Now the father is twice as old as his son';
      } else {
        return `before father is twice the age of his remaining ${i} years`;
      }
    }
    if ((fatherAge - i) / (sonAge - i) === 2) {
      return `${i} years have passed since the father was twice as old as his son`;
    }
  }
}
console.log(deltaOfAge(53, 30));
