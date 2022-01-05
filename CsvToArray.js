let string = "Name,Age,Degree Viki,211,BE Peter,121,SDS";
CsvToString();
function CsvToString() {
  // split row
  let row = string.split(" ");
  let col = [];
  // split col
  row.forEach((element) => {
    let tempArray = element.split(",");
    col.push(tempArray);
  });
  // get array of obj
  let key = col[0];
  let finalArray = [];
  for (let index = 1; index < col.length; index++) {
    let element = col[index];
    let model = {};
    for (let j = 0; j < element.length; j++) {
      model[key[j]] = element[j];
    }

    finalArray.push(model);
  }
  console.log(finalArray);
}
