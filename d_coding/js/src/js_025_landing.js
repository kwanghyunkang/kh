// js_025_landing.js

(function($){
  //jQuery

  // 1. 스크롤 탐지 (브라우저)
  // 2. 스크롤 이동의 양 체크 ( scrollTop() )
  // 3. 화면의 높이값 계산 ( 브라우저.outerHeight() )
  // 4. li 위에서부터 떨어진 값 파악 ( 선택자.offset().top )
  // 5. 기준이 화면의 하단 이기에 : li 위치값 + 브라우저의 높이값
  // 5-1. 화면의 하단에서 1/3지점위치에서 나타나게 하기위해 수정 ( 브라우저 높이/3 )
  // 6. 스크롤을 이동시 지정한 offset 값 ( setOffset )과 비교하여 이보다 커지면 체크
  // 7. 체크되는 곳에서 li에 act 클래스이름 부여
  // 8. 옵션 : 반대의 경우에는 act빼기
  // 9. li요소 전부 동작

  // 변수
  var win = $(window);
  var part = $('.part');
  var li = part.find('li');


  // 기능수행
  var winH = win.outerHeight(); // window브라우저의 (margin,padding,border)포함 높이값

  var setLiFn = function(scroll){
    // li 각각수행
    var liSelect; // = li.eq(0);
    var liOffset; // = liSelect.offset().top;
    var setOffset; // = liOffset - (winH / 3 * 2); // liOffset = winH - (winH/3);
    var resultN;

    var i=0;  // i가 0일때
    var liLen = li.length;  // li의 길이값
    for(; i < liLen ; i+=1){  // i 가  li의 길이값보다 작을때, ; i가 1씩 증가
      liSelect = li.eq(i);  // li의 i번째
      liOffset = liSelect.offset().top; // li의 i번째가 li 위에서부터 떨어진 값
      setOffset = liOffset - winH / 3 * 2; // li의 i번째가 li 위에서부터 떨어진 값 - 브라우저 높이값 / 3 * 2 [ 3(스크롤을 내릴경우 3등분했을때 중간위치) * 2() ]

      resultN = scroll - setOffset;
      (resultN >= 0) ? liSelect.addClass('act') : liSelect.removeClass('act');
      // 삼항연산자 -> (조건) ? true : false ;

    } // for
  } // setLiFn(scroll);


  // 이벤트
  win.on('scroll', function(){
    var winScroll = win.scrollTop();
    setLiFn(winScroll);
  });


})(jQuery);
