// js/src/js_005_operator.js

// >, <, >=, <=
var n = 10;
var n2 = 20;
var result = n > n2;
console.log(result);

result = n < n2;
console.log(result);

result = n <= n2;
console.log(result);

// 삼향연산자
// (조건) ?->(앞의 조건에 대해 어떤지 물어봄) 조건의 참 : 조건의 거짓;

( result ) ? k = 'good' : k = 'bad' ;
console.log(k);

// &&, ||
// & : and -> 좌/우를 비교해서 모두 참인지 여부
// | : or -> 좌/우를 비교해서 둘 중 하나라도 참인지 여부 파악

var l;
// ( false & true ) ? l='good' : l='bad';
( false && true ) ? l='good' : l='bad';
console.log( l );
( true || false ) ? l='good' : l='bad';
console.log( l );

// 구현의 속도를 높이기위해, &&는 거짓의 상태가 먼저 오는것을,
// || 참의 상태가 먼저 오는 것을
// 코드가 짧은 것 / 가독성이 좋은 것을 먼저

// '값'이 참이면 ? 참이면 '같아요'라고 알려줘 : 거짓이면 '달라요'라고 알려줘;

// ==, ===


// !=, !== (아니다) -> 참을 거짓으로, 참을 거짓으로 뒤바꾼다. 반전을 준다.
var t = true;
console.log(t);

console.log( !(true && !true) )
console.log('????:', !!0);

(10 !== '20') ? t='맞아요' : t='아니에요';
console.log(t);
