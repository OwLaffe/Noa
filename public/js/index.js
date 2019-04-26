var loginForm = $("div.LoginForm");

$("div.MainBottom").click(function(){
  if (loginForm.css("display") == "none") {
    loginForm.show();
  }
});

$("input#btnCloseAccount").click(function(){
  loginForm.hide(300);
});
