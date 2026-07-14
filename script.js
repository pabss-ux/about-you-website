const loginPage = document.getElementById("loginPage");
const promptPage = document.getElementById("promptPage");
const readPage = document.getElementById("readPage");
const barPage = document.getElementById("barPage");

const loginForm = document.getElementById("loginForm");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBarBtn = document.getElementById("nextBarBtn");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const homeSection = document.getElementById("homeSection");
const picturesSection = document.getElementById("pictures");
const musicSection = document.getElementById("music");
const poetrySection = document.getElementById("poetry");

const openHome = document.getElementById("openHome");
const openPictures = document.getElementById("openPictures");
const openMusic = document.getElementById("openMusic");
const openPoetry = document.getElementById("openPoetry");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");


function changePage(hidePage, showPage) {

    if(hidePage && showPage){

        hidePage.classList.add("hidden");
        hidePage.classList.remove("show");

        showPage.classList.remove("hidden");
        showPage.classList.add("show");

    }

}


function hideAllSections(){

    if(homeSection) homeSection.classList.add("hidden");
    if(picturesSection) picturesSection.classList.add("hidden");
    if(musicSection) musicSection.classList.add("hidden");
    if(poetrySection) poetrySection.classList.add("hidden");

}


if(loginForm){

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();


    if(username === "trishia mae l. de asis" && password === "102708"){

        changePage(loginPage,promptPage);

    }else{

        alert("Wrong username or password.");

    }

});

}


if(yesBtn){

yesBtn.addEventListener("click",function(){

    changePage(promptPage,readPage);

});

}


if(noBtn){

noBtn.addEventListener("click",function(){

    alert("Try clicking YES 💚");

});

}


if(nextBarBtn){

nextBarBtn.addEventListener("click",function(){

    changePage(readPage,barPage);

    hideAllSections();

    if(homeSection){
        homeSection.classList.remove("hidden");
    }

});

}


if(menuBtn){

menuBtn.addEventListener("click",function(){

    menu.classList.toggle("hidden");

});

}


if(openHome){

openHome.addEventListener("click",function(e){

    e.preventDefault();

    hideAllSections();

    homeSection.classList.remove("hidden");

    menu.classList.add("hidden");

});

}


if(openPictures){

openPictures.addEventListener("click",function(e){

    e.preventDefault();

    hideAllSections();

    picturesSection.classList.remove("hidden");

    menu.classList.add("hidden");

});

}


if(openMusic){

openMusic.addEventListener("click",function(e){

    e.preventDefault();

    hideAllSections();

    musicSection.classList.remove("hidden");

    menu.classList.add("hidden");

});

}


if(openPoetry){

openPoetry.addEventListener("click",function(e){

    e.preventDefault();

    hideAllSections();

    poetrySection.classList.remove("hidden");

    menu.classList.add("hidden");

});

}


document.querySelectorAll(".polaroid img").forEach(function(img){

    img.addEventListener("click",function(){

        lightboxImg.src = this.src;

        lightbox.classList.remove("hidden");

    });

});


if(closeLightbox){

closeLightbox.addEventListener("click",function(){

    lightbox.classList.add("hidden");

});

}


if(lightbox){

lightbox.addEventListener("click",function(e){

    if(e.target === lightbox){

        lightbox.classList.add("hidden");

    }

});

}


document.querySelectorAll("audio").forEach(function(audio){

    audio.addEventListener("play",function(){

        document.querySelectorAll("audio").forEach(function(other){

            if(other !== audio){

                other.pause();

            }

        });

    });

});