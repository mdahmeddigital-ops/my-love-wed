function nextPage(){

const page1=document.querySelector(".page1");
const page2=document.querySelector(".page2");

page1.style.opacity="0";
page1.style.pointerEvents="none";

setTimeout(()=>{

page2.style.opacity="1";
page2.style.pointerEvents="auto";

},600);

}
