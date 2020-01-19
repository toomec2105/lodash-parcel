var _ = require('lodash');


let arr = [1, 2, 3, 4, 2];
let fn1 = (arr) => {
    arr.push(5);
    arr = _.pull(arr, 2)
    return _.shuffle(arr);
}
console.log(fn1(arr));