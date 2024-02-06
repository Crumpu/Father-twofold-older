'use strict';

/**
 * This function calculates how many years later (or how many years ago) the father's age was twice the son's age.
 * @param {Number} fatherAge - Father's current age.
 * @param {Number} sonAge - Son's current age.
 * @returns - the number of years is returned until (after) the father’s age is (was) twice as large as the son’s age.`
 */

function deltaOfAge(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0) {
        return 'Age cannot be negative';
    }
  const ageDiff = fatherAge / sonAge;
    const ageOfPaternity = fatherAge - sonAge;
    if (ageOfPaternity < 15) {
        return 'You are too young, to be a father :D';
    }
  const twofoldOlder = ageOfPaternity - sonAge;
  if (ageDiff > 2) {
    return `before father is twice the age of his remaining ${twofoldOlder} years`;
  } else if (ageDiff < 2) {
    return `${-twofoldOlder} years have passed since the father was twice as old as his son`;
  } else {
      return 'Now the father is twice as old as his son';
      }
}

console.log(deltaOfAge(15, 2));
