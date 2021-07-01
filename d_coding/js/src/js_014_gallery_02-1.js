// js_014_gallery_02-1.js

(function($){
  // jQuery

  // 1. 클릭해야하는 이미지 삽입
  // 1-1. 각각의 이미지는? 삽입할 이미지는? 추가 내용은? - 객체로
  var modalData = [
    {
      miniImg:'image_001.jpg',
      miniText:'thumnail_01',
      bigImg:'image_001.jpg',
      bigText:'001 - 상세 설명 첨부'
    },
    {
      miniImg:'image_002.jpg',
      miniText:'thumnail_02',
      bigImg:'image_002.jpg',
      bigText:'002 - 상세 설명 첨부'
    },
    {
      miniImg:'image_003.jpg',
      miniText:'thumnail_03',
      bigImg:'image_003.jpg',
      bigText:'003 - 상세 설명 첨부'
    },
    {
      miniImg:'image_004.jpg',
      miniText:'thumnail_04',
      bigImg:'image_004.jpg',
      bigText:'004 - 상세 설명 첨부'
    },
    {
      miniImg:'image_005.jpg',
      miniText:'thumnail_05',
      bigImg:'image_005.jpg',
      bigText:'005 - 상세 설명 첨부'
    },
    {
      miniImg:'image_001.jpg',
      miniText:'thumnail_01',
      bigImg:'image_001.jpg',
      bigText:'001 - 상세 설명 첨부'
    },
    {
      miniImg:'image_002.jpg',
      miniText:'thumnail_02',
      bigImg:'image_002.jpg',
      bigText:'002 - 상세 설명 첨부'
    },
    {
      miniImg:'image_003.jpg',
      miniText:'thumnail_03',
      bigImg:'image_003.jpg',
      bigText:'003 - 상세 설명 첨부'
    },
    {
      miniImg:'image_004.jpg',
      miniText:'thumnail_04',
      bigImg:'image_004.jpg',
      bigText:'004 - 상세 설명 첨부'
    },
    {
      miniImg:'image_005.jpg',
      miniText:'thumnail_05',
      bigImg:'image_005.jpg',
      bigText:'005 - 상세 설명 첨부'
    },
    {
      miniImg:'image_001.jpg',
      miniText:'thumnail_01',
      bigImg:'image_001.jpg',
      bigText:'001 - 상세 설명 첨부'
    },
    {
      miniImg:'image_002.jpg',
      miniText:'thumnail_02',
      bigImg:'image_002.jpg',
      bigText:'002 - 상세 설명 첨부'
    },
    {
      miniImg:'image_003.jpg',
      miniText:'thumnail_03',
      bigImg:'image_003.jpg',
      bigText:'003 - 상세 설명 첨부'
    },
    {
      miniImg:'image_004.jpg',
      miniText:'thumnail_04',
      bigImg:'image_004.jpg',
      bigText:'004 - 상세 설명 첨부'
    },
    {
      miniImg:'image_005.jpg',
      miniText:'thumnail_05',
      bigImg:'image_005.jpg',
      bigText:'005 - 상세 설명 첨부'
    }
  ];
  
  
  
  // =========================================
  // 6. li요소 생성
  // 7. 다음/이전버튼 html로 생성
  // 8. 클릭시 이동
  // =========================================

  // 변수 선언
  var miniUrl = '../img/gallery/thumnail/';
  var bigUrl = '../img/gallery/big/';

  var modal = $('.modal');
  var modalListArea = modal.children('.modal_list');
  var modalListUl = modalListArea.children('ul');

  var modalView = modal.find('.modal_view');
  var modalContent = modal.find('.modal_content');
  var closeBtn = modalView.find('.close_btn').children('button');
  var backBoard = modalView.find('.back_board');
  
  var i=0;
  var n=0;
  var idx = 0;
  var timed = 500;
  var modalDataLen = modalData.length;
  // ========================================

  // li 생성기능
  var makeLi = '<li><a href="#"></a></li>';

  for(; n<modalDataLen; n+=1 ){
    modalListArea.children('ul').append(makeLi);
  }

  // ========================================
  var modalLi = modalListArea.find('li');

  // li 첫번째의 가로값 파악
  // width() -> 가로값은 파악
  // innerWidth -> padding값 포함 가로값 파악
  // outerWidth -> border값 포함 가로값 파악
  // outerWidth(true) -> margin값 포함 가로값 파악

  var getLiWidth = modalLi.eq(0).width();
  // var getLiwidth = modalLi.eq(0).css('width');
  // console.log( getLiWidth );
  var setModalUlWidth = (getLiWidth*modalDataLen) + 'px';
  modalListUl.css({width: setModalUlWidth });
  modalListArea.css({overflow:'hidden'});

  // 8-1
  var slideBtn = $('.list_slide_btn');
  var nextBtn = slideBtn.children('.next_btn');
  var prevBtn = slideBtn.children('.prev_btn'); 
  var mv = 0;

  nextBtn.on('click', function(e){
    e.preventDefault();
    // mv -= 1;
    (mv <= -(modalDataLen-7)) ? mv = -modalDataLen + 7 : mv -= 1;
    modalListUl.stop().animate({marginLeft: ( getLiWidth * mv ) + 'px'});
    // console.log( getLiWidth * -1 )
  });


  // ==================================================

  var miniImgInsertFn = function(i){
    var modalLink, imgData;
    modalLink = modalLi.eq(i).children('a');
    imgData = miniUrl + modalData[i].miniUrl; 
    modalLink.css({backgroundImage:'url(' + imgData + ')' });
    modalLink.text(modalData[i].miniText);
  };

  for(; i<modalDataLen; i+=1){ miniImgInsertFn(i); }
  // ===================================================

  // 2. 클릭시 .modal_view 나타나게 함
  modalLi.children('a').on('click', function(e){
    e.preventDefault(); // 기본적인 기능을 없애라
    // 선택한 요소의 부모요소의 순번 (index)
    var _thisI = $(this).parent().index(); // (순서를 주는것,지정) : eq / 알려주는 것 : index (순번파악)
    idx = _thisI;
    // var bigImgArea = 큰이미지 경로 + modalData[클릭한 순번의].bigImg;

  // 3. .modal_view 내부의 .modal_content 에 이미지 나타나게 함 / 
    var bigImgArea = bigUrl + modalData[_thisI].bigImg;
    modalContent.css({backgroundImage:'url(' + bigImgArea + ')'});
  // 5. 리스트 클릭시 닫기버튼에 자동 포커스처리 및 닫기 클릭시 이전요소의 순번에 포커스
    modalView.stop().fadeIn(100, function(){
      closeBtn.focus();
    });
  });

  var modalViewHideFn = function(){
    return function(e){
    e.preventDefault();
    modalView.stop().fadeOut(timed, function(){
      modalLi.eq(idx).children('a').focus();
      });
    }
  };
  
  // jQuery에서는 animation기법이 있는 메소드는 모두 콜백기능 가능
  // 4. .modal_view 내부의 닫기버튼 클릭시 .modal_view 사라지게 함
  closeBtn.on('click', modalViewHideFn() );
  // 4-1. .modal_view 뒤에 있는 .back_board 클릭시 .modal_view 사라지게 함 
  backBoard.on('click', modalViewHideFn() );

  // forEach 와 유사하지만 다른 jQuery each
  // [배열].forEach(function(배열의각 값, 순서){기능수행})
  // $.each([배열], function(순서, 배열의각 값){기능수행})

  // $.each([closeBtn, backBoard], function(i, data){
  //  data.on('click', modalViewHideFn(););
  // });

})(jQuery);
