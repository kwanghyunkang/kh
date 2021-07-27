// js_026_parallax_02.js

(function($){
  // jQuery

  // 목적 : 스크롤이 움직일때, 각 이미지 (.par_01 ~ .par_07)의 위치가 변동
  // 1. 스크롤 이벤트. 스크롤이 움직인 값이 얼만큼 이동?
  // 2. 브라우저의 높이값이 얼만큼 되는가? => 내가 움직인 스크롤의 범위가 전체에서


  // 변수 ======
  var win = $(window);
  var parallax = $('.parallax');
  var parList = parallax.children('div');

  // 기능
  var parLen = parList.length; // parallax의 자식 div 요소의 길이
  console.log( parLen );

  // test
  var setParallaxFn = function(move){
    var i=0;
    var moveResult = move/(parLen*2);
    var result;
    for(; i < parLen ; i++){
      result = -moveResult*(parLen-i-1);
      parList.eq(i).css({transform:'translateY(' + result + 'px)'})
      // parList.eq(i).css({bottom:-moveResult*(parLen-i)+'px'});
    }
  }

  // 함수
  var moveImageFn = function(){
    var winScroll = win.scrollTop();
    setParallaxFn( winScroll );
  }

  // ==================================
  // 이벤트
  win.on('scroll', moveImageFn );

})(jQuery);