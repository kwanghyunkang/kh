// header_tablet.js
(function($){
  // jQuery

// 변수
var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
var gnbList = gnb.find('.gnb_list');
var timed = 500;

// tablet에서는 오른쪽 끝에서 들엉는 형식으로 진행
// 100. gnbBtn을 클릭시 gnbList가 나타나게/사라지게
// 102. css에서 오른쪽끝으로 (바깥으로 이동되어 있도록)

gnbBtn.on('click', function(e){
  e.preventDefault();
  // gnb요소에 act클래스이름의 유무 판단
  var hasAct = gnb.hasClass('act');
  if(hasAct){
    // gnbList.stop().fadeOut(timed/2);
    gnb.removeClass('act'); // gnb .act를 class제거
      gnbList.stop().animate({ right:-100+'%' }, function(){ // animate로 -100%만큼 이동 stop을 걸어줌으로써 연속해서 클릭했을때 반복행위를 멈춰주게 함
      gnbList.hide(); // gnbList를 숨김
    });

  }else{
    gnb.addClass('act');
    gnbList.show(0, function(){
      gnbList.stop().animate({ right:-30+'%' });
    });
  }
});


})(jQuery);