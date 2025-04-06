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

printLeftTriangle(20);
