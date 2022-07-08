<template>
<body style="   ">
  <video-background 
    src="http://s7.huoying666.com/video/20180705/de0936c7bdd99f5509398365af915637/1530768905c5a15575883fcd15.mp4_last.mp4"
    style="max-height: 1080; height: 1080px;  z-index:100; ">


 
   <div id="apc" >
	
 <section id="main_content">
      <div id="head">
        <h1><img src="logo.png"></h1>
        <p class="sub_head">欢迎来到滑稽君，个人引导页</p>
  
      </div>   
      <button type="button" class="btns" id="need" @click="toast">bilibili</button>
      <button type="button" class="btns" id="pass" style="margin-left: 10px;">学习任务</button>
      <button type="button" class="btns" id="join" style="margin-left: 10px;">提交申请</button>

      <div class="footer" style="margin-top:15px;color: rgba(255,255,255,0.5);font-size:15px;letter-spacing: 2px;">&copy; 2020 Page by Misanki All Qq2637896409.</div>
    </section>
	</div>










 </video-background> 
 <body>

<h5>wwrrrrrrrrr</h5>
 </body>
 </body>
 
 

</template>


<script>



export default {
  name: 'HomeView',
  components: {

  }
}


</script>


<style>
@import "../bootstrap.min.css";


#apc {
 
text-align: center; /*让div内部文字居中*/

border-radius: 30px;

margin: auto;
position: absolute;
top: 200px;
left: 0;
	right: 0;
	bottom: 0;
  z-index:500;

  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  
    width:100%;
        height:100%;
        -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
    overflow-x:hidden;

overflow-y:hidden;
}




    * {
      margin: 0; 
      padding: 0;
      cursor: url('assets/logo.png'), default!important
    }



    #container {
      overflow: hidden;
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
    }

    #background_video {
      position: absolute;

      top: 50%; left: 50%;
      transform: translate(-50%, -50%);

      object-fit: cover;
      height: 100%; width: 100%;
    }


    #video_controls {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }

    #play img {
      width: 100px;
    }
    #pause img {
      width: 90px;
    }
    #pause {
      display: none;
    }

    @media (min-width: 768px) {
      #video_controls {
        display: none;
      }
    }

    /* Demo page specific styles */


    #container {
      height: 100%;
    }

    #overlay {
      position: absolute;
      top: 0; right: 0; left: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
    }

    #main_content {
      z-index: 2;
      position: relative;
      display: inline-block;
      top: 30%;
      transform: translateY(-60%);
      border:2px solid rgba(0,0,0,0.2);
      padding: 40px;
      border-radius: 10px 10px 10px 10px;
      transition: 0.3s;
      color: rgba(255,255,255,0.5);font-size:15px;letter-spacing: 2px;
        text-align: center;




         margin: 0 auto;
    }

    #main_content:hover{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    #main_content h1 {
      font-weight: 300;
      font-family: 'proxima-nova', Helvetica;
      color: rgba(0, 221, 155, 0.61);
      font-size: 35px;
      padding-bottom: 5px;
    }

    #main_content .sub_head {
      font-weight: bold;
      background: rgba(0, 221, 155, 0.61);
      -webkit-background-clip: text;
      color:rgb(184, 187, 21);
   
      letter-spacing: 5px;
    }

    @keyframes blink{
      0%{opacity: 1;}
      50%{opacity: 0.5;}
      100%{opacity: 0.8;}
    }
    @-webkit-keyframes blink {
      0% { opacity: 1; }
      50%{ opacity: 0.5;}
      100% { opacity: 0.8; }
    }
    @-moz-keyframes blink {
    0% { opacity: 1; }
    50%{ opacity: 0.5; }
    100% { opacity: 0.8; }
    }
    @-ms-keyframes blink {
    0% { opacity: 1; }
    50%{ opacity: 0.5; }
    100% { opacity: 0.8;}
    }
    @-o-keyframes blink {
    0% { opacity: 1; }
    50%{ opacity: 0.5; }
    100% { opacity: 0.8; }
    }

    #main_content .info {
 color:  #000000;
 font-size:15px;
 letter-spacing: 2px;
      font-weight: bold;
      margin-top: 10px;
        width:auto; margin-top:12px; 
     
 
    }

    #links {
      margin-top: 50px;
    }

    #links a {
      border: 2px solid rgba(255,255,255,0.20);
      border-radius: 61px;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 1px;
      text-decoration: none;
      text-transform: uppercase;
      padding: 10px 25px;
      display: inline-block;
      margin-right: 15px;
    }

    #footer {
      position: absolute;
      bottom: 0; left: 0; right: 0;
    }
    #footer a {
      color: rgba(255,255,255,0.5);
      text-decoration: none;
      margin: 10px;
      font-size: 12px;
    }
    #footer a:first-child {
      float: left;
    }
    #footer a:last-child {
      float: right;
    }
    .btns{
      font-size: 5px;
      margin-top: 10px;
      padding: 5px 5px 5px 5px;
      border:2px solid #fff;
      border-radius: 10px 10px 10px 10px;
      outline: none;
      color:pink;
      opacity: 0.7;
      background-color:transparent;
    }
    .btns:hover{
      border:2px solid rgb(251, 255, 0);
      color:salmon;
      outline: none;
    }

</style>
