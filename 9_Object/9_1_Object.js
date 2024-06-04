/*객체는 Object라고 하며 역할을 배열과 유사하다.(데이터를 담아내는 그릇)

배열은 데이터가 추가되면 인덱스가 자동으로 만들어 진다.
객체는 인덱스에 원하는 데이터를 직접 지정해 줄 수 있다.

다른언어에서는 연관배열, 맵, 딕셔너리라 부른다.

*/
//객체 생성 방법

var grades = {'egoing':10, 'k8805':6, 'sorialgi':80}
//변수타입 변수명 = {'인덱스명(key))':데이터값(value)}

var grades1 ={};
grades1['egoing']=10;
grades1['k8805']=6;
grades1['sorialgi']=80;
//출력
console.log(grades1['egoing']);
console.log(grades1.k8805);
console.log(grades1['k88'+'05']);
//객채 안 출력은 문자열이기 때문에 문자열 조합식으로도 출력가능