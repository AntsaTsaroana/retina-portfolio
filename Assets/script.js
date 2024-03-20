gsap.registerPlugin(ScrollTrigger);

//? LENIS 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//? LOADING
const tl = gsap.timeline();

tl.to(".progress", {
  duration: 1,
  width: "100%",
  ease: "power1.inOut",
  delay: 0.5
}, "<")
  .from(".wrapperLoad h1", {
    autoAlpha: 0,
    y: -200,
    duration: 1.5,
    ease: "expo.out",
    onComplete: () => {
      setTimeout(() => {
        document.querySelector(".wrapperLoad h1").style.display = "none";
      }, 1200);
    }
  }, "<")
  .to(".progress", {
    duration: 1,
    height: "100%",
    top: 0,
    ease: "power1.inOut",
    delay: 2,
    onComplete: () => {
      document.querySelector(".progress").style.display = "none";
    }
  }, "<")
  .to(".wrapperLoad", {
    opacity: 0,
    onComplete: () => {
      document.querySelector(".wrapperLoad").style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      revealAnim();
    }
  })

//? CURSOR
// gsap.set(".follower", { xPercent: -50, yPercent: -50 });
// gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

// var follow = document.querySelector(".follower");
// var cur = document.querySelector(".cursor");

// window.addEventListener("mousemove", (e) => {
//   gsap.to(cur, 0, { x: e.clientX, y: e.clientY });
//   gsap.to(follow, 0.7, { x: e.clientX, y: e.clientY });
// });

//? SCROLLBAR

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrollProgress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollProgress + "%";
});

//? TYPING EFFECT

var texts = ["original", "impactant", "unique"]; /* The array of texts */
var speed = 90; /* The speed/duration of the effect in milliseconds */
var currentTextIndex = 0;
var currentText = texts[currentTextIndex];
var quality_text = document.getElementById("text_quality");
var i = 0;

function typeWriter() {
  if (i < currentText.length) {
    quality_text.innerHTML += currentText.charAt(i);
    i++;
  } else {
    // Pause before clearing the text
    setTimeout(clearText, 1000);
    return;
  }
  setTimeout(typeWriter, speed);
}

function clearText() {
  quality_text.innerHTML = "";
  i = 0;
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  currentText = texts[currentTextIndex];
  setTimeout(typeWriter, speed);
}

window.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

//? ACTIVE ON CLICK
var elements = document.querySelectorAll("nav a");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    // Supprimer la classe active de tous les éléments
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove("active");
    }

    // Ajouter la classe active à l'élément actuel
    this.classList.add("active");
  });
}

//? HORLOGE

function updateClock() {
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var clock = hours + " : " + minutes + " : " + seconds;

  document.getElementById("clock").textContent = clock;
}

setInterval(updateClock, 1000);

//? ANIMATION HEADER

var logo_xs = document.querySelector(".logo_xs");
var retina = document.querySelector(".retina");
var textH1 = document.querySelector(".text h1");
var textP = document.querySelectorAll(".text p");
var neon = document.querySelector(".neon");
var clock = document.querySelector("#clock");
var quality = document.querySelector(".quality");
var btnfos = document.querySelector(".btnfos");

gsap.set(logo_xs, { autoAlpha: 0, y: -50 });
gsap.set(retina, { autoAlpha: 0, y: 30 });
gsap.set(textH1, { autoAlpha: 0, y: 75 });
gsap.set(textP, { autoAlpha: 0, y: 75 });
gsap.set(neon, { autoAlpha: 0 });
gsap.set(clock, { autoAlpha: 0, y: 30 });
gsap.set(quality, { autoAlpha: 0, y: 30 });
gsap.set(btnfos, { autoAlpha: 0, y: 30 });
gsap.set("nav", { autoAlpha: 0, y: 30 });

function revealAnim() {
  const timeline = gsap.timeline({
    defaults: { duration: 0.6 },
  });

  timeline
    .to(logo_xs, { autoAlpha: 1, y: 0, delay: 0.5 })
    .to(retina, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(textH1, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(textP, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(neon, { autoAlpha: 1 }, "-=0.2")
    .to(clock, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to(quality, { autoAlpha: 1, y: 0 }, "-=0.1")
    .to(btnfos, 0.1, { autoAlpha: 1, y: 0 }, "-=0.2")
    .to("nav", { autoAlpha: 1, y: 0, delay: 0.5 });
}

gsap.to(`.spanH1`, {
  top: "75%",
  scrollTrigger: {
    trigger: `.aboutUs`,
    scrub: 0.7,
  },
});
