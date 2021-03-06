// js_023_rwd_header.js

(function($){
  // jQuery

  $.ajax({
    url:'../data/device_type.json',
    context:document.body
  }).done(function(data){
    var dataType = data;
    var jsurl = '../js/rwd_header';
    // var scriptCode = '<script class="device"></script>'
    var dataUseJS = [{
      smartphone:'header_smartphone.js',
      tablet:'header_tablet.js',
      laptop:'header_laptop.js',
      pc:'header_pc.js'
    }];

    // 디바이스 규격 확인 해당하는 크기가 어느부분인지 체크
    
    var winW = $(window).outerWidth();
    var i=dataType.length - 1;
    var ckType, deviceType;

    for(; i >= 0 ; i-=1 ){
      ckType = parseInt(dataType[i].size);
      if(winW >= ckType){
        deviceType = dataType[i].type;
        break;
      }else {
        deviceType = dataType[0].type;
      }
    }

    // console.log('deviceType :', deviceType, datauseJS[deviceType] );
    // $('body').append('<script src="'+jsurl + dataUseJS[deviceType] +'"></script>);
    var scriptCodeFn = function(source){
      var src = jsurl + source;
      var script = '<script src="'+ src +'"></script>';
      $('body').append(script);
    };

    scriptCodeFn(dataUseJS[deviceType]);

  }); // $.ajax();

})(jQuery);