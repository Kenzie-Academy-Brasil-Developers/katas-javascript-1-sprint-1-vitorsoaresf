function oneThroughTwenty() {

  let arr = [];
  let cont = 0;

  for (let i = 1; i <= 20; i++) {
    arr[cont] = i;
    cont++;
  }

  return arr;
}

console.log(oneThroughTwenty());

function evensToTwenty() {
  let arr = [];
  let cont = 0;

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;
}

console.log(evensToTwenty());

function oddsToTwenty() {

  let arr = [];
  let cont = 0;

  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;
}

 console.log(oddsToTwenty());

function multiplesOfFive() {

  let arr = [];
  let cont = 0;

  for (let i = 1; i <= 100; i++) {
    if ((i % 5) === 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;

}

console.log(multiplesOfFive());

function squareNumbers() {

  let arr = [];
  let cont = 0;

  for (let i = 1; i <= 100; i++) {
    if (i * i <= 100) {
      arr[cont] = i * i;
      cont++;
    }
  }

  return arr;

}

console.log(squareNumbers());

function countingBackwards() {

  let arr = [];
  let cont = 0;

  for (let i = 20; i > 0; i--) {
    arr[cont] = i;
    cont++;
  }

  return arr;
}

console.log(countingBackwards());

function evenNumbersBackwards() {

  let arr = [];
  let cont = 0;

  for (let i = 20; i > 0; i--) {
    if (i % 2 === 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;

}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {

  let arr = [];
  let cont = 0;

  for (let i = 20; i > 0; i--) {
    if (i % 2 !== 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;

}

console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {

  let arr = [];
  let cont = 0;

  for (let i = 100; i > 0; i--) {
    if ((i % 5) === 0) {
      arr[cont] = i;
      cont++;
    }
  }

  return arr;

}

console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {

  let arr = [];
  let cont = 0;

  for (let i = 100; i > 0; i--) {
    for (let z = 1; z <= i; z++) {
      if (i === z * z) {
        arr[cont] = i;
        cont++;
      }
    }
  }

  return arr;

}

console.log(squareNumbersBackwards());
