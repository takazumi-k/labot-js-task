
'use strict'

function fizzbuzz() {
    for (let i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fFizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {console.log(i);
    }
}
}
fizzbuzz();