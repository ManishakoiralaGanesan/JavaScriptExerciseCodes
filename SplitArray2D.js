let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let SplitCount = 4;
console.log(splitArray());
function splitArray() {
  let splitArrayList = [];
  let row = [];
  let count = 1;
  for (let index = 0; index < array.length; index++) {
    row.push(array[index]);
    if (count < SplitCount) {
      count++;
    } else if (count == SplitCount) {
      splitArrayList.push(row);
      count = 1;
      row = [];
    }
  }

  while (count <= SplitCount) {
    row.push(0);
    count++;
  }

  if (row.length != 0) {
    splitArrayList.push(row);
  }

  return splitArrayList;
}
