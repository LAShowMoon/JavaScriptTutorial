//정규식 메소드 실행

//먼저 대상을 지정하고, 그 대상에 대해서 어떤 작업을 할 것 인지
//우리가 패턴을 만드는 과정에서 
//정규표현식에 맞게 길게 작성을 하면 거기에 해당되는 정보를 찾아주는 것이 정규표현식이다.


var pattern = /a/;

//추출,테스트,치환
//예시를 들면 긴 텍스트 문장이 있으면 url에 해당되는 부분을 뽑아내고 싶다.
//또는 이메일에 해당되는 부분만 추출해서 빼내고 싶다. 이런경우에 정규표현식을 사용한다.


//RegExp.exec() -> 정규 표현식 객체를 의미한다.

var pattern = /a/;//-> 찾으려하는 대상'a'
//여기의 pattern은 정규표현식 객체라는 것이다
//객체의 이해도가 없으면 특정 패턴을 가지고 있다고 생각하면 좋다.

console.log(pattern.exec('abcde'));//괄호()안에 찾으려하는 곳을 입력시킨다.


var pattern = /a./;//이렇게 찾으려는 문자열 뒤에 점을 찍을 경우
//하나의 문자라는 뜻이다, 즉 .이 오는 자리에 어떤 문자가 오든 상관이 없다.
//이 .자리에는 문자가 하나 있어야 한다는 뜻이다.
//이상태로 출력시키면 a다음에 오는 b가 출력된다.

console.log(pattern.exec('abcdef'));


//(exec)
//아래와 같이 pattern에서 찾고자 하는 문자열이 인자에 없는 경우
//이 같은 경우null을 출력한다.
console.log(pattern.exec('cdefg'));

//exec라는 메소드는 정규표현식이 찾고자 하는 그 대상을
//첫 번째 인자로 전달해서 이 패턴이 찾는 정보를 대상에서 찾아서 그것이 있다면 그것을 배열로 리턴하는 함수(pattern)메소드(exec)이다.


//test
//test메소드의 경우 인자 안에 찾고자 하는 문자열이 있을 경우 boolean(true,false)를 출력한다.
console.log(pattern.test('abcdef'));
console.log(pattern.test('cdefg'));