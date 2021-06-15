// js/src/js_006_condition.js

// 삼향연산자

var boxColor = 'black';
var fontColor = 'white';
var borderRadius = 0;

// ---
boxColor = 'lightGray';
// (boxColor === 'black') ? fontColor = 'white' : fontColor = 'red' ;


// 단수 분기
/*
if(조건){
  // 조건이 참일 경우 수행
}else{
  // 조건이 거짓일 경우 수행
}
*/
if(boxColor === 'black'){
  fontColor = 'white';
  borderRadius = '0';
}else{
  fontColor = 'red';
  borderRadius = '10px';
}
console.log( fontColor, borderRadius );

/*
#testBox_01 {
  width: 200px; height: auto;
  color:#151515; font-size: 2rem;
  background-color: #ada;
  }
*/

var tBox1 = document.getElementById('testBox_01');
// var tBox1 = document.querySelector('#testBox_01');

// tBox1.style.width = '250px';
// tBox1.style.height = 'auto';
// tBox1.style.color = '#151515';
// tBox1.style.fontSize = '2rem';
// tBox1.style.backgroundColor = '#ada';

tBox1.style = "width:250px; height:auto; color:#151515; font-size:2rem; background-color: #ada;" 

// console.log(tBox1.style.width);
var tBoxW = tBox1.style.width;
if(tBoxW >= '400px'){
  tBox1.style.backgroundColor = '#ada';
  tBox1.style.color = '#fda';
}else{
  tBox1.style.backgroundColor = '#adf';
  tBox1.style.color = '#f00';
}
// ------------------------------------------

/*
if(조건){
  // 조건 참
}else if(새로운 조건){
  // 새로운 조건 참
}else if(또다른 조건){
  // 또다른 조건 참 
}else {
  // 거짓
}
*/

var dataN = 80;
var result;
if(dataN > 80 ){
  result = '당신의 점수는 A';
}else if(dataN <= 80 && dataN > 70){
  result = '당신의 점수는 B';
}else if(dataN <= 60){
  result = '당신의 점수는 C';
}else{
  result = '당신의 점수는 F';
}
console.log(result);

// ------------------------------------------
// 다수 분기
/*
switch(값){
  case A:
    값이 A이면 수행
  break;
  case B:
    값이 B이면 수행
  break;
  case C:
    값이 C이면 수행
  break;
  default:
    값이 해당되지 않으면 수행
}
*/

// 키보드제어
// switch 조건해당하는 값이 명확해야함.

var val = parseInt(prompt('태어난 월을 입력하세요'));
console.log( val );
var rel;

switch(val){
  case 1:
    rel = '1월-신년과 함께';
    break;
  case 2:
    rel = '2월-추운겨울입니다';
    break;
  case 3:
  case 4:
  case 5:
    rel = '봄-완연한 날씨';
    break;
  case 6:
    rel = '좋은시기';
  break;
  default:
    rel = 'ok';
}
console.log( rel );
