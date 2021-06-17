// js/src/js_dom_test_01.js

// var productArea = document.getElementById('.product_area');
// .product_area .product {}
var productArea = document.getElementsByClassName('product_area')[0];
var product = productArea.getElementsByClassName('product')[0];

// 1차 목표 : li요소를 생성하여, product내부에 삽입 (여러개) 추가 가능요소 처리
// 생성 - createElement()
// 삽입 - appendChild()

// 2차목표 : 각 요소내부에 들어갈 링크주소, 이미지주소, 내용요소삽입
// 통으로 넣을것인지, 통으로 짜여진 데이터를 분류해서 다시 배치

// var listData = [
//   'http://naver.com',
//   '../img/undraw/undraw_city_driver_re_0x5e.png',
//   '카드에 들어갈 이미지 설명1',
//   '카드 이미지'
// ];


// =======================================================================
// sample data 형식
var dataCheck = {
  link      : 'http://naver.com',
  imgSrc    : '../img/undraw/undraw_Coding_re_iv62.png',
  imgNarr   : '카드에 들어갈 이미지 설명 _001',
  cardTitle : '카드 제목 _001'
};
// -----------------------------------------

// 틀 제작
// makeLiFn : 함수로 카드를 반복으로 생성하기 위해 해당하는 내용을 담는 틀 제작
// 내용을 담을 내용들이 여러개로 복합적으로 담기기 때문에 listData로 매개변수 제작
// dataCheck 변수는 차후에 makeLiFn으로 호출하였을때, listData로서 인수/인자로 변경
// 차후 dataCheck 변수 대신 다른 내용이 들어갈 수 있도록 설정 -> dataCheck는 임시로 만든 형식

var makeLiFn = function(listData) {
  var makeLi = document.createElement('li'); // 'li'->김

  var insertCode = '<a href="#"><div class="img_set"><span class="blind"></span></div><p></p></a>';

  makeLi.innerHTML = insertCode;
  // li내부에 코드로 인식되는 시점에서 내용을 추가
  // ----------------------------------------
  var a        = makeLi.getElementsByTagName('a')[0];
  var imgSet   = a.getElementsByClassName('img_set')[0];
  var imgBlind = imgSet.getElementsByTagName('span')[0];
  var p        = a.getElementsByTagName('p')[0];

  // ----------------------------------------
    a.setAttribute('href', listData.link);
    imgSet.style.backgroundImage = 'url(' + listData.imgSrc + ')';
    imgBlind.innerText = listData.imgNarr ;
    p.innerText = listData.cardTitle ;

  // --------------------------------------- //  ↑ 김밥 속 재료들
  product.appendChild(makeLi); // product -> 김밥을 담는 통 / makeLi -> 완성된 김밥
} // makeLiFn end =========================================================
  // ---------------------------------------
  // data 형식 제작

  var imgUrl = '../img/undraw/';

  var cardDataAll = [
    {
      link      : 'http://naver.com',
      imgSrc    : 'undraw_Coding_re_iv62.png',
      imgNarr   : '카드에 들어갈 이미지 설명 _001',
      cardTitle : '카드 제목 _001'
    },
    {
      link      : 'http://daum.net',
      imgSrc    : 'undraw_Gift_re_qr17.png',
      imgNarr   : '카드에 들어갈 이미지 설명 _002',
      cardTitle : '카드 제목 _002'
    },
    {
      link      : 'http://naver.com',
      imgSrc    : 'undraw_Group_selfie_re_h8gb.png',
      imgNarr   : '카드에 들어갈 이미지 설명 _003',
      cardTitle : '카드 제목 _003'
    },
    {
      link      : 'http://daum.net',
      imgSrc    : 'undraw_Playful_cat_re_bxiu.png',
      imgNarr   : '카드에 들어갈 이미지 설명 _004',
      cardTitle : '카드 제목 _004'
    }
  ];

  // console.log( imgUrl + cardDataAll[1].imgSrc );

  // 생성자함수 제작 ===========================================
  // 실제로 사용하기 위해 위 복합으로 만들어진 'data를 개별로 분리'해서 쓸 수 있게 / data 하나 당 필요한 부분만 쓸 수 있게
  // 불필요한 data는 불러오지 않게 처리
  
  function MakeCard(url, data){
    this.link = data.link;
    this.imgSrc = url + data.imgSrc;
    this.imgNarr = data.imgNarr;
    this.cardTitle = data.cardTitle;
  } // this -> 정해진 자리에 각각 처리하는 

  // var setCard = new MakeCard( imgUrl, cardDataAll[0] );
  // console.log( setCard.imgSrc );

  // ---------------------------------------
  // 최종 동작하는 부분 ========================================
  var i = 0;
  var setCard;
  var cardLen = cardDataAll.length;

    for( ; i < cardLen ; i += 1){
      setCard = new MakeCard( imgUrl, cardDataAll[i] );
      makeLiFn(setCard);
    } // length -> 개수처리, cardDataAll 에 있는 개수 (개수가 늘어나면 늘어나는데로 자동으로 처리) 
