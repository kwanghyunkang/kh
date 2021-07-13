/** 
 * 1. 브라우저의 가로 크기값 확인
 * 2. 내가 원하는 기준치로 설정된 범위(이름을 설정해서 처리)에 맞는지 파악(mobile, tablet, laptop, pc ...)
 * 3. 브라우저의 크기가 변경될때('resize') 기존 가로값과 변경된 가로값을 비교하여, 일치하지 않을경우에 일부 재처리
*/
var deviceSize = function(){

  var resultDevice;

  (function($){  
           
    // 선택자.width() -> 가로값을수치  
    // .innerWidth()  -> padding포함 가로값
    // .outerWidth()  -> border(padding포함)값을 포함 가로값
    // .outerWidth(true) -> margin(border+padding)을 포함한 가로값
  // --------------------------------------------------------------------------------------

    // 기준치를 설정
    // [ 480, 1024, 1440, 1920];
    var deviceType = [
      {type:'mobile', size:480}, 
      {type:'table', size:768},
      {type:'laptop', size:1280},
      {type:'pc', size:1920},
      {type:'pcfull'}
    ];

    // 브라우저 최초크기값 확인
    var win = $(window); 
    var beforeWinW = win.outerWidth(true);    // window에서 margin+border+padding을 다 포함한 값
    
    var deviceCheck = function(winW){
    // type 체크
      var myType;
  /*
          if(winW <= deviceType[0].size){    // devicetype이 mobile winW보다 크거나 같을때 
            myType = deviceType[0].type;     // myType에 mobile.size 대입
          }else if(winW <= deviceType[1].size){
            myType = deviceType[1].type;
          }else if(winW <= deviceType[2].size){
            myType = deviceType[2].type;
          }else if(winW <= deviceType[3].size){
            myType = deviceType[3].type;
          }else{
            myType = deviceType[deviceType.length -1].type;
          }
  */

        for(var i=0; i<deviceType.length; i+=1){   //for문 (조건: i에0대입 ; device사이즈의길이가 i값보다 클 경우 ; i의 값은 1씩 증가)
          if(winW <= deviceType[i].size){
            myType = deviceType[i].type;
            break;
          }else{
            myType = deviceType[deviceType.length -1].type;
          }
        }
        // console.log(myType);
        return myType;
    }  // deviceCheck();

    var winSize = deviceCheck(beforeWinW);
    resultDevice = winSize; //devicesize결과는 window사이즈
  // ------------------------------------------------------------------
    win.on('resize', function(){  
      // 사이즈변경시 브라우저 크기값 재 확인
      var reWinW = win.outerWidth(true);      // window사이즈가 margin++border+padding값을 다 더한값
      var afterWinSize = deviceCheck(reWinW); // 

      // 기존 디바이스타입과 변경된 디바이스타입이 다른경우 새로고침
      if(winSize !== afterWinSize){
        location.reload();
      }
      
    });
    return resultDevice;
  })(jQuery);
  return resultDevice;
};