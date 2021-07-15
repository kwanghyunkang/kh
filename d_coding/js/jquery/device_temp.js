// device_temp.js
(function($){

  $.ajax({
    url:'../data/device_type.json',
    context:document.body
  }).done(function(data){
    // $.ajax()로 불러오는 모든 내용은 매개변수로 불러오게 된다.
    // 비동기식으로 처리되기 때문에 시간이 걸린다.
    var importDevice = data;


  // 1. 접속 브라우저 환경
  // 2. 브라우저의 크기값 파악
  // 3. 각 디바이스 환경을 외부의 파일로 내보내서 처리
  
  // 변수
  var win = $(window);

  
  // 2. 접속 브라우저 환경 / 반응형이 가능하냐 불가능하냐 체크
  var browserSetFn = function(){
    
    // var browser = ['chrome','safari','opr','firefox'];
    // 접속브라우저를 파악하기 위해 표기된 용어와, 실제 확인용어 구분, 순서를 명확하게 파악
    var browser = [
      {type :'Opera', check:'opr'},
      {type :'Edge', check:'edg'},
      {type :'Chrome', check:'chrome'},
      {type :'Safari', check:'safari'},
      {type :'Firefox', check:'firefox'}
    ];

    // 접속브라우저 체크(대소문자 구분없이 파악하기 위해 소문자로 설정)
    var checkDevice = navigator.userAgent.toLowerCase();
    var n = 0;
    var ckIndex;
    // ie브라우저 체크(ms엔진인 Trident엔진이 있을경우 IE브라우저):navigator.userAgent.search('Trident');
    if(navigator.userAgent.search('Trident') !== -1){
      // '반응형 웹 불가능 브라우저';
      useRwd = false;
      console.log('사용브라우저', 'ie');
    } else {
      // ie외에 다른브라우저 기반체크 (위 변수 browser 변수의 순서를 잘 작성해야 해당브라우저를 파악이 가능)
      for(; n < browser.length ; n++ ){
        // indexOf() 존재유무 판단 -> -1 값을 나타나면 '없다', 이외의 수치가 나오면 해당하는 위치에 있다.
        ckIndex = checkDevice.indexOf(browser[n].check);
        // console.log(ckIndex);
        if(ckIndex !== -1){
          // '반응형 웹 가능 브라우저';
          useRwd = true; 
          console.log('사용브라우저', browser[n].type);
          // 체크된 상황에서 반복수행하지 않도록 처리
          break;
        }
      } // for문
    }// if:IE체크

    // 반응형웹 '제작가능여부(true of false)'를 반환
    return useRwd;
  } // browserSetFn();
  var rwdCheck = browserSetFn();

  // 반응형웹 구현이 불가능할 경우
  if(!rwdCheck){
    console.log('접속 브라우저가 반응형구현 또는 flex구조가 아니기 때문에 사용하기 불편할 수 있다.'); // ie -> flex아예 안먹음
    // $('.device').hide();
    // $('.old').show();
  }else{
    // ie가 아닌 반응형 가능한 브라우저
    // 범위는 하위 전부 ~~resize 까지
  }

// ie가 아닌 반응형 가능한 브라우저 시작
  // ===================================================================

  // 1. 브라우저 크기값 파악 (실시간으로 사이즈 체크)
  // 101. 브라우저의 가로값의 변경만 파악하여 처리
  // 102. 모든 가로값을 파악해서 그때마다 수정 x, 지정된 디바이스 환경을 고려하여 환경자체가 변경되면 그때 처리하겠다. -> 새로고침 수행


var deviceWidth = function(){
  // var deviceType = 1280;
  // [768, 1280, 1600] 기준으로 변경

  // 외부에서 불러와서 deviceType에 저장
  var deviceType = importDevice;
  var checkType;
  var winWidth = win.outerWidth(true); //500
  
  // if(winWidth < deviceType[3].size){
  //   checkType = deviceType[3].type;
  // }else if(winWidth < deviceType[2].size){
  //   checkType = deviceType[2].type;
  // }else if(winWidth < deviceType[1].size){
  //   checkType = deviceType[1].type;
  // }else{
  //   checkType = deviceType[0].type;
  // }

  var intSize;    // win.outerWidth(true) 값에 따라 device_type에서 지정해놓은 값에 해당하는 것을 찾아 결과를 도출해낸다.
  var i = deviceType.length-1;                // 
  for(; i>=0 ; i-=1){                         // i 값이 첫번째보다 크거나 같을때 ; i의 값을 1씩 줄인다.
    intSize = parseInt(deviceType[i].size);   // deviceType요소들의 크기를 정수값으로
    if(winWidth >= intSize){                  // 윈도우크기가 deviceType요소들의 크기를 정수값으로 지정한것보다 클때
      checkType = deviceType[i].type;         // 
      break;                                  // 반복문을 중간에 멈추게 하는 역할 / break를 사용하지 않는다면,
    }else{                                    // 조건이 맞았을때까지만 실행하고 그 뒤는 반복수행을 끝낸다.  
      checkType = deviceType[i].type;         // 
    }
  }
  return checkType;
};

var beforeWidth = deviceWidth();
console.log('브라우저 변경 전 가로크기: ', beforeWidth);

// 브라우저의 크기가 변경되면 해당 수치를 파악
win.on('resize', function(){                            // resize = 가로,세로 구분 x
  var afterWidth = deviceWidth();
  console.log('브라우저 변경 후 가로크기: ', afterWidth);
  
  // 디바이스 환경이 변경되면(같지 않으면)
  if(beforeWidth !== afterWidth){
    // 새로고침
    location.reload();
  }
}); // ie가 아닌 반응형가능한 브라우저 fin // =======================

}); // $.ajax();

})(jQuery);