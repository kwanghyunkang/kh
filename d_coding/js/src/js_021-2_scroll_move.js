//js_021-2_scroll_move.js
(function($){
  // jQuery
  // 1. .top_move 버튼 클릭시 상단으로 이동
  // 2. 기존의 임시링크는 x
  // 3. #navBox내부의 a요소를 클릭시 해당 내용의 위치로 스크롤
  // 4. #headBox의 높이값 만큼 덜 움직이게

  // 변수
  // var win = $(window);
  var doc = $('html,body');
  var headBox = $('#headBox');
  var navBox = $('#navBox');
  var navLink = navBox.find('a');

  var topMove = $('.top_move');

  var wrapOffset = $('#wrap').offset().top;
  // headBox높이값 파악
  var headH = headBox.outerHeight(); //headBox에서 높이값

  // 함수
  // 필요한 스크롤 위치 이동에 대한 함수
  var scrollMoveFn = function(it){ // it 이란 이름의 함수 의 선언명을 scrollMoveFn로 선언
    var linkTarget = it.attr('href'); // 
    var target = $(linkTarget);
    var targetOffset = target.offset().top; // Box요소에서 떨어진 만큼
    var move;
    (targetOffset === wrapOffset) ? move = wrapOffset : move = targetOffset - headH; 
    // 삼항연산자 조건 -> ( 조건 ) ? move = 참일때 : move = 거짓일때 ;
    
    doc.animate({scrollTop: move + 'px'});
  };


  // 이벤트
  topMove.find('a').on('click', function(e){ // topMove안의 a태그를 클릭했을 때 함수 on
    e.preventDefault();
    // win.scrollTop(0);
    var _this = $(this);  // sideBox 에서 상단이동 클릭 시 수행
    scrollMoveFn(_this); // this
  });

  navLink.on('click', function(e){ // animate 기능
    e.preventDefault();
    var _this = $(this);
    scrollMoveFn(_this);
  });


})(jQuery);