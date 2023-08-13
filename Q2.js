function printPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = '';
    for (let j = 5; j >= i; j--) {
      pattern += j;
    }
    console.log(pattern);
  }
}

printPattern(5);
