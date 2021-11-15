/*Menu animation*/
var menu__btn = document.getElementById("menu__btn");
var links = document.getElementById("links");

links.style.right = "-250px";
menu__btn.onclick = function(){
    if(links.style.right == "-250px"){
        links.style.right = "0";
    }
    else{
        links.style.right = "-250px";
    }
}

/*animation of header elements*/

var header  = $("#header, #menu__btn")
var logo    = $(".logo")
var text2   = $(".header-text2");
var button1 = $(".first__btn")

header.delay(1000).hide().show("fade", 2000),
logo.delay(1000).hide().show("fade", 2000),
text2.hide(1500).delay(1000).show("fade", 2000);
button1.hide(2000).delay(2000).show("fade", 1000);


/*smooth scroll*/
var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    speedAsDuration: true,
});
