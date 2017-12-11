
var natural = require('natural');

console.log(natural.JaroWinklerDistance("dustin", "dotson"));
console.log(natural.JaroWinklerDistance("dustin", "justin"));
console.log(natural.JaroWinklerDistance("dustin", "davidson"));
console.log(natural.JaroWinklerDistance("dustin", "davaon"));
console.log(natural.JaroWinklerDistance("dustin", "austin"));

var term = 'dustin';
var content = 'dotson justin davidson davon austin dustin';

var sortByDist = function (term, content) {

    var tokenizer = new natural.WordTokenizer();
    var tokens = tokenizer.tokenize(content);

    tokens.sort(function (a, b) {

            a = natural.JaroWinklerDistance(term, a);
            b = natural.JaroWinklerDistance(term, b);

            return b - a;

        });

    return tokens;

};

sortByDist(term, content);
