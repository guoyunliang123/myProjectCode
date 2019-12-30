// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

/* interface LabelledValue {
  label: string;
  // size: number;
  word?: boolean
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
//   console.log(labelledObj.word);
//   console.log(labelledObj.size);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj); */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare.color);