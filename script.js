// =============================
// I Love You Aruuu ❤️
// Complete JavaScript
// =============================

// Page Change
function nextPage() {

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");

page1.style.opacity = "0";
page1.style.pointerEvents = "none";

setTimeout(() => {

page2.style.opacity = "1";
page2.style.pointerEvents = "auto";

},700);

}

// Target Hit
function hitTarget() {

const arrow = document.querySelector(".arrow");
const target = document.querySelector(".target");

arrow.style.pointerEvents = "none";

arrow.style.transition = "1s";

arrow.style.transform =
"translateY(-120px) translateX(25px) rotate(-20deg) scale(1.2)";

setTimeout(() => {

target.innerHTML = "💥";

navigator.vibrate?.(200);

},900);

setTimeout(() => {

target.innerHTML = "❤️";

document.querySelector(".loveText").innerHTML = `
<h2>I Love You Aruuu ❤️</h2>

<p>
You are my Heart ❤️<br><br>

You are my Smile 😊<br><br>

You are my Happiness 💖<br><br>

Forever & Ever 💞
</p>
`;

document.getElementById("loveLetter").style.display = "flex";

},1600);

}

// Close Love Letter
function closeLetter(){

document.getElementById("loveLetter").style.display="none";

}

// ESC Key Close
document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeLetter();

}

});

// Click Outside Close
window.onclick=function(e){

const letter=document.getElementById("loveLetter");

if(e.target===letter){

closeLetter();

}

}

// Floating Title Effect
setInterval(()=>{

document.title=
document.title==="I Love You Aruuu ❤️"
?

"❤️ Forever My Love ❤️"

:

"I Love You Aruuu ❤️";

},1500);

// Heart Click Animation
const heart=document.querySelector(".heart");

heart.addEventListener("click",()=>{

heart.style.transform="scale(1.4)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},250);

});

// Small Heart Rain
function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=-40;

const fall=setInterval(()=>{

pos+=3;

heart.style.top=pos+"px";

if(pos>window.innerHeight){

heart.remove();

clearInterval(fall);

}

},20);

}

setInterval(createHeart,1200);

console.log("❤️ I Love You Aruuu ❤️");
