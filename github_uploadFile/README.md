<h1>github_upload</h1>

<h2>float.html</h2>



<!DOCTYPE html>

<!-- html/basic_code_06_float.html -->

<html lang="ko-KR">

<head>

  <meta charset="UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=yes, minimum-scalable=0.5, maximum-scalable=3.0 ">



 <!--[if IE]> 

    <script src="../ie/html5shiv/dist/html5shiv.min.js"></script>

  <sccipt src="../ie/ie9js/ie9.min.js"></script>

    <script src="../ie/csspie/PIE.js"></script>

    <script src="../ie/responsive.min.js"></script>

  <![endif]-->





 <link rel="shortcut icon" href="favicon.png" type="image/png">

 <link rel="apple-touch-icon" href="favicon.png">



 <link rel="stylesheet" href="../css/src/basic_code_06_float.css">



 <title>웹 기초</title>



</head>

<body>

 <!-- layout -->

  <div id="wrap">

  <h1><a href="./all_contents.html">웹기초</a></h1>

  <hr />

  <h2>float코드</h2>

  

    <div class="part">

   <h3>내부에 overflow 기법</h3>

      <div class="overflow_type inner">

        <p>내용요소를 삽입1</p>

        <p>내용요소를 삽입2</p>

        <p>내용요소를 삽입3</p>

        <p>내용요소를 삽입4</p>

   </div>

  </div>



    <div class="part">

   <h3>내부에 다른 요소를 삽입</h3>

      <div class="other_type inner">

​    <!-- p{내부에 다른요소를 덧붙이기 $$}*4 -->

        <p>내부에 다른요소를 덧붙이기 01</p>

        <p>내부에 다른요소를 덧붙이기 02</p>

        <p>내부에 다른요소를 덧붙이기 03</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <p>내부에 다른요소를 덧붙이기 04</p>

        <div class="clear"></div>

   </div> 

  </div>

  

    <div class="part">

   <h3>높이값을 정해주는 것</h3>

   <!-- .height_fix_type>div.in_box{내용 삽입}*4 -->

      <div class="height_fix_type inner">

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

        <div class="in_box">내용 삽입</div>

   </div>

  </div>

  

    <div class="part">

   <h3>가상요소를 사용</h3>

   <!-- ul.ghost_type>li{가상요소를 이용한 float}*4 -->

   <ul class="ghost_type inner clearfix"> 

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <li>가상요소를 이용한 float</li>

​    <!-- html처럼 요소를 담지만, html이 아닌 가상의 존재를 만들어서 clear:both를 적용하자 -->

   </ul>

  </div>



 </div>

 <!-- script -->

 <!-- <script src="../js/src/setting_test.js"></script> -->

 

</body>

</html>



---



<h2>float.css</h2>



@charset "UTF-8";



/* css/src/basic_code_06_float.css */



/* reset.css */

html,body,h1,h2,h3,h4,h5,h6,p,div,ul,li,dl,dt,dd {

 margin:0; padding:0;

}

ul,ol,li {

 list-style:none;

}



/* */

\#wrap {

 width:800px; height:auto; min-height:900px;

 margin:auto;

 background-color: #dfdfdf;

}



.part {

 width:90%; height:auto; min-height:300px;

 margin:auto; margin-bottom:100px;

 background-color: #faa;

} 



h3 { width:100%; text-align:center; }



.inner { width:95%; height:auto; margin:auto;}

.overflow_type {

 overflow:auto; height:200px; 

 background-color: #cdf;}



.other_type {background-color: #daf;}

.height_fix_type {height:900px; background-color: #dfc;}

.ghost_type {background-color: #dca;}



.overflow_type > p,

.other_type > p,

.height_fix_type > div,

.ghost_type > li {

 float:left;

 width:49%; height:200px;

 border-width:1px;

 border-style:solid;

 border-color:#171717;

}



.clear { width:100%; height:0; clear:both; }



.clearfix:after ,

.clearfix::after {

 content:" ";

 display: block;

 width:100%; height:0;

 clear:both

}