//배열의 효용성
function get_memner1(){
    return 'egoing';
}
console.log(get_memner1());

function get_memner2(){
    return 'k8805';
}
console.log(get_memner2());

function get_memner3(){
    return 'sorialgi';
}
console.log(get_memner3());

/*
함수(function)라는 것은 여러개의 입력값을(프로퍼티) 받을 수 있지만
하나의 값만을 반환하는 것이 특징이다.
그래서 여러 값을 하나로 만들어 반환하기 위해서 배열이 사용되는 경우도 있다.
*/

function get_memners(){
    return ['egoing','k8805','sorialgi'];
}
/*
위의 함수를 출력하여 값을 보려면 새로운 변수를 선언하고 변수엔에 함수를 담아서 출력
*/

var memners = get_memners();
console.log(memners[0]);
console.log(memners[1]);
console.log(memners[2]);