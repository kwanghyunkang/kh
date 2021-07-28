// js_010_plugin.js
(function($){
  // jQuery

  // .one 내부에 있는 버튼을 클릭시 p요소의 글씨색상을 바꾼다

  var one = $('.one');
  var btn = one.find('button');
  btn.on('click', function(e){
    e.preventDefault();
    one.find('p').css({
      color:'#f06',
      textShadow:'0.1rem 0.1rem 0 #333'
    });
  });


})(jQuery);