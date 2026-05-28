window.onload = function(){


const loader =
document.getElementById("loader");

if(loader){

    setTimeout(()=>{

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },2000);
}


};

// ======================================
// CURSOR
// ======================================

const cursor =
document.querySelector(".cursor");

if(cursor){


document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";
});


}

// ======================================
// PARTICLES
// ======================================

const particles =
document.querySelector(".particles");

if(particles){


for(let i=0;i<50;i++){

    const span =
    document.createElement("span");

    const size =
    Math.random()*8+2;

    span.style.width =
    size + "px";

    span.style.height =
    size + "px";

    span.style.left =
    Math.random()*100 + "%";

    span.style.animationDuration =
    (Math.random()*10+5) + "s";

    span.style.opacity =
    Math.random();

    particles.appendChild(span);
}


}

// ======================================
// QUOTES
// ======================================

function changeQuote(){


const quote =
document.getElementById("quoteText");

if(!quote) return;

const quotes = [

    "✨ Stay amazing always",

    "🎀 Your vibe is unmatched",

    "🌸 Keep smiling and shining",

    "🎉 Another legendary year unlocked",

    "💖 Happiness looks good on you"
];

const random =
quotes[Math.floor(
Math.random()*quotes.length)];

quote.innerHTML = random;


}

// ======================================
// SECRET LOCK
// ======================================

const secretBtn =
document.getElementById("secretBtn");

const popup =
document.getElementById("passwordPopup");

const secretImage =
document.getElementById("secretImageBox");

if(secretBtn){


secretBtn.onclick = function(){

    popup.style.display = "flex";
};


}

function checkPassword(){


const password =
document.getElementById("passwordInput").value;

const error =
document.getElementById("errorText");

if(password === "28-5-2026"){

    popup.style.display = "none";

    secretImage.style.display = "flex";
}

else{

    error.innerHTML =
    "❌ Wrong Password";
}


}

if(secretImage){


secretImage.onclick = function(){

    secretImage.style.display = "none";
};


}
