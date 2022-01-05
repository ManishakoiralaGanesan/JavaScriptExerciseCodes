let atm_number = "6082210008266564";
let len = atm_number.length;
let duplicate_number = "";
main();
function main() {
  let duplicate_number_last_digit;
  duplicate_number = Iterate();
  if (duplicate_number != "") {
    duplicate_number_last_digit = getLastDigit(duplicate_number);
    duplicate_number_last_digit = 10 - parseInt(duplicate_number_last_digit);
  }
  let atm_number_last_digit = atm_number[len - 1];
  let isValid = checkLastDigit(
    atm_number_last_digit,
    duplicate_number_last_digit
  );
  if (isValid) {
    console.log("Valid ATM number");
  } else {
    console.log("Invalid ATM NUmber");
  }
}
function Iterate() {
  for (let index = 0; index < len - 1; index++) {
    if (index % 2 == 0) {
      let val = parseInt(atm_number[index]);
      val = val * 2;
      if (val >= 10) {
        val = sumofdigit(val);
        duplicate_number += val.toString();
      } else {
        duplicate_number += val.toString();
      }
    } else {
      duplicate_number += atm_number[index];
    }
  }
  return duplicate_number;
}

function getLastDigit(number) {
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
    let val = parseInt(number[index]);
    sum += val;
  }
  let final_val = sum.toString();
  let final_val_length = final_val.length;
  let last_digit = final_val[final_val_length - 1];

  return last_digit;
}
function checkLastDigit(last_digit1, last_digit2) {
  if (last_digit1 == last_digit2) {
    return true;
  } else {
    return false;
  }
}
function sumofdigit(number) {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
