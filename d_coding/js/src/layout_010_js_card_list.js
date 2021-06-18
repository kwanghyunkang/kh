// js/src/layout_010_js_card_list.js

  var product = document.getElementsByClassName('product')[0];

  var dataCheck = {
    link : 'http://naver.com',
    imgSrc : '../img/undraw/undraw_01.png',
    imgNarr : '상품이미지 이름_01',
    cardTitle : '카드 제목_001'
  }

var makeLiFn = function(listData) {
  var makeLi = document.createElement('li');

  var insertCode =
    '<div class="img_set"><span class="blind">상품이미지이름_01</span>\
    </div><div class="other none"><dl><dt>상품종류_01</dt>\
    <dd>상품이름_01</dd>\
    <dd><button type="button"><span class="image">상품상세보기</span></button></dd>\
        <dd><a href="#"><span>상세내용</span></a></dd>\
      </dl>\
    </div>\
    <div class="line_focus"></div>';

  makeLi.innerHTML = insertCode;

  var a = makeLi.getElementsByTagName('a')[0];
  var span = makeLi.getElementsByClassName('img_set')[0];
  var dt = makeLi.getElementsByTagName('dt')[0];
  // var span = makeLi.getElementsByClassname('span')[0];
  // ---------------------------
  a.setAttribute('href', listData.link);
  span.style.backgroundImage = 'url(' + listData.imgSrc + ')';
  dt.innerText = listData.imgNarr ;
  // span.innerText = listData.imgSrc ;

  product.appendChild(makeLi);
};

  var imgUrl = '../img/undraw/';

  var cardDataAll = [
    {
      link : 'http://naver.com',
      imgSrc : 'undraw_01.png',
      imgNarr : '상품이미지 이름_01',
      cardTitle : '카드 제목_001'
    },
    {
      link : 'http://naver.com',
      imgSrc : 'undraw_02.png',
      imgNarr : '상품이미지 이름_02',
      cardTitle : '카드 제목_002'
    },
    {
      link : 'http://naver.com',
      imgSrc : 'undraw_03.png',
      imgNarr : '상품이미지 이름_03',
      cardTitle : '카드 제목_003'
    }
  ];

  function MakeCard(url, data){
    this.link = data.link;
    this.imgSrc = url + data.imgSrc;
    this.imgNarr = data.imgNarr;
    this.carTitle = data.cardTitle;
  }

var i = 0;
for(; i < 4 ; i += 1){
  makeLiFn(dataCheck);
}

// li요소 및 하위 요소는 변수를 따로 지정해서 사용,
// css를 굳이 js로 모두 작성할 필요x!