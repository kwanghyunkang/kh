// js_013_gallery_01.js


(function($){
  // jQuery
  
  // 1. li 클릭시 (사실 내부의 a를 클릭)
  // 2. 내부의 a에 들어있는 data-text 속성값을
  // 3. .big_image p 내부에 전달

var gallery_01 = $('.gallery_01');
var galUl = gallery_01.children('ul');
var galLi = galUl.children('li');

var gal_01_box = $('.gallery_box_01');
var galP = gal_01_box.children('p');

var liConvertText = function(){
  return function(event){
  event.preventDefault(); // a 나 button 은 default 사용해주기

  var thisLink = $(this).children('a');
  var thisData = thisLink.attr('data-text');
  // console.log( thisData );
  galP.text(thisData);
  }
};

galLi.on('click', liConvertText() );


// =========================================

// 1. gallery_02 li 클릭시 (사실 내부의 a를 클릭)
// 2. 내부의 a에 들어있는 data-text 속성값을
// 3. .big_image 내부에 전달


  var gal_02 = $('.gallery_02');
  var gal_02_box = gal_02.find('.big_image');
  var gal_02_p = gal_02_box.find('p');

  var gal_02_list = gal_02.find('li');
  var galUrl = '../img/gallery/big/';

  var gal02_firstText = gal_02_list.eq(0).find('a').attr('data-text');
  gal_02_p.text(gal02_firstText);
    // =====================================================

  gal_02_list.children('a').on('focus click', function(e){
    e.preventDefault();
    // 해당요소의 속성 (data-image) 값을 찾아 배경이미지로 적용
    var select = $(this);
    var selectImg = select.attr('data-image');
    // console.log( selectImg );
    var useImg = galUrl + selectImg;
    gal_02_box.css({'backgroundImage':'url(' + useImg + ')'});

    // 해당요소의 속성 (data-text)값을 p요소에 적용
    var selectText = select.attr('data-text');
    gal_02_p.text(selectText);
  });

  // ======================================================

  // 1. .gallery_03 내부의 li요소를 생성
  // 2. 생성되는 li를 내가 만들고자 하는 갯수만큼
  // 3. 적용할 data 속성을 생성해서 담기 - 차후 : 삭제
  // 4. 나머지 기능은 위와 동일.

  var gallery_03 = $('.gallery_03');
  var gallery_03_Ul = gallery_03.find('ul');
  var thum;
  /*
    var n = 1;
    var set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';

    gallery_03_Ul.append(set_03_Li);

    n = 2;
    set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
    gallery_03_Ul.append(set_03_Li);

    n = 3;
    set_03_Li = '<li><a href="#"><span>이미지 '+ n +'</span></a></li>';
    gallery_03_Ul.append(set_03_Li);
  */

  // var n = 0;
  var set_03_Li = function(n){
    var setText = '<li><a href=""><span>이미지 '+ n +'</span></a></li>';
    return setText;
  };

  // js는 실제 사용되는 html문서를 기준
  var listUrl = '../img/gallery/thumnail/';
  var bigUrl = '../img/gallery/big/';
  var galleryImgList = [
    {
      'thumnail' : 'image_001.jpg',
      'contents' : '001_thumnail_설명',
      'big' : 'image_001.jpg',
      'big_narr' : '001_디테일 설명 작성'
    },
    {
      'thumnail' : 'image_002.jpg',
      'contents' : '002_thumnail_설명',
      'big' : 'image_002.jpg',
      'big_narr' : '002_디테일 설명 작성'
    },
    {
      'thumnail' : 'image_003.jpg',
      'contents' : '003_thumnail_설명',
      'big' : 'image_003.jpg',
      'big_narr' : '003_디테일 설명 작성'
    },
    {
      'thumnail' : 'image_004.jpg',
      'contents' : '004_thumnail_설명',
      'big' : 'image_004.jpg',
      'big_narr' : '004_디테일 설명 작성'
    },
    {
      'thumnail' : 'image_005.jpg',
      'contents' : '005_thumnail_설명',
      'big' : 'image_005.jpg',
      'big_narr' : '005_디테일 설명 작성'
    }
  ];

  // var test = ['a',['b','b-1','b-2',['bbb','34','1'] ], 'c'];
  // var t2 = test[1];
  // // console.log( t2[2] );
  // console.log( test[1][3][2] )


  // 아래 append 적용 후 추가기능을 삽입하기 위한 함수 설정 -> 내용이 많아서!
  var listContentFn = function(){
    thum = listUrl + galleryImgList[i].thumnail;
    galLink = gallery_03_Ul.children('li').eq(i).children('a');
    galLink.css({'backgroundImage':'url(' + thum + ')', color:'#fff'});
    galLink.find('span').text( galleryImgList[i].contents );
  };


  // for(최초;비교;증감){}  
  var galLink;
  var galListLen = galleryImgList.length;
  for( var i = 0 ; i < galListLen ; i++ ){
    gallery_03_Ul.append( set_03_Li( i + 1 ) );
    // thum = listUrl + galleryImgList[i].thumnail;
    // galLink = gallery_03_Ul.children('li').eq(i).children('a');
    // galLink.css({'backgroundImage':'url(' + thum + ')', color:'#fff'});
    // galLink.find('span').text( galleryImgList[i].contents );
    listContentFn();
  }

  var gal_03_big = gallery_03.find('.big_image');
  var gal_03_p = gal_03_big.find('p');

  var setBigInsertFn = function(n){
    gal_03_big.css({
      'backgroundImage':'url(' + bigUrl + galleryImgList[n].big +')',
      'backgroundSize' : 'cover'
    });
      gal_03_p.text(galleryImgList[n].big_narr);
  };

  // big_image에 첫 배경이미지적용
  // gal_03_big.css({'backgroundImage':'url(' + bigUrl + galleryImgList[0].big + ')'});
  

  // big_image p에 첫 내용 적용
  // gal_03_p.text(galleryImgList[0].big_narr);
  setBigInsertFn(0);
  
  var gal03Link = gallery_03_Ul.children('li').children('a');
  gal03Link.on('click', function(e){
    e.preventDefault();
    var setI = $(this).parent().index();
    //console.log(setI);
    setBigInsertFn(setI);
  });


})(jQuery);