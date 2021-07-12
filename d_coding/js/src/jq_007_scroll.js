(function($){
  // jQuery

  // 1. 스크롤시 이동되는가 확인
  // 2. 스크롤 값 고정

// 변수
  var part = $('.part');
  var p_01 = $('.position_01');
  var p_02 = $('.position_02');
  var p_03 = $('.position_03');

  
  // 스크롤 위치값 확인
  var scrollPositionFn = function(){
    var st = $(window).scrollTop(); // scrollTop : 스크롤 바의 위치
    p_01.text( st );
  };

  // 떨어진 위치값 파악 / offset : 지정한 박스가 위에서부터 (어느기준으로부터) 얼만큼 떨어져 있느냐
  var offsetTopFn = function(){
    var offTop = part.offset().top;
    p_02.text( offTop );
  };
  offsetTopFn();

  // #wrap 위치값 파악
  var wrapTopFn = function(){
    var offTop = wrap.offset().top;
    p_03.text( offTop );
  };
  wrapTopFn();
  
  $(window).on('scroll', function(){ // 스크롤이 떨어졌을때 발생하는 이벤트
    scrollPositionFn();
    offsetTopFn();
    wrapTopFn();
  });

})(jQuery);
