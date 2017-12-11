
var natural = require('natural'),

term = 'javaScript',

dist = function (b, a) {

    a = a || term;

    return natural.JaroWinklerDistance(a, b);

};

console.log( dist('javaScript') ); // 1
console.log( dist('java') ); // 0.88
console.log( dist('lightScript') ); // 0.715...
console.log( dist('python') ); // 0
