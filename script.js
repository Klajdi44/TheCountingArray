'use strict';

let i = 1;
const arr = [];

const counter = () => {
  if (i > arr.length) {
    arr.unshift(i - 1);
    i++
    console.log(arr);

  }
  if (i > 9) {
    arr.pop();
  }
  setTimeout(counter, 1000);


}

counter();


// if (i < h1Text.length) {
//   h1.textContent += h1Text[i]
//   typesound2.play();
//   i++;
//   typesound1.play();
//   setTimeout(start, 400);