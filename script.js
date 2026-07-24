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



function hitTarget(){

const arrow=document.querySelector(".arrow");
const target=document.querySelector(".target");

arrow.style.transition="1s";
arrow.style.transform="translateY(-120px) translateX(20px) rotate(-20deg)";

setTimeout(()=>{

target.innerHTML="💥";

setTimeout(()=>{

target.innerHTML="❤️";

document.querySelector(".loveText").innerHTML=`
<h2>I Love You Aruuu ❤️</h2>
<p>
You are my forever.<br>
You are my happiness.<br><br>

❤️ Forever & Always ❤️
</p>
`;

},500);

},900);

}
