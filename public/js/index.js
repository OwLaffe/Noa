var loginForm = $("div.LoginForm");
var mainBox = $("div.Main");

function changeBackgroundImg(ele, img){
    ele.css("background-image", img);
}


$("div.MainBottom").dblclick(function(){
  var imgDelay = 100;
  if (loginForm.css("display") == "none") {
    setTimeout(function(){
      changeBackgroundImg(mainBox, "url('/img/logo2.png')")
      setTimeout(function(){
        changeBackgroundImg(mainBox, "url('/img/logo3.png')")
        setTimeout(function(){
          changeBackgroundImg(mainBox, "url('/img/logo4.png')")
          setTimeout(function(){
            changeBackgroundImg(mainBox, "url('/img/logo5.png')")
            loginForm.show(300);
          }, imgDelay);
        }, imgDelay);
      }, imgDelay);
    }, imgDelay/2);
    //changeBackgroundImg(mainBox, "url('/img/logo2.png')");
    //changeBackgroundImg(mainBox, "url('/img/logo3.png')")
    //changeBackgroundImg(mainBox, "url('/img/logo4.png')");
    //changeBackgroundImg(mainBox, "url('/img/logo5.png')");
  }
});

$("input#btnCloseAccount").click(function(){

  loginForm.hide(300);
  var imgDelay = 100;
  setTimeout(function(){
    loginForm.hide(300);
    changeBackgroundImg(mainBox, "url('/img/logo4.png')")
    setTimeout(function(){
      changeBackgroundImg(mainBox, "url('/img/logo3.png')")
      setTimeout(function(){
        changeBackgroundImg(mainBox, "url('/img/logo2.png')")
        setTimeout(function(){
          changeBackgroundImg(mainBox, "url('/img/logo1.png')")
        }, imgDelay);
      }, imgDelay);
    }, imgDelay);
  }, imgDelay/2);
});
