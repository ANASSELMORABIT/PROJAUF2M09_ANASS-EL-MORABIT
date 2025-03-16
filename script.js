document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.getElementById("explore-button");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    

    exploreButton.addEventListener("click", function () {
        introScreen.style.opacity = "0";
        setTimeout(() => {
            introScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 500);
    });

    // Agregar funcionalidad de scroll suave al navbar
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    const section = document.querySelector(".section-card");

    function checkScroll() {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Ejecutar al cargar la página por si ya está en vista
    const musicCards = document.querySelectorAll(".music-card");

    musicCards.forEach((card) => {
        const playButton = card.querySelector(".play-btn");
        const pauseButton = card.querySelector(".pause-btn");
        const repeatButton = card.querySelector(".repeat-btn");
        const nextButton = card.querySelector(".next-btn");
        const prevButton = card.querySelector(".prev-btn");
        const audio = card.querySelector("audio");
        const progressBar = card.querySelector(".progress-bar");

        // Reproducir audio
        playButton.addEventListener("click", () => {
            audio.play();
            console.log("Reproduciendo: ", audio.src);
        });

        // Pausar audio
        pauseButton.addEventListener("click", () => {
            audio.pause();
            console.log("Pausado: ", audio.src);
        });

        // Repetir audio
        repeatButton.addEventListener("click", () => {
            audio.currentTime = 0;
            audio.play();
            console.log("Repetir: ", audio.src);
        });

        // Actualizar la barra de progreso mientras se reproduce
        audio.addEventListener("timeupdate", () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
        });

        // Cambiar la posición del audio con la barra de progreso
        progressBar.addEventListener("input", () => {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        });

        // Pasar al siguiente audio (en la misma tarjeta)
        nextButton.addEventListener("click", () => {
            audio.currentTime += 10; // Avanza 10 segundos
        });

        // Retroceder en el audio (en la misma tarjeta)
        prevButton.addEventListener("click", () => {
            audio.currentTime -= 10; // Retrocede 10 segundos
        });
    });

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    console.log(sections);


    changeBackgroundBtn.addEventListener('click', () => {

        body.classList.toggle('bg-alt');
        sections.forEach(section => {
            section.classList.toggle('bg-alt');
        });
    });

    
});


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = carouselDom.querySelector('.thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

let timeRunning = 3000; 
let timeAutoNext = 7000; 


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);


nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}


function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]); 
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); 
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]); 
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]); 
        carouselDom.classList.add('prev');
    }


    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}


let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

const sections = document.querySelectorAll(".section-card");

function checkScroll() {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll(); 

