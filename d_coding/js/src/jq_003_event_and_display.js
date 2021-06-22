// jq_003_event_and_display.js

(function($){
  // jQuery

  // .box
  var box = $('.box');
  var ul = $('ul');
  var li = ul.children('li');

  // addEventListener(e){}
  li.eq(0).on('click', function(e){
    e.preventDefault();
    box.stop().css({'display':'block'});
  });

  li.eq(1).on('click', function(e){
    e.preventDefault();
    box.stop().css({'display':'none'});
  });

  li.eq(2).on('click', function(e){
    e.preventDefault();
    box.stop().show(500);
  });

  li.eq(3).on('click', function(e){
    e.preventDefault();
    box.stop().hide(500);
  });

  li.eq(4).on('click', function(e){
    e.preventDefault();
    box.stop().fadeIn(1000);
  });

  li.eq(5).on('click', function(e){
    e.preventDefault();
    box.stop().fadeOut(1000);
  });

  li.eq(6).on('click', function(e){
    e.preventDefault();
    box.stop().slideDown(500);
  });

  li.eq(7).on('click', function(e){
    e.preventDefault();
    box.stop().slideUp(500);
  });

  li.eq(8).on('click', function(e){
    e.preventDefault();
    box.stop().addClass('act');
  });

  li.eq(9).on('click', function(e){
    e.preventDefault();
    box.stop().removeClass('act');
  });

  li.eq(10).on('click', function(e){
    e.preventDefault();
    var cssState = box.css('display');
    // console.log(cssState);

    if(cssState === 'block'){
      box.css({display:'none'});
    }else{
      box.css({display:'block'});
    }  
  });

  li.eq(11).on('click', function(e){
    e.preventDefault();
    box.stop().toggle(500);
  });

  li.eq(12).on('click', function(e){
    e.preventDefault();
    box.stop().fadeToggle();
  });

  li.eq(13).on('click', function(e){
    e.preventDefault();
    box.stop().slideToggle();
  });

  li.eq(14).on('click', function(e){
    e.preventDefault();
    box.stop().toggleClass('act');
  });

  li.on('click', function(e){
    e.preventDefault();
    var thisI = $(this).index(); 
    console.log( '클릭한 요소는', (thisI+1), '번째 입니다.');
  })

  // $(this) : 이벤트(.on'click')가 생성(li)된 주체 / 이벤트발생의 주체
  // eq() : 순서지정
  // index() : 순서파악
  // $(this)의 이벤트발생의 주체 => 'li'
  // var thisI = $(this).index(); -> thisI 변수가 순서가 몇번째인지(index)

  // on ('이벤트', function(){})
  // 이벤트 : click, dblclick, mouseenter, mouseleave, keydown, keyup, keypress, scroll ...
  // css () : css ({display : 'none' || 'block'})


})(jQuery);