
'use strict'

const nabeatsu = () => {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
            console.log(i + "!");
        } else if(i.toString().match(/3/)) {
            console.log(i + "!");
        } else {
            console.log(i);
        }
    }
}
nabeatsu();