// js_017_banner_03_indicator.js
(function($){
  
  // 1. 인디케이터 클릭시 해당하는 광고내용이 움직이게
  // 101. 인디케이터를 어느것을 클릭했는지?
  // 102. 클릭한 인디케이터의 위치에 따른 광고의 위치?
  // 103. 선택한 순서에 맞는 인티케이터에 act를 담기

  var banner = $('.banner_01');
  var indicator = banner.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');

  var viewArea = banner.find('.view_area');
  var viewUl = viewArea.find('ul');

  var n = 0;

  // 이벤트
  indiLink.on('click', function(e){                     // 주소에 해당하는 'a'태그 = indiLink를 클릭 시
    e.preventDefault();                                 // 기본적인 이벤트의 기능을 제어
    // 주체의 부모인 li의 순번
    var _thisI = $(this).parent().index();              // a 태그는 순서를 가지고 있지 않고, li는 순서를 가진다. 그렇기에 $(this)=a, 의 부모요소(parent())인 li가 몇번째에 위치해 있는가(index)
    n = _thisI;                                         // 위에 선언한 변수를 n 으로 설정하여, 위 내용을 indiLink 함수이외에는 모르기때문에, 밖에다 n에대한 값을 지정해서 인식하게 함
    // 광고이동
    viewUl.stop().animate({marginLeft: (-100*n) + '%'}) // 위의 결과로 viewUl이 현재 배너 화면이 animate로 왼쪽으로( marginLeft : -100% ) 이동해 다음화면이 나오도록 함.

    // .act 처리
    // $(this).parent().siblings().removeClass('act');
    // $(this).parent().addClass('act');

    indiLi.eq(n).addClass('act');                       // act class가 실행되도록 한다
    indiLi.eq(n).siblings().removeClass('act');         // 첫째 선택된거 외에 나머지 형제들을 제거
  });

})(jQuery);