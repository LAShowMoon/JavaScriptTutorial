//배열은 반복문과 함께 자주 쓰인다. 리스트에 담긴 정보를 하나씩 꺼내서 처리를 하기 때문에
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    console.log(members[i].toUpperCase());   
    console.log('<br />');
}