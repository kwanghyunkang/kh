// js_015_banner_01-03.js
(function($){
  //jQuery
  // ==================
  // 역할 수행목록

  // ==================

  // 선택자 선언 / .children(); -> 자식 선택 / .find(); -> 자손 선택
  var banner = $('.banner_03');
  var countArea = banner.find('.count');
  var countTotal = countArea.find('.total'); // 추후 전체 갯수 =====================
  var countNow = countArea.find('.now'); // 현재 보이는 배너위치 ====================

  var slideBtnArea = banner.find('.slide_btn');
  var slideBtn = slideBtnArea.find('button');

  var productArea= banner.children('.product');
  var productUl = productArea.children('ul');
  var productLi = productUl.children('li');


  // 임의 변수 / 변수 초기화 ===================================
  var count = 0;

  // 함수영역 ======================================
    // 현재배너 위치 체크
  var nowCFn = function(){
    var nowMvCount = count + 1;
    countNow.text(nowMvCount); 
  };

  // 배너가 이동할 위치를 파악 체크
  var mvFn = function(){
    var mv = -(100 * count) + '%';
    return mv;
  };

  // 기능수행 ======================================

  // animation 기능수행을 위해 마지막 요소를 복제하여( clone() ) 앞에다 붙이기
  // 1. css 에서는 js에서 순서를 바꿔도 그냥 바뀐대로의 순서를 배치
  // 2. js에서는 먼저 존재하는 내용을 선택하면 그걸로 끝, 새로 추가하면 다시 선택해야 함

  var cloneLi = productLi.eq(-1).clone();
  productUl.prepend(cloneLi);


  // li 갯수 파악 및 total 에 삽입
  var liLen = productLi.length;
  countTotal.text(liLen);
  
  
  // 현재 배너위치 체크
  nowCFn(); 

  // 광고영역의 크기 파악 (새로 생성형태 파악)
  var newProductLi = productUl.children('li');
  var newLiLen = newProductLi.length;
  console.log( newLiLen );

  // 1. 범위 파악
  // 2. 전체 넓이를 파악후 재배치 (변경된 li 갯수를 파악후 처리)
  productUl.css({'width' : (100 * newLiLen) + '%' });
  // 3. 각각의 넓이 재배치 (변경된 li 요소의 갯수 크기수정)
  newProductLi.css({'width' : (100 / newLiLen ) + '%' });
  // 4. 처음 보이는 내용을 첫li요소로 변경
  productUl.css({'position' : 'relative', 'left': -100 + '%'}); 

  // 이벤트 ========================================= 
  var permission = true;
  // ex.귀신의집 / 실행을했을때 하나만 실행이 되야하는데, 여러개가 같이 수행되니까 충돌이 일어남
  // 그것을 방지하기 위해 함수를 실행시키고 바로 if(permission) = false; 를 선언하면 두번째로 실행하는 것은
  // false로 인해 실행되지 못함

  slideBtn.on('click', function(e){
    e.preventDefault();

    if(permission){
      permission = false;
    
    // 다음버튼을 클릭했으니, 이제 이동
    count += 1;

    if(count >= liLen){
      productUl.css({marginLeft: 100 + '%'});
      count = 0;
    }

    productUl.stop().animate({marginLeft: mvFn()}, function(){
      permission = true;
    } );
    nowCFn();

    } // permission 조건

  }); //slideBtn.on('click', ...);


})(jQuery);