// js/src/layout_011_jq_accordion_menu.js

(function($){
  // jQuery

  // dt 클릭시 dd를 나타나거나 사라지게 만들기

  // dt 클릭 -> dt 바로 뒤에 있는 dd 나타나게 하기
  // 다른 dt 클릭 -> 바로 뒤 dd 나타나게 , 다른 dd는 사라지게 만들기
  // dt 클릭 시 이미 dd가 나타나 있다면 -> 사라지게 만들기

  // 변수 지정
  var accordion = $('.accordion');
  var accDl = accordion.find('dl');
  var accDt = accDl.children('dt');
  var accDd = accDl.children('dd');

  // 기능구현 1
  /*
  accDt.on('click', function(){
    var thisI = $(this);
    var viewDd = thisI.next(accDd);
    var viewDdCheck = viewDd.css('display'); // block, none

    viewDd.siblings('dd').slideUp();
    // if(viewDdCheck === 'none' ){ viewDd.slideDown(); }else{ viewDd.slideUp(); }
    // (viewDdCheck === 'none' ) ? viewDd.slideDown() : viewDd.slideUp();
    viewDd.slideToggle();
  });
  */

  // 기능구현 2
  var addBtn = accDt.children('button');
  addBtn.on('click', function(e){
    e.preventDefault();
    var thisI = $(this).parent();
    var viewDd = thisI.next(accDd);
    var viewDdCheck = viewDd.css('display') === 'none'; // true || false
    // true 일 때 viewDdCheck 를 변수선언 -> display가 none 일때
    viewDd.siblings('dd').stop().slideUp();
    thisI.siblings('dt').removeClass('act');
    
    // viewDd.stop().slideToggle();
    if(viewDdCheck){
      viewDd.slideDown();
      thisI.addClass('act');
    }else {
      viewDd.slideUp();
      thisI.removeClass('act');
    }
    
  });


})(jQuery);
