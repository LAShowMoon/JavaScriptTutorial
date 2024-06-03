/*배열의 제어
여기서 알아볼건 배열안의 데이터를 삭제 수정 추가 등을 확인
*/

//.push 는 배열의 끝에 원소를 추가하는 방법(내장함수)
var li = ['a','b','c','d','e'];
li.push('f');
console.log(li);

//.concat 은 복수의 원소를 배열에 추가하는 방법
li = li.concat(['g','h']);
console.log(li);

//.unshift 은 배열의 시작점에 원소를 추가하는 방식
li.unshift('z');
console.log(li);

//.splice 배열의 중간에 어딘가를 지정하여 원소를 추가하고 싶을 때
//아니면 배열의 특정 구간을 추출 할 때 사용된다.
//문법 -> array.splice(index, howmany, element1, ..., elemnetN);

//인자 사양
//index (작성:필수) -> 데이터형 : number / 배열을 추가할 특정 배열의 위치를 가르키는 index
//howmany (작성:필수) -> 데이터형 : number / index에서부터 제거될 원소들의 수. index부터 index+howmany에 해당하는
//원소들은 삭제된다. 이 값이 0이 되면 어떤 원소도 삭제되지 않는다.

//element,...,elementN (작성:옵션) -> 데이터형 : number / index와 index+howmany 사이에 추가될 값
var a = ['a','b','c'];

a.splice(1,1,'h');
console.log(a);