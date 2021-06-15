// js/src/js_002_variable.js

// 변수 : 어떠한 값을 저장하기 위한 이름, 대입처리해주는 임시 이름/값

// ES5
// 변수의 이름을 생성/선언
var n;

// 변수 'n'에 값을 담기(대입)
n = 10;

// '='의 표기는 '같다'가 아닌 '대입하다' 의미
// = (대입), == (값만 비교), === (값뿐아니라 타입 그자체도 비교)
// ';'의 표기는 js에서 '하나의 표현이 끝났다.' 의미
//  때로는 ';'을 생략. -> js문서를 한줄로 표현했을때 그 내용이 구분이 간다면, ;을 삭제해도 무방

var 철수사과 = 10;
var 남은철수사과 = 철수사과 - 5;
    document.write('남은철수사과 : ', 남은철수사과);

// 변수명은 문자가 아닌 값에 대한 이름이기에 '' 를 사용하지 않는다.


// var의 이름으로 사용할 수 없는 것 (예약어, ...)
// var, if, switch, for, forEach, do, while, else, in, of, function, object, array, ...)
// name, const, let, 한글, 한자, 숫자, 특수문자 (_ $ 제외) ...

// 결과를 확인하는 방법
// document.write('html 문서 내부에 강제로 삽입'); (거의 안씀)
// alert('메세지창을 이용하여 결과를 보여주는 기능'); (거의 안씀)
console.log('콘솔의 위치에 기록하는 기능');

var num = 10;
console.log( num );
var myN = 100;
console.log( myN );
var numPlus = num + myN;
console.log( numPlus );

var one = 1;
console.log( one );
var one2 = '1';
console.log( one2 );
console.log( one + 1 ); // 숫지 + 숫자 => 숫자
console.log( one2 + 1 ); // 숫자 + 문자 => 나열

var int = parseInt(one2);
console.log( int  + 1);

var width = parseInt('100px');
console.log( width + 200 + 'px' );


// js를 작성하는 곳은 body가 끝나기 전에 작성
// 변수는 어떠한 값을 담아서 쓰일 수 있도록 하는 이름으로 먼저 선언 후 이후에 값을 담아서 처리
// 중간 확인을 위해 console.log() 에 결과,진행 내용을 체크 -> 검증
// 문자는 ' '안에 사용 (" ", ' ') 관계없다.
// 하나의 기능이 끝났을 때에는 ;으로 표기하여 구분을 한다.
// 변수명은 지정된 몇가지는 사용하는 것이 아니다. (주로 카멜케이스 사용하는 편)
// 덧셈기호는 숫자와 숫자를 합하면 덧셈, 문자와 숫자(문자)가 합하면 연결이 된다.
