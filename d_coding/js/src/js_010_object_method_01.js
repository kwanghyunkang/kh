// js/src/js_010_object_method_01.js

var drink; 
// drink = new Object;
// drink = new Array;
  drink = [];
  drink[0] = 'orange';
  drink[1] = 'grape';
    
  // shift(앞부분에 내용 제거), unshift(앞부분에 내용 추가), pop(뒤에서 내용 제거), push(뒤에서 내용 추가)
  drink.push('banana');
  drink.push('kiwi');
  drink.push('peach');
  drink.push('lemon');

  drink.pop();
  drink.pop();
  drink.pop();

  drink.shift();

  drink.unshift('lemon');

  console.log( drink );

  var url = 'http://www.naver.com'
  // split(name) : name을 기준으로 배열로 처리
  // indexOf(value) : value값이 내용에서 존재하는지, 몇번째 위치해 있는지 파악

  var conUrl = url.split('/');
  var urlIndex = url.indexOf('naver');
  console.log( urlIndex );

  // -----------

  var tel = ['010', '7777','5667'];
  // join('기호') : 배열로 되어있는 요소들을 기호형태를 기준으로 묶어주는 기능
  var telNum = tel.join('-');
  console.log(telNum);
  
  var list = ['coffee', 'drink', 'juice', 'water', 'vitamin'];
  list.sort(); // 정렬
  list.reverse(); // 순서를 뒤집기 (역순)
  console.log( list );

  // 메소드 : 무엇을. 기능수행()

  // 변수값 처리방법

  var rel = "값";
  var rel2 = rel;
  console.log( rel, rel2 );
  rel = '바꿔보면';
  console.log( rel, rel2 );

  var arrRel = ['값1'];
  var arrRel2 = arrRel;
  console.log( arrRel, arrRel2 );
  arrRel.push = ('값2');
  console.log( arrRel, arrRel2);

  var objRel = { 'a' : 1 };
  var objRel = objRel;
  console.log( objRel , objRel );
  objRel.a = 5;
  objRel.b = 15;
  console.log(objRel, objRel);

  // js_dom_test_01.html
  // <ul class="product">
  //   <li><a href="#"><div class="img_set">이미지1</div><p>상품평1</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지2</div><p>상품평2</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지3</div><p>상품평3</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지4</div><p>상품평4</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지5</div><p>상품평5</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지6</div><p>상품평6</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지7</div><p>상품평7</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지8</div><p>상품평8</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지9</div><p>상품평9</p></a></li>
  //   <li><a href="#"><div class="img_set">이미지10</div><p>상품평10</p></a></li>
  // </ul>
