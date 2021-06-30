// js_013_gallery_01_ex.js

(function($){

  var gal_01 = $('.box_01');
  var gal_01_box = $('.big_image');
  var gal_01_p = gal_01_box.find('p');

  var gal_01_list = gal_01.find('li');
  var galUrl = '../img/gallery/big/';

  var gal01_firstText = gal_01_list.eq(0).find('a').attr('data-text');
  gal_01_p.text(gal01_firstText);
    // =====================================================

  gal_01_list.children('a').on('hover', function(e){
    e.preventDefault();
    var select = $(this);
    var selectImg = select.attr('data-image');
    var useImg = galUrl + selectImg;
    gal_01_box.css({'backgroundImage':'url(' + useImg + ')'});
    var selectText = select.attr('data-text');
    gal_01_p.text(selectText);
  });

  

})(jQuery);