function printLeftTriangle(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
    row = "";
  }
}

printLeftTriangle(10);
//******************************************************************* */
function printRightTriangle(n) {
  let space = ""; // intial spaces
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      space += " ";
    }
    for (let k = 0; k <= i; k++) {
      star += "*";
    }
    console.log(space + star); // both merges in the same line ,
    space = ""; // empty both the value to fill with new value again
    star = "";
  }
}
printRightTriangle(10);
//**************************************************** */
function invertedLeftTringle(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
}

invertedLeftTringle(10);

//************************************************* */

function invertedRightTriangle(n) {
  let star = "";
  let space = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      space += " ";
    }
    for (let k = 0; k < n - i; k++) {
      star += "*";
    }
    console.log(space + star);
    space = "";
    star = "";
  }
}

invertedRightTriangle(10);
//****************************************************************** */
function printTringle(n) {
  let space = "";
  let star = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      space += " ";
    }
    for (let k = 0; k <= i * 2 + 1; k++) {
      star += "*";
    }
    console.log(space + star);
    space = "";
    star = "";
  }
}
printTringle(5);
