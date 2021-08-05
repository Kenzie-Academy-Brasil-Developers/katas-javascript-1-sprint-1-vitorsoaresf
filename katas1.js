function oneThroughTwenty() {

  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

}

// console.log(oneThroughTwenty());

function evensToTwenty() {

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
      console.log(i);
  }

}

// console.log(evensToTwenty());

function oddsToTwenty() {

  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0)
      console.log(i);
  }

}

// console.log(oddsToTwenty());

function multiplesOfFive() {

  for (let i = 1; i <= 100; i++) {
    if ((i % 5) === 0)
      console.log(i);
  }

}

// console.log(multiplesOfFive());

function squareNumbers() {

  for (let i = 1; i <= 100; i++) {
    if (i * i <= 100)
      console.log(i * i);
  }

}

// console.log(squareNumbers());

function countingBackwards() {

  for (let i = 20; i > 0; i--) {
    console.log(i);
  }

}

// console.log(countingBackwards());

function evenNumbersBackwards() {

  for (let i = 20; i > 0; i--) {
    if (i % 2 === 0)
      console.log(i);
  }
}

// console.log(evenNumbersBackwards());

function oddNumbersBackwards() {

  for (let i = 20; i > 0; i--) {
    if (i % 2 !== 0)
      console.log(i);
  }
}

// console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {

  for (let i = 100; i > 0; i--) {
    if ((i % 5) === 0)
      console.log(i);
  }
}

// console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {

  for (let i = 100; i > 0; i--) {
    for (let z = 1; z <= i; z++){
      if (i === z * z){
        console.log(i);
      }
    }
  }
}

// console.log(squareNumbersBackwards());
