// js_018_banner_04.js

(function($){
  // jQuery
  // 1. indicator 클릭시 배너이동
  // 2. 다음/이전버튼 클릭시 배너이동
  // 3. 배너가 바뀌면 숫자도 변하게
  // 4. ul/li 갯수/위치조정
  // 5. 일정시간이 지나면 자동으로 이동 -> setInterval
  // 6. 마우스 올리면 자동으로 이동하는 기능 일시정지 -> clearInterval
  // 7. 마우스 벗어나면 다시 자동으로 이동
  // 8. indicator 선택된 형태 체크 (addClass -> act)
  // ==================
  // 9. 광고내용갯수에 맞게 indicator 생성
  // 10. 필요에 따라, indicator/button/전체갯수 및 현재갯수 표현여부를 체크
  // 11. 재생 버튼, 일시정지 버튼 또는 표시
  // ==================

  // 변수
  var banner = $('.banner_01');
  var indicator = banner.find('.indicator');
  var indiLi = indicator.find('li');
  var indiLiLink = indiLi.find('a');

  var indiP = indicator.find('p');
  var totalNumber = indiP.find('.total');
  var nowNumber = indiP.find('.now');

  var buttonSelect = banner.find('.button_select')
  var nextBtn = buttonSelect.find('.next');
  var prevBtn = buttonSelect.find('.prev');

  var viewArea = banner.find('.view_area');
  var viewUl = viewArea.find('ul');
  var viewLi = viewUl.find('li');

  var n = 0;
  var permission = true;
  var viewLiLen = viewLi.length;

  // 동작전 형태변경
  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.find('li');
  var newViewLiLen = newViewLi.length;
  viewUl.css({'position':'relative', 'left' : -100+'%', 'width': 100 * newViewLiLen + '%'});
  newViewLi.css({'width':100 / newViewLiLen + '%'});

  // 함수
  var numberCheckFn = function(n){
    totalNumber.text(viewLiLen);
    nowNumber.text(n+1);
  };

  var indiLiClassSetFn = function(n){
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
    numberCheckFn(n);
  };

  // 함수 우선 수행
  numberCheckFn(n);

  // 100. indicator 클릭시 배너 이동

  // 이벤트
  // 101. indicator 클릭
  indiLiLink.on('click', function(e){
    e.preventDefault();
    // 순서파악
    n = $(this).parent().index();
    // 배너이동
    viewUl.animate({marginLeft:-100 * n +'%'});
    // .act적용
    indiLiClassSetFn(n);
  });

  // 다음버튼/이전버튼 클릭시 배너 이동

  nextBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;  // 다음동작을 수행하지 못하게 false로 제어
      n += 1;
      if(n > viewLiLen-1){
        n = 0;
        viewUl.stop().css({marginLeft:100+'%'});  // 화면이 마지막으로 갔을때 다시 처음으로 돌아오게 하기위해 첫번째 앞에 이어지면서 화면이 보이게
      }
      viewUl.stop().animate({marginLeft:-(100*n)+'%'}, function(){ // 다음화면(-100)으로 이동
        indiLiClassSetFn(n);
        permission= true;
      });    
    }
  });

  prevBtn.on('click', function(e){ 
    e.preventDefault();
    if(permission){
      permission = false;  // 이전버튼 클릭시 실행되는 기본기능제어 후, 다음동작을 실행하지 않겠다.
    n -= 1;
    viewUl.stop().animate({marginLeft: -100 * n + '%'}, function(){ // n값에 -(마이너스)를 주어서 이미 뒤로 가게
      if(n < 0){
        n = viewLiLen -1; // 배너화면의 맨마지막으로 이동
        viewUl.stop().css({marginLeft: -100 * n + '%'}); // (-100*-1 = 100)으로 변환을 주어 현재화면(0)에서 이전화면으로 (100)이동
      }
      indiLiClassSetFn(n);
      permission = true;
    });
   }
  });

  // 일정 타임 이동처리
  var timed = 1000;

  var moveSlide;
  var slideGoFn = function(){
    moveSlide = setInterval (function(){
    nextBtn.trigger('click');
   }, timed*2);  // 자동으로 이동하게 하는 setInterval을 
  };             // nextBtn을 클릭하는 대신 자동으로 정해진 시간에 움직이게 함.
  slideGoFn();

   banner.on('mouseenter', function(){
     clearInterval(moveSlide);  // 마우스를 위에 올렸을때, moveSlide가 clearInvertal (기능을 삭제) 하게 한다.
   });
   banner.on('mouseleave', function(){
     slideGoFn(); // 마우스를 위에 올리지 않았을때, 위의 slideGoFn 함수에 의해 자동으로 setInterval 실행되게 한다.
   })

})(jQuery);