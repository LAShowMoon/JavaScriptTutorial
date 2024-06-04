//객체지향 프로그래밍
//객체도 배열과 같이 키값(value)안에 데이터 값 뿐만이 아니라 여러 형식을 담을 수 있다.
//키값안에 객체나 함수를 넣을 수 도 있다.
var grades = {
    'list':{'egoing' : 10,'k8805': 8, 'sorialgi': 80},
    'show':function(){
        console.log('Hello world');
    },
    //여기서 쓰이는 this란 이 함수가 속해있는 객체를 가르키는 변수이다.
    //즉 지금의 this는 현 'know'의 function을 가지고 있는 객체 grades를 가리킨다.
    //여기의 this값은 함수를 어떻게 생성하느냐에 따라서 달라질 수 있지만
    //
    'know':function(){
        console.log(this.list);
    },
    //아래와 같이 여러 키들 중에서도 무조건 서로 관련이 없는 것이 아닌 
    //관련을 가져 묶음을 가지는 것을 그룹핑이라고 한다.
    //이러한 그룹핑에 대한 것들을 객체지향 프로그래밍이라고 한다.
    'find':function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
    }
}
console.log(grades['list']['egoing']);
console.log(grades['show']());
grades['show']();
grades['know']();
grades.find();

//