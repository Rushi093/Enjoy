const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "200px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 300,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 300,
  origin: "right",
});

// banner container
ScrollReveal().reveal(".banner1 h4", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".banner__card p", {
  ...scrollRevealOption,
  origin: "bottom",
});

ScrollReveal().reveal(".banner2 h4", {
  ...scrollRevealOption,
  origin: "top",
});

ScrollReveal().reveal(".banner3 h4", {
  ...scrollRevealOption,
  origin: "right",
});


// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })

// --------------------------------------

// const dark_mode = document.querySelector('dark_mode');

//     dark_mode.addEventListener('click', () => {
//       dark_mode.classList.add('active-mode');
//     })

// const darkrm = document.getElementsByClassName('dark_mode');

// darkrm.addEventListener('mouseout' , function () {
//   darkrm.style.backgroundColor = 'red';
// });

// darkrm.addEventListener('mouseout' , function () {
//   darkrm.style.backgroundColor = 'black';
// });



function darkMode() {
  const a = document.getElementsByClassName('dark_mode')[0].innerHTML;

  if (a == "🌙") {
    document.getElementsByClassName('dark_mode')[0].innerHTML = "☀️";
    // document.getElementsByClassName('dark_mode')[0].style.backgroundColor="black";
    document.body.style.backgroundColor = "rgb(10, 10, 10)";
    document.documentElement.style.setProperty('--mode_text-light', '#c6c6c6');
    document.documentElement.style.setProperty('--mode_text-dark', 'white');
    document.documentElement.style.setProperty('--mode_white', 'rgb(13, 23, 33) ');
    // document.documentElement.style.boxShadow('#shadow_1', 'rgba(0, 0, 0, 0.9)');

    // const shadow_1 = document.getElementById("shadow_1");
    // shadow_1.addEventListener
  }
  else {
    document.getElementsByClassName('dark_mode')[0].innerHTML = "🌙";
    // document.getElementsByClassName('dark_mode')[0].style.backgroundColor="white";
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty('--mode_text-light', '#78716c');
    document.documentElement.style.setProperty('--mode_text-dark', 'black');
    document.documentElement.style.setProperty('--mode_white', 'white');
  }
}

// important
// var darkrm = document.getElementById("qwe");

// darkrm.onclick = function(){
//   document.body.classList.toggle("dark_theme");
// }

// Extra

// let loginButton = document.querySelector(".nav__btn");
// // let currenButton = "logout";

// loginButton.addEventListener("click", (e) => {
//   document.getElementsByClassName(".login-box").style.transform = scale(1);
// })


// const login_box = document.querySelector('.login-box');
// const loginButton = document.querySelector('.nav__btn');

// loginButton.addEventListener('click', () => {
//   login_box.classList.add('active-button');
// })



// function gotopage(page){
//   window.location.href = page;
// }