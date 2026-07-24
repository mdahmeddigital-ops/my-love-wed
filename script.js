// =======================================
// I LOVE YOU ARUUU ❤️
// PREMIUM JS PART 3A
// =======================================

const loader = document.getElementById("loader");
const pages = document.querySelectorAll(".page");
const heartContainer = document.getElementById("heartContainer");

window.onload = () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

showPage(0);

},800);

},2500);

};

// ---------- Show Page ----------

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

}

// ---------- Open Arrow Scene ----------

function openArrowScene(){

showPage(1);

}

// ---------- Shoot Arrow ----------

function shootArrow(){

const bow=document.getElementById("bow");
const target=document.getElementById("target");

bow.style.transition="1s";

bow.style.transform="translateX(220px) rotate(-18deg)";

setTimeout(()=>{

target.innerHTML="💥";

navigator.vibrate?.(200);

},900);

setTimeout(()=>{

showPage(2);

},1700);

}

// ---------- Love Letter ----------

function openLetter(){

document.getElementById("letter").style.display="flex";

}

function closeLetter(){

document.getElementById("letter").style.display="none";

}

// ---------- ESC Close ----------

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeLetter();

}

});

// ---------- Click Outside ----------

window.onclick=(e)=>{

const letter=document.getElementById("letter");

if(e.target===letter){

closeLetter();

}

};

// ---------- Floating Hearts ----------

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

const hearts=["❤️","💖","💕","💗","💘","💞"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heart.style.fontSize=(20+Math.random()*25)+"px";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,500);

// ---------- Title Animation ----------

setInterval(()=>{

document.title=document.title==="I Love You Aruuu ❤️"

?

"❤️ Forever My Love ❤️"

:

"I Love You Aruuu ❤️";

},1800);

console.log("❤️ Premium Love Website Loaded ❤️");


// =======================================
// PREMIUM JS PART 3B
// =======================================

// ---------- Heart Explosion ----------

function heartExplosion(){

for(let i=0;i<35;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left="50%";
heart.style.top="50%";
heart.style.fontSize=(18+Math.random()*30)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="9999";

document.body.appendChild(heart);

const x=(Math.random()-0.5)*700;
const y=(Math.random()-0.5)*700;

heart.animate([

{
transform:"translate(0,0) scale(1)",
opacity:1
},

{
transform:`translate(${x}px,${y}px) scale(0)`,
opacity:0
}

],{

duration:1800,
easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

}

// ---------- Fireworks ----------

function fireworks(){

for(let i=0;i<60;i++){

const spark=document.createElement("div");

spark.style.position="fixed";
spark.style.left="50%";
spark.style.top="45%";
spark.style.width="6px";
spark.style.height="6px";
spark.style.borderRadius="50%";
spark.style.background="white";
spark.style.pointerEvents="none";
spark.style.zIndex="9999";

document.body.appendChild(spark);

const angle=Math.random()*360;
const distance=150+Math.random()*250;

const x=Math.cos(angle*Math.PI/180)*distance;
const y=Math.sin(angle*Math.PI/180)*distance;

spark.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1400,
easing:"ease-out"

});

setTimeout(()=>{

spark.remove();

},1500);

}

}

// ---------- Update shootArrow ----------

const oldShootArrow = shootArrow;

shootArrow = function(){

oldShootArrow();

setTimeout(()=>{

heartExplosion();

fireworks();

},1000);

}


// =======================================
// PREMIUM JS PART 3C (FINAL)
// =======================================

// Love Letter Typing Effect
const finalMessage = `

My Dear Aruuu ❤️

Every day I fall in love with you again.

You are my happiness.
You are my smile.
You are my dream.

No matter what happens...

I will always love you.

Forever & Ever ❤️

`;

function typeLetter(){

const box = document.getElementById("letterText");

if(!box) return;

box.innerHTML="";

let i=0;

const typing=setInterval(()=>{

box.innerHTML += finalMessage.charAt(i);

i++;

if(i>=finalMessage.length){

clearInterval(typing);

}

},35);

}

// Open Letter Update

const oldOpenLetter = openLetter;

openLetter=function(){

oldOpenLetter();

setTimeout(typeLetter,300);

}

// Final Celebration

function finalCelebration(){

heartExplosion();

fireworks();

setTimeout(()=>{

heartExplosion();

},1200);

setTimeout(()=>{

fireworks();

},2200);

}

// Button Effect

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.92)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});

// Random Hearts Forever

setInterval(()=>{

createHeart();

},900);

console.log("❤️ I Love You Aruuu Forever ❤️");



/* ===================================
   SURPRISE GIFT JAVASCRIPT
=================================== */

function openGift(){

const gift=document.querySelector(".giftBox");

const message=document.getElementById("giftMessage");


// Gift Animation

gift.style.transform="scale(1.5) rotate(360deg)";

gift.innerHTML="💝";


// Show Message

setTimeout(()=>{

message.classList.remove("hidden");

heartExplosion();

fireworks();


},800);


}


// Go To Gift Page

function openGiftPage(){

showPage(3);

}



/* ===================================
   FINAL ROMANTIC CONNECTION
=================================== */


// Final Celebration Button

function finalCelebration(){

heartExplosion();

fireworks();

setTimeout(()=>{

createHeart();

},500);


setTimeout(()=>{

createHeart();

},1000);


setTimeout(()=>{

createHeart();

},1500);

}



// Go To Final Scene

function openFinalScene(){

showPage(4);

}


// Gift Open Then Final Scene

const oldOpenGift = openGift;

openGift=function(){

oldOpenGift();


setTimeout(()=>{

showPage(4);

},3500);


}



// Final Button Click Effect

document.querySelectorAll(".finishBtn").forEach(btn=>{


btn.addEventListener("click",()=>{


btn.innerHTML="❤️ Forever Aruuu ❤️";


});

});
