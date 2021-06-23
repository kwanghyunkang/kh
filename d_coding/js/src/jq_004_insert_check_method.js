// js/src/jq_004_insert_check_method.js

(function($){
  // jQuery

  // var conBox = document.getElementById('contentBox');
  // var conBox = document.querySelector('#contentBox');

  var conBox = $('#contentBox');

  // text() : 내부에 글씨변경 / 확인
  var myText = '간단한 내용을 삽입';
  conBox.text(myText);
  
  // html() : 내부에 들어있는 html을 삽입 / 확인
  conBox.html(myText);
  var conP = conBox.children('p');
  conP.text('p요소의 글자를 변경');

  // append(), appendTo(), prepend(), prependTo()
  conP.append('<span>글자를 추가로 삽입</span>');

  // before() / after() : 이전에 요소를 삽입
  conP.before('<h2>코드를 변경하는 형태 파악</h2>');
  conP.after('<p>선택자 뒤에 추가 요소를 삽입</p>');
  
  // wrap() : 감싸는 요소를 삽입
  conBox.wrap("<div class=\"conBox_wrap\"></div>")
  
  // contents() : 내용을 추가 / 처리하는 기능
  var con = conBox.contents();
  console.log( con );
  var conHTML = conBox.html();
  console.log( conHTML );

  // attr() : 속성을 처리하는 방법
  conBox.html('<div class="con_area"></div>');
  var area = conBox.children('.con_area');
  area.html(con);

  area.append('<p></p>');
  var areaInnerP = area.children('p');
  var moreText = '일부러 밖에서 글씨 삽입<a href="#">link</a>';
  areaInnerP.eq(-1).html(moreText);
  
  var linkA = areaInnerP.find('a');
  linkA.attr({
              'href'   : 'http://naver.com',
              'class'  : 'action',
              'target' : '_blank',
              'title'  : 'naver 페이지 이동하기'
            });

  // ================================
  var checkA = areaInnerP.text();
  console.log( checkA );
  var checkB = areaInnerP.html();
  console.log( checkB );



})(jQuery);