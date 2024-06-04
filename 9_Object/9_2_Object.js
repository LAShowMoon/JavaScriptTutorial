//객체와 반복문의 조우

//배열은 집어넣은 순서대로 꺼내올 수 있다. 
//이것이 배열의 큰 특징이다.
var arr = ['a','b','c'];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//다만 객체.에 저장된 값은 순서가 없다.
//그렇게 때문에 위의 방식보다는 아래의 방식으로 반복문을 쓴다.
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
//객체안의 키의 갯수만큼 반복한다.
//key변수는 객체안의 key를 담고 있고, 
//각 key의 값을 출력하고 싶으면 grades[key]와 같이 적어야 한다.
for(key in grades) {
    console.log("key : "+key+" value : "+grades[key]);
}
