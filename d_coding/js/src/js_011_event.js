// js/src/js_011_event.js

var evtUl = document.getElementsByClassName('event_list')[0];
var evtLi = evtUl.getElementsByTagName('li');

// 선택자.addEventListener('이벤트종류', 수행할기능);
// a -> b a가 수행해야 b가 수행하도록 호출 (콜백함수)
// ex/앞의 a함수 : .addEventListener('click')를 실행하면, 뒤에 function() 함수가
// 해당 내용을 수행하도록 한다. : .style.backgroundColor='#f0a';

// li : 첫번째 '1:클릭 시' '2:배경색상을 변경'
evtLi[0].addEventListener('click', function(){
  evtLi[0].style.backgroundColor = '#f0a';
  var hasClassCk = evtUl.getElementsByClassName('act').length;
  if(hasClassCk > 0){
    evtLi[0].classList.remove('act');
  }else {
    evtLi[0].classList.add('act');
  }
});

evtLi[1].addEventListener('mouseenter', function(){
  evtLi[1].style.backgroundColor = '#a07';
});
evtLi[1].addEventListener('mouseleave', function(){
  // evtLi[1].style.backgroundColor = 'transparent'; / 투명화 처리
  evtLi[1].removeAttribute('style'); // 아예 style 삭제
});

// focus/blur = a,button,input,textarea,select ... form
// '1:focus가 처리되었을 때', '2:글씨를 굵게 처리'
// 이벤트가 js에서 수행되기전에 선행되는 이벤트들(a, button, ...)은
// 필요 시 동작하지 못하도록 막아야한다. : preventDefault()

var liAnker = evtLi[2].getElementsByTagName('a')[0];
var liAnkerStyle = liAnker.style;

liAnker.addEventListener('click', function(event){
  event.preventDefault();
})
liAnker.addEventListener('focus', function(){
  // console.log(event);
  console.log('focus!!!!!');
  // event.preventDefault();
  liAnkerStyle.fontWeight = 700;
  liAnkerStyle.color = '#fff';
});
liAnker.addEventListener('blur', function(){
  // console.log(event);
  console.log('this is blur!!!!!!');
  // event.preventDefault();
  liAnkerStyle.fontWeight = 'inherit';
  liAnkerStyle.color = 'inherit';
});

// 마우스가 움직일때 : mousemove
var mv = document.getElementsByClassName('mv')[0];

evtLi[3].addEventListener('mousemove', function(event){
  // console.log( event.clientX, event.clientY );
  mv.style.top = (-event.offsetY / 2) + 'px';
  mv.style.left = (-event.offsetX / 2) + 'px';
});
// mousemove

// focus되는 형태를 파악
// 키보드처리 시 발생되는 무언가도 체크
// var inputBox = evtLi[4].getElementById('inputBox');
var inputBox = document.getElementById('inputBox');

inputBox.addEventListener('focus', function(){
  console.log('키보드 입력을 해볼까요?');
});

inputBox.addEventListener('keyup', function(e){
  // console.log( parseInt ( e.key ) <= 9 );
  // console.log(  isNaN( parseInt ( e.key ) ) );

  // value 값 가져오기
  var val = inputBox.value;
  // value 값 - 개수파악해서 각각의 글자를 숫자인지 체크
  var valLen = val.length;
  var i = 0;
  for(; i < valLen ; i += 1){
    isNumber = isNaN ( parseInt (val[i]));
    if(isNumber) {
      console.error('숫자만 적으세요!');
      break;
    }else {
      console.log('잘 적고 있군요!');
    }
  }

});

// var val = inputBox.value;
// var typeCheck = parseInt(val);
// if(typeCheck === NaN) {
//   console.log('숫자만 입력하세요.');
// }else {
//   console.log(typeCheck);
// }

// increment scelection
// simple alignment