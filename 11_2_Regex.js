//정규표현식
/*
정규 표현식은 크게 2가지 사용방법이 있다

1.컴파일
-컴파일이라고 하는 것은 필요한 대상을 찾는 것
패턴을 찾는 것이라고 한다.

2.실행
실행 단계는 우리가 찾은 패턴, 대상에 대해서 어떠한 작업을 구체적으로 하는지
*/

//정규표현식 리터럴 방법
var str = "a";
//아래와 같이 /a/를 넣음으로써 이 'a'가 우리가 찾고자 하는 대상이라는 걸 컴퓨터에게 알려주는 것이다.
// 이것을 변수에 담음으로써 우리가 찾고자 하는 것을 사용할 수 있게 되는 것이다.
var pattern = /a/;


//정규표현식 객체 생성자 방법
var pattern = new RegExp('a');//RegExp레귤러 익스프레션의 약자
//괄호안의'a'라는 문자를 찾고자 한다 라고 선언

//위의 리터럴과 객체 생성자는 같은 뜻이다.
//var pattern = /a/; == var pattern = new RegExp('a');
