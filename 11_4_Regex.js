var pattern = /a/;

var str = 'abcdef';
//match는 exec()와 비슷하다.
console.log(str.match(pattern));





var str = 'bcdef';

console.log(str.match(pattern));