// js for invisibility area
var loginForm = $("div.LoginForm");
var mainBox = $("div.Main");
var wrapper = mainBox.closest("div.Wrapper");

function changeBackgroundImg(ele, img){
    ele.css("background-image", img);
}

function zoomIn(ele){
  ele.addClass("ZoomIn").removeClass("ZoomOut");
}

function zoomOut(ele){
  console.log(ele.attr("class"));
  ele.removeClass("ZoomIn").addClass("ZoomOut");
  console.log(ele.attr("class"));

}

$("div.MainTop").dblclick(function(){
  if (wrapper.hasClass("ZoomOut")) { return; }
  console.log("asdf");
  zoomOut(wrapper);
});

$("div.MainBottom").dblclick(function(){
  if (wrapper.hasClass("ZoomOut")) { return; }
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
  }
});

$("input#btnCloseAccount").click(function(){
  if (wrapper.hasClass("ZoomOut")) { return; }
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

// js for fake
wrapper.dblclick(function(event){
  if (wrapper.hasClass("ZoomOut") && !$(event.target).hasClass("MainTop")){
    zoomIn($(this));
  }
});
