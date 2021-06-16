// js/src/js_009_loop_02.js

// for (중복으로 처리되는 반복문)
var i = 0;
for( ; i < 10 ; i += 1 ){
  console.log( 'i : ', i );
  if(i === 5){
    console.log('find');
    break;
  }
}

i = 0;
for(; i < 10 ; i += 1 ) {
  console.log('i-', i);

  var j = 0;
for( ; j < i ; j += 1 ) {
  console.log( 'j:', j);
  } 
}

// 구구단
var a = 1;
for(; a < 10 ; a += 1 ){
  console.log(a + '단');

  b = 1;
  for(; b < 10 ; b += 1 ){
    rel = a + ' x ' + b + ' = ' + (a*b);
    console.log( rel );
  }
}

// for-in : for(임의변수 in 객체이름) {} (객체 반복)

/*
var i = 0;
for(; i < 5 ; i += 1){
  console.log( fruits[i] );
}
*/

// 배열을 for-in 문에 사용하는 것은 성능에 매우 영향을 미치므로 사용x
// for ( i in fruits ) { console.log( fruits[i] );}
// for-in은 배열용이 아니라 {객체}용

var coffee = {
  sweet : '마키아또',
  base : '에스프레소',
  pop : '아메리카노',
  soft : '카페라떼'
};
coffee.etc = '믹스커피';
// console.log( coffee );
var i;
for (i in coffee) {
  console.log( coffee[i] );
}
console.log( i );
// for in test
var testList = document.getElementsByClassName('test_list')[0];
testList.style.padding = '10px',
testList.style.backgroundColor = '#dfdfdf';

var makeList = function(className, content) {
var makeLi = document.createElement('li');
makeLi.append(content);
makeLi.setAttribute('class',className);
testList.appendChild(makeLi);
};

var i, j, k;
for(i in coffee) {
  j = coffee[i];
  k = i;
  makeList(k, j);
}


// forEach : 각각의 (배열 반복)
// 배열.forEach( function(배열의 각 값, 각 값의 순서){ } );
var fruits = [
  '바나나', '포도', '복숭아', '딸기', '수박','키위'
];

var t = 0;
var fLen = fruits.length;
console.log( fLen );
for(; t < fLen ; t += 1){
  console.log( fruits[t] );
}

fruits.forEach(
  function ( data, index ){
  console.log( ( index + 1 ) , data );
  } 
);


// DOM - (document object model) - 선택자
// id : document.getElementById('아이디 이름');
// class : document.getElementsByclassName('클래스 이름')[순번];
// tag : document.getElementsByTagName('태그 이름')[순번];
// attribute : document.getAttribute('속성명','속성값');
// allInOne : document.querySelector('css형태의 선택자');
// MultiAllInOne : document.querySelectorAll('css형태의 선택자')[순번];

// makeElemnet : document.createElement('요소이름');
// makeAttribute : 선택자.setAttribute('속성명', '값');
// insertContent-text 1(내부요소 삭제 후 삽입) : 선택자.innerText = '내용'; 
// insertContent-text 2(내부요소의 뒤에 추가) : 선택자.append(내용);
// insertContent-text 3(내부요소 삭제 후 삽입) : 선택자.innerText = '코드';
// insertContent-text 4(내부요소의 뒤에 추가) : 선택자.appendChild('코드');