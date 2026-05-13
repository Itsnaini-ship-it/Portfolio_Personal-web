tailwind.config = {
theme: {
extend: {
colors: {
softPink: '#ff9a9e',
deepPink: '#e04480',
pastelPink: '#ffd1dc'
},
fontFamily: {
heading: ['Playfair Display', 'serif'],
body: ['Poppins', 'sans-serif']
}
}
}
}

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menuLink");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("translate-x-full");
    menuBtn.innerHTML = "✕";
  } else {
    mobileMenu.classList.add("translate-x-full");
    menuBtn.innerHTML = "☰";
  }
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    menuBtn.innerHTML = "☰";
    isOpen = false;
  });
});

const hello=document.getElementById("heroHello")
const title=document.getElementById("typingTitle")
const sub=document.getElementById("heroSub")
const buttons=document.getElementById("heroButtons")

const heroTitle=document.getElementById("heroTitle")
const heroSub=document.getElementById("heroSub")
const heroHello=document.getElementById("heroHello")

const helloText="Hello..."
const mainText="I'am Safa"
const subText="Welcome to My Portfolio, I am a passionate learner who loves building things with design."

let h=0
let t=0
let s=0

function typeHello(){
    heroHello.classList.add("showHero")
    if(h < helloText.length){
        hello.innerHTML += helloText.charAt(h)
        h++
        setTimeout(typeHello,120)
    }else{
        setTimeout(typeTitle,300)
    }
}

function typeTitle(){
    heroTitle.classList.add("showHero")
    if(t < mainText.length){
        title.innerHTML += mainText.charAt(t)
        t++
        setTimeout(typeTitle,170)
    }else{
        setTimeout(typeSub,400)
    }
}

function typeSub(){
    heroSub.classList.add("showHero")
    if(s < subText.length){
        sub.innerHTML += subText.charAt(s)
        s++
        setTimeout(typeSub,28)
    }else{
        setTimeout(()=>{
            buttons.classList.add("showHero")
        },300)
    }
}

window.onload=()=>{
    typeHello()
}

document.addEventListener("mousemove",(e)=>{
    let x=(window.innerWidth/2-e.pageX)/35
    let y=(window.innerHeight/2-e.pageY)/35

    heroTitle.style.transform=`translate(${x}px,${y}px)`
    heroSub.style.transform=`translate(${x/2}px,${y/2}px)`
    heroHello.style.transform=`translate(${x/3}px,${y/3}px)`
    buttons.style.transform=`translate(${x/4}px,${y/4}px)`
})

const barSection = document.querySelector("#bar");
const heading = document.querySelector(".skillHeading");
const skillBox = document.querySelectorAll(".skillBox");
const fills = document.querySelectorAll(".progressFill");

let played = false;

window.addEventListener("scroll", function(){
    const top = barSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 120 && !played){

        heading.classList.add("show");

        skillBox.forEach((box,index)=>{
            setTimeout(()=>{
                box.classList.add("show");
            }, index * 180);
        });

        fills.forEach((fill,index)=>{
            setTimeout(()=>{
                fill.style.width = fill.getAttribute("data-width");
            }, 500 + index * 180);
        });

        played = true;
    }
});

const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  await fetch("https://formsubmit.co/ajax/e56871028@gmail.com", {
    method: "POST",
    body: data
  });

  form.reset();
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
});
