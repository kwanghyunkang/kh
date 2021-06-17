// js/src/js_008_loop_01.js

// 반복문 최초의값, 조건비교, 증감(연산)

// 1.while(조건){수행} - 실무x
// 시작/끝
var i=0;
while(i<10){

  console.log(i);
  i++; // i += 1;
}
// 반복문 - 시작 / 조건비교 / 증.감

// 2.do{}while()
var j = 0;
do {
  console.log('j :', j );
  j++;
} while (j < 5);
console.log( j );

// 3.for(최초의값; 조건; 처리연산)){수행}
for(var l = 0 ; l < 7 ; l += 1){
  console.log('l :', l);
}
console.log( l );

var p = 0;
for( ; p < 5 ; ){
  console.log('p :', p);
  p += 1;
}
console.log( p );
// -----------------------
h = 0;
for (; h < 20 ; h++ ) {
  console.log('h :', h );
}


var yearSelect = document.getElementById('yearSelect');
yearSelect.style.width = '300px';

var optionElement = '<option>???</option>';
// yearSelect.innerHTML = optionElement;

yearSelect.append(optionElement);
yearSelect.append(optionElement);
yearSelect.append(optionElement);
yearSelect.append(optionElement);
yearSelect.append(optionElement);

// js에서 요소를 삽입할 경우에는
// 1. 해당요소를 생성 - document.createElement()
// 2. 생성요소에 내용을 넣고 - append()
// 3. 담긴 내용 (요소+내용)을 선택자내부 앞/뒤에 채워넣기. - appendChild()

/*
var optionElement = document.createElement('option');
optionElement.setAttribute('value', '2021');
optionElement.append('2021');
yearSelect.appendChild(optionElement);
*/

/* 1차
var y = 2021;
var optionElement;

for(; y > 1900 ; y -= 1 ) {
  optionElement = document.createElement('option');
  optionElement.setAttribute('value', y );
  optionElement.append( y + '년');
  yearSelect.appendChild(optionElement);
}
*/

var yearSet = function(y){
  optionElement = document.createElement('option');
  optionElement.setAttribute('value', y );
  optionElement.append( y + '년');
  yearSelect.appendChild(optionElement);
}

/* 2차
var y = 2021;
var y2 = y - 150;
for( ; y > y2 ; y-- ) {
  yearSet(y);
}
*/

// 3차
var date = new Date();
var nowYear = date.getFullYear();
var maxYear = nowYear - 150;
var setYear = nowYear;
for(;setYear > maxYear; setYear--){
  yearSet(setYear);
}
