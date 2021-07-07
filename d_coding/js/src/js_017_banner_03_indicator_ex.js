// js_017_banner_03_indicator_ex.js
(function($){
  
  var banner = $('.banner_01');
  var indicator = banner.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var viewArea = banner.find('.view_area');
  var viewUl = viewArea.find('ul');

  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.find('.next');
  var prevBtn = slideBtn.find('.prev');

  var n = 0;

  // 이벤트
  indiLink.on('click', function(e){           
    e.preventDefault();           

    var _thisI = $(this).parent().index();      
    n = _thisI;                                  

    viewUl.stop().animate({marginLeft: (-100*n) + '%'})

    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  });

  nextBtn.on('click', function(e){
    e.preventDefault();
    var _thisI = $(this).parent().index();      
    n = _thisI;

    viewUl.stop().animate({marginLeft:(-50*n) + '%' });

    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  });

  prevBtn.on('click', function(e){
    e.preventDefault();

    var _thisI = $(this).parent().index();      
    n = _thisI;

    viewUl.stop().animate({marginLeft:(100*n) + '%' });

    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  })

})(jQuery);