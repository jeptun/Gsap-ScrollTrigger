window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "#1f1b1b";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("logo").style.color = "#fff";
    document.getElementById("new1").style.border = " 1px solid #fff";
    document.getElementById("nav1").style.color = "#fff";
    document.getElementById("nav2").style.color = "#fff";
    document.getElementById("nav3").style.color = "#fff";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "#fff0";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.color = "#000";
    document.getElementById("new1").style.border = " 1px solid #000";
    document.getElementById("nav1").style.color = "#000";
    document.getElementById("nav2").style.color = "#000";
    document.getElementById("nav3").style.color = "#000";
  }
}