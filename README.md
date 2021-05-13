# kh
<h1>github_upload</h1>

0513 - float속성 & clear속성

layout_002.html (float속성 & clear속성)

<!DOCTYPE html>
<html lang="ko_KR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link rel="stylesheet" href="../css/src/layout_002.css">

  <title>Document</title>
</head>
<body>
  <!-- layout -->
  <div id="wrap">

    <div id="header" class="clearfix">
      <div class="h1"></div>
      <div class="navigation"></div>
    </div>

    <div id="section" class="clearfix">
      <div class="sect_01">sect_01</div>
      <div class="sect_02">sect_02</div>
    </div>

    <div id="aside" class="clearfix">
      <div class="side_01">side_01</div>
      <div class="side_02">side_02</div>
      <div class="side_03">side_03</div>
    </div>

    <div id="article" class="clearfix">
      <div class="art_01">art_01</div>
      <div class="art_02">art_02</div>
      <div class="art_03">art_03</div>
    </div>

    <div id="content" class="clearfix">
      <div class="art_01">art_01</div>
      <div class="art_02">art_02</div>
      <div class="art_03">art_03</div>
    </div>

    <div id="footer"></div>

  </div>

</body>
</html>

--------------------------------------------------------------------------------------------------------------
layout_002.css (float속성 & clear속성)

@charset "UTF-8";

/* layout_002.css */
/* reset.css */
* { margin:0; padding:0; border:0; outline:0; }

/* common.css */
.clearfix:after,
.clearfix::after {
  content:" ";
  display:block;
  width:100%; height:0;
  clear:both
}

/* ---------------------------------------------------- */
#wrap {
  width:600px; height:auto;
  margin:auto;
  background-color: transparent;
}

/* #header -------------------------------------------- */
#header  {
  width:100%; height:100px;
  background-color: #f06;
}

  .h1 {
    float:left;
    width:120px; height:100px;
    background-color: #999;
  }

  .navigation {
    float:right;
    width:400px; height:100px;
    background-color: #ff0;
  }

/* #section ------------------------------------------- */
#section {
  width:100%; height:auto;
  background-color: transparent;
}

/* float속성 & clear속성
- float을 사용하여 float을 감싸고 있는 부모요소의 높이값이 auto일 경우에, 실제 높이는 0으로 처리가 됨.
- 이에 float을 사용하는 형태의 요소들 중 마지막요소는 float을 사용하지 않고 clear:both을 사용한다.
- clear:both는 반드시 형태를 가지고 있어야하며, 내용상 요소로 담을 수 없는 경우에는 가상의 요소로 처리하게 한다.
- 이때 발생시키는 가상의 요소는 ::after이다.
- ::after의 속성에는 반드시 content:" "; 속성을 꼭!!! 입력해야 함. (html에서는 인지할 수 없다.) (js=after 꾸밈 x)
*/

/* 선택자 내부의 끝에 이유불문 가상으로 태그 붙이기 */ 
/* 자식값에 따라 부모높이도 조정, 매번 부모높이를 조정할수는 없으니까, 높이값이 auto가 들어가면 0이 되니까, 0을 메꿔주기 위해 clearboth사용 clearboth는 형태가 있어야 함으로,
after라는 가상요소를 사용 / */

/* #section:after,
#section::after {
  content:" ";
  display:block;
  width:100%; height:0;
  clear:both;
} */

#section > div {
  float:left; 
  height:300px;
}

  .sect_01 {
    /* float:left; */
    width:40%; 
    /* height:300px; */
    background-color: #7a7;
  }
  .sect_02 {
    /* float:left; */
    width:60%; 
    /* height:300px; */
    background-color: #777;
  }

/* aside ---------------------------------------------- */
#aside {
  width:100%; height:auto;
  background-color: transparent;
}

/* #aside:after,
#aside::after {
  content:" ";
  display:block;
  width:100%; height:0;
  clear:both
} */

#aside > div {
  float:left;
  height:300px;
}

  .side_01 {
    width:33.333333%; 
    background-color: #c9a;
  }
  .side_02 {
    width:33.333334%; 
    background-color: #595;
  }
  .side_03 {
    width:33.333333%;
    background-color: #a5c;
  }

/* #article ------------------------------------------- */
#article {
  width:100%; height:auto;
  background-color: transparent;
}
#article > div { float:left; }
  .art_01 {
    width:33.333333%; height:300px;
    background-color: #557;
  }
  .art_02 {
    width:66.666667%; height:150px;
    background-color: #f66;
  }
  .art_03 {
    width:66.666667%; height:150px;
    background-color: #a7c;
  }

/* #content ------------------------------------------- */
#content {
  width:100%; height:auto;
  background-color: transparent;
}
  #content > div { float:left; }
  #content > .art_01 {
    float:right;
    width:30%; height:500px;
    background-color: #557;
  }
  #content > .art_02 {
    width:70%; height:150px;
    background-color: #f66;
  }
  #content > .art_03 {
    width:70%; height:350px;
    background-color: #a7c;
  }

/* #footer --------------------------------------------- */
#footer {
  width:100%; height:100px;
  background-color: #0af;
}


