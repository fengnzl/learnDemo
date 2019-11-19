// TODO: write the validation functions
function isValidName(name) {
  if (typeof name == 'string' && name.trim().length >= 3) {
    return true;
  }
  return false;
}

function hoursAttended(attended, length) {
  attIsArrOrNum = isArrOrNum(attended);
  lenIsArrOrNum = isArrOrNum(length);

  if (!attIsArrOrNum || !lenIsArrOrNum) {
    return false;
  }
  if (!fakePositiveWholeNum(attended) || !fakePositiveWholeNum(length)) {
    return false;
  }

  return Number(attended) <= Number(length);
  
  function isArrOrNum(v) {
    return typeof v === 'number' || (typeof v === 'string' && v.trim().length !== 0);
  }

  function fakePositiveWholeNum(v) {
    if (isNaN(Number(v))) {
      return false;
    }
    return Math.floor(Number(v)) === Number(v) && Number(v) >= 0;
  }
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
