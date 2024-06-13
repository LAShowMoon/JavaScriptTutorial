var pattern = /a/;

var str = 'abcdef';
//match는 exec()와 비슷하다.
console.log(str.match(pattern));

var str = 'bcdef';

console.log(str.match(pattern));
//찾고자 하는 값이 없으면 null값을 돌려준다