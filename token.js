
var natural = require('natural'),

// use this constructor
tokenizer = new natural.WordTokenizer(),

content = 'I like the javaScript it is the best.';
tokens = tokenizer.tokenize(content);

// gives me an array of the words
console.log( tokens );
// [ 'I', 'like', 'the', 'javaScript', 'it', 'is', 'the', 'best' ]