// js_014_gallery_02.js

(function($){
  // jQuery

  var galleryData = [
    {
      miniImg:'image_001.jpg',
      miniText:'thumnail_01',
      bigImg:'',
      bigText:'001 - 상세 설명 첨부'
    },
    {
      miniImg:'image_002.jpg',
      miniText:'thumnail_02',
      bigImg:'',
      bigText:'002 - 상세 설명 첨부'
    },
    {
      miniImg:'image_003.jpg',
      miniText:'thumnail_03',
      bigImg:'',
      bigText:'003 - 상세 설명 첨부'
    },
    {
      miniImg:'image_004.jpg',
      miniText:'thumnail_04',
      bigImg:'',
      bigText:'004 - 상세 설명 첨부'
    },
    {
      miniImg:'image_005.jpg',
      miniText:'thumnail_05',
      bigImg:'',
      bigText:'005 - 상세 설명 첨부'
    }
  ];
  
  // 1. 반복문을 이용하여 big_image에 li를 생성
  // 2. 이미지를 담는 객체를 생성하여 담기
  // 3. 큰 영역에 첫번째 이미지를 담기
  // ==============================================
  // 1. 작은 이미지를 마우스 올릴경우 다음과 같은 기능을 수행
  // 2. 작은 이미지에 들어있는 이미지와 같은형태의 큰이미지의 주소를 찾아
        // bigUrl + galleryData[i].bigImg
  // 3. 큰 영역에 배경이미지로 배치
  // 4. 이때 작은이미지가 어떤 것이 선택되었는지 주목성이 있도록 처리
  // 5. 주목성처리 : class="act" 삽입
  // // 추가기능1 : 작은이미지를 선택할때, 다른영역에 있는 형태는 act해제
  // // 추가기능2 : 마우스가 아닌 키보드 focus 처리
  // // 추가기능3 : 클릭시 처리되는 부분도 일부 해결
  // ==============================================
  // 이외에 첨부하면 좋을 기능
  // big_image 영역에 이미지가 바뀌면 깜빡이는 현상을 조정
  // 1. bigImage영역 내부에 2개의 영역 생성 앞/뒤로 배치
  // 2. 앞에 있는 것은 현재 보이는 것, 뒤에 존재하는 건 기본 display:none;
  // 3. 작은 이미지에 마우스 처리하면, bigImage뒤에 내용을 삽입하고, 동시에 display:block
  // 4. 앞에있는 요소를 사라지게 (방법은 자유)
  // 5. 뒤에 존재하는 요소를 앞으로 오게 처리(z-index를 이용, 앞의 요소를 뜯어서 뒤로 이동)
  // 6. 뒤로 이동한 요소는 내부를 비우기

  // 응용방법 : 배너광고형태 중 fade형식으로 되는 형태를 이해 할 수 있다.
  // ==============================================

  var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>'
  var gallery = $('.gallery')
  var thumnail = gallery.find('.thumnail');
  var big_image = gallery.find('.big_image');
  var bigContent = big_image.children('.big_content');
  var thumUrl = '../img/gallery/thumnail/';
  var bigUrl = '../img/gallery/big/';
  var thumnailLi, listSource, listText;
  
  
  // for (최초;조건;증감){}
  var i=0;
  
  // big_image.css({backgroundImage:'url(' + bigUrl + galleryData[i].bigImg + ')'});

  var baseLiSetFn = function(i){
    // thumnail내부에 makeLi에 채우기(append: 내부에 뒤에 채우기)
    thumnail.append(makeLi);
    thumnailLi = thumnail.children('li').eq(i);
    listSource = 'url(' + thumUrl + galleryData[i].miniImg + ')';
    listText = galleryData[i].miniText;
    
    thumnailLi.children('a').css({backgroundImage:listSource});
    thumnailLi.find('span').text(listText);
  };
  
  var thumLength = galleryData.length;
  for( ; i < thumLength ; i += 1 ){
    baseLiSetFn(i);
  }
  // ==============================================================


  // 중복 기능을 함수로 제작
  var setGallerySystemFn = function ( idx ){
    var bigImgSet = bigUrl + galleryData[ idx ].bigImg;

    // 큰이미지 위치 수정
    // bigContent.eq(0).css({backgroundImage:'url(' + bigImgSet +')'});

    bigContent = big_image.children('.big_content');
    var beforeEl = bigContent.eq(0)  
    var afterEl = bigContent.eq(1)    

      afterEl.css({backgroundImage:'url(' + bigImgSet + ')'});
      afterEl.stop().show();

      setTimeout(function(){
        beforeEl.stop().fadeOut(200,function(){
          beforeEl.removeClass('act');
          afterEl.addClass('act');
          // 1. append는 내부의 뒤에 생성의 기능을 가짐.
          // 2. 기존에 있는 요소라면 뜯어서 옮기는 기능을 가짐.
          big_image.append( $(this) ); // big_img 내부에 $(this)를 담겠다.
          // $(this).appendTo( big_image ); // $(this)를 big_img 내부에 담겠다.
        });
      },10);

    thumnailLi.eq( idx ).siblings('li').removeClass('act');
    thumnailLi.eq( idx ).addClass('act');
  }; // setGallerySystemFn();
  
  // =============================================
  // 전체 thumnail 내부의 li를 재선정
  thumnailLi = thumnail.children('li');

  setGallerySystemFn(0);

  thumnailLi.on('mouseenter', function(e){
    var _thisI = $(this).index();
    setGallerySystemFn(_thisI);
  });

  thumnailLi.find('a').on('focus click', function(e){
    e.preventDefault();
    var _thisI = $(this).parent().index();
    setGallerySystemFn(_thisI);
  });

  // ===============================================

for(var n=0; n<5; n++){
  thumnailLi.eq(n).css({borderRadius:'30px', overflow:'hidden'});
}
  // 1. 순서 지정
  // 2. 기능 지정

  // 1. js 에서는 순서지정이 배열형식과 같다,
  // var li - document.querySelectorAll('li');
  // li[0]

  // 2. 자동으로 각각 처리되는 것이 없으므로, for문을 이용하여 하나하나 처리되게 해야한다.
  // for(var i=0, i<10; i++) {  li[i].style.color="#000";  }
  // for(var n=0, n<10; i++) {  li[n].on('click', function(){  });  }

  // ============================================================================

  // 1. jQuery에서는 메서드로 별도로 구성되어있어 eq(n)
  // var li = $('li');
  // li.eq(0)

  // 2. 선택자의 경우에는 요소를 선택함과 동시에 반복문을 처리하게 만들 수 있다. - for문을 사용할 필요가 없다.
  // li.css({color:'#345'});
  // li.on('click', function(){});
// ==============================================================================



})(jQuery);