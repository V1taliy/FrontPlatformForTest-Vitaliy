"use strict";for(var select=document.getElementsByClassName("form__select"),degree=0,changeDisplaying="none",_loop=function(e){select[e].addEventListener("click",function(t){degree+=180,changeDisplaying="none"==changeDisplaying?"block":"none",select[e].getElementsByClassName("form__select-toggle")[0].style.transform="translateY(-50%) rotate("+degree+"deg)",select[e].parentNode.getElementsByClassName("form__select-items")[0].style.display=changeDisplaying})},i=0;i<select.length;i++)_loop(i);