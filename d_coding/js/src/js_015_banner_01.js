// js_015_banner_01.js
(function($){
  // jQuery

  // 해야할 일 작성
  // 1. 다음버튼을 클릭하면
  // 2. list_01 -> list_02 로 나타나게 한다.
  // 2-1 조건 -> .product의 가로값만큼 이동할것 - 가로값을 파악하는것은?
  //     - 가로값 파악하는 것 padding x , border x , 이 아닌 순수한 가로값 : width()
  // 3. 클릭마다 가로값 크기만큼 이동 -> 2번 이동 강화 -> 1씩 값이 커지게 (-옵션)
  // 4. 마지막 요소가 보이면 멈춤/처음
  // 4-1 보여주는 리스트의 갯수파악

  var banner_01 = $('.banner_01');
  var ban_01_btn = banner_01.children('.btn');
  var b01Next = ban_01_btn.children('button');
  var b01Product = banner_01.children('.product');
  var b01Ul = b01Product.children('ul');
  var b01Li = b01Ul.children('li');

  // 4-1
  var b01LiLen = b01Li.length;

  // 2-1
  var pWidth = b01Product.width();
  // console.log(pWidth);

  var countUp = 0;

  // 1. =========================
  b01Next.on('click', function(e){
    // 클릭한 요소가 기본 이벤트가 있으므로 이를 무효처리
    e.preventDefault();

  // 3.
    countUp += 1; // 1, 2, 3, 4, ... +1 씩 증가
    // 4. =======================
    if(countUp >= b01LiLen){
      // countUp = b01LiLen-1; // 멈춤
      countUp = 0; // 처음으로 돌아가게
    }

  // 2. ========================
    var mvWidth = -(pWidth * countUp) + 'px'; // 다음버튼을 눌렀을때 list_01 값이 왼쪽으로 이동되면서 list_02 화면이 나와야함으로 '-'(마이너스)값을 써줘야함!
    b01Ul.css({marginLeft: mvWidth }); // 2번기능 테스트
    console.log( countUp ); 
  });
  
})(jQuery);
