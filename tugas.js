// 1. IF, ELSE
let value = "BANANA";
const conditionalStatement = (value) => {
  if (value != "GRAPE") {
    value = "GRAPE";
    return value;
  } else {
    value = value;
  }

  return value;
};
console.log(conditionalStatement(value));

// 2. NESTED IF, ELSE
let a = 0;
const nestedConditionalStatement = (value) => {
  if (value < 5) {
    // JIKA VALUE KURANG DARI 5 MAKA TAMBAH DENGAN 2
    value += 2;
    if (value == 2) {
      // JIKA VALUE = 2 MAKA KURANGI 1
      value -= 1;
    }
    return value;
  } else {
    value = value;
  }

  return value;
};
console.log(nestedConditionalStatement(a));

// 3. SWITCH CASE
let b = 2;
const switchConditionalStatement = (value) => {
  switch (true) {
    case value == 0:
      // JIKA VALUE = 0 TAMBAH 1
      value += 1;
      break;

    default:
      // DEFAULT TAMBAHKAN 2
      value += 2;
      break;
  }

  return value;
};
// INIT VALUE 2 MAKA OUTPUT 4
console.log(switchConditionalStatement(b));

// 4. FOR, WHILE, DO WHILE(LOOPING)
let c = ["GRAPE", "BANANA", "APPLE"];
const loopingWithForStatement = (value) => {
  for (let index = 0; index < value.length; index++) {
    console.log(`${index + 1}. ${value[index]}`);
  }
};
// PRINT VALUE DARI VARIABLE C
loopingWithForStatement(c);

const loopingWithWhileStatement = (value) => {
  let index = 0;
  while (index < value.length) {
    console.log(`${index + 1}. ${value[index]}`);
    index++;
  }
};
// PRINT VALUE DARI VARIABLE C
loopingWithWhileStatement(c);

const loopingWithDoWhileStatement = (value) => {
  let index = 0;
  do {
    console.log(`${index + 1}. ${value[index]}`);
    index++;
  } while (index < value.length);
};
// PRINT VALUE DARI VARIABLE C
loopingWithDoWhileStatement(c);

// 5. FUNCTION
const thisIsArrowFunction = () => {
  return "THIS IS ARROW FUNCTION";
};

function thisIsRegularFunction() {
  return "THIS IS REGULAR FUNCTION";
}
console.log(thisIsArrowFunction());
console.log(thisIsRegularFunction());
