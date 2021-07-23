// js_025_mousewheel.js
(function($){
  // jQuery
  // 1. .info의 높이를 브라우저화면의 높이만큼 재설정
  // 2. 실시간(win.on(resize))으로 브라우저크기가 변경되면 같이 높이도 변경 (함수 setWinHFn() )
  // 3. 마우스 휠을 움직였을때. 움직였음을 파악하자 (이벤트 : mousewheel, 범위 : $('html, body') )
  // 4. 일부 브라우저는(firefox)는 mousewheel 이 없다. (firefox는 DOMMouseScroll)
  // 5. 스크롤 처리에 대한 범위를 확장 (마우스 휠, 터치움직임, 트랙/터치패드)
  // 6. 현시점에서는 가로로 긴 모니터들도 많아졌기에 화면마다 변화하는 것을 제작하기에는 다소 진부
  //    권장은 첫화면만(상단) 움직이는 정도로 권장하여, 해당 스크롤위치로 한번에 이동효과

  //  web+webAR/webVR, webApp(PWA) --> web
  // GPS + 자이로스코프 + 지도좌표 + AR

  // =================================
  // 변수
  var win = $(window);
  var viewDoc = $('html, body');
  var info = $('.info');
  var recommend = true;
  var countScroll = 0;
  var winH;
  

  // 기능

  // 함수
  var setWinHFn = function(){
    winH = win.outerHeight();
    info.css({height:winH + 'px'});
  };

  var setScrollFn = function(n){
    viewDoc.animate({scrollTop:n + 'px'}, function(){
      recommend = true;
    });
  };

  // =================================
  setWinHFn();
  setScrollFn(0);


  // 이벤트
  win.on('resize', function(){
    setWinHFn();
  });

  viewDoc.on('mousewheel DOMMouseScroll', function(e){
    var winScrollTop = win.scrollTop();

    
      var evt = e.originalEvent;
    // console.log(e.type);
    // mousewheel : evt.wheelDelta -> -120 | 120
    // mousewheel : evt.detail -> 0
    // DOMMouseScroll : evt.detail -> -3 | 3
    var delta = 0;
    (e.type === 'DOMMouseScroll') ? delta = evt.detail * -40 : delta = evt.wheelDelta;
    // console.log( delta );
    
    if(recommend){
    if(delta < 0 && winScrollTop >= 0 && countScroll <= 0){
      countScroll += 1;
      setScrollFn(countScroll);
    }else if(winScrollTop <= winH && delta > 0 && countScroll > 0){
      countScroll = 0;
      setScrollFn(countScroll);
    }
    // console.log(winH, winScrollTop, countScroll);
   }

  });

})(jQuery);
