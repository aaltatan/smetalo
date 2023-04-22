let myLinks = document.querySelector("header .links");

document.querySelector(".burger").addEventListener("click", () => {
  // Open Navbar when click on Burger button
  myLinks.style.top = "0";
});

document.querySelector("header .links > span").addEventListener("click", () => {
  // Close Navbar after clicking x button
  myLinks.style.top = "-120%";
});

document.querySelectorAll("header .links li > a").forEach((element) => {
  element.addEventListener("click", () => {
    // Close navbar after Selecting Phones
    myLinks.style.top = "-120%";
  });
});

// Declrations for navbar
let prevScrollpos = window.pageYOffset;
let myHeader = document.querySelector(".main-header");
// Declrations for quiz
let nums = document.querySelectorAll(".stats-container .card .nums");
let section = document.querySelector(".quizzes");
let started = false;

window.onscroll = () => {
  // navbar hiding when scroll down
  let currScrollpos = window.pageYOffset;

  prevScrollpos > currScrollpos
    ? (myHeader.style.top = "0")
    : (myHeader.style.top = "-100%");

  prevScrollpos = currScrollpos;
  /*************************************/
  // Scroll to top button apperance
  if (currScrollpos > 600) {
    document.querySelector(".scroll-top").style.left = "1rem";
  } else {
    document.querySelector(".scroll-top").style.left = "-10rem";
  }
  /*************************************/
  // Stats Counter trigger
  if (window.scrollY >= section.offsetTop) {
    if (!started) nums.forEach((num) => startCount(num));
    started = true;
  }

  function startCount(el) {
    let goal = el.dataset.val;
    let count = setInterval(() => {
      el.textContent++;
      if (+el.textContent >= goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }
  /*************************************/
};

// Scroll to top button functionality
document.querySelector(".scroll-top").addEventListener("click", () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*************************************/

// Start Landing
let counter = 2;
// Slider on Landing page
setInterval(() => {
  document.querySelectorAll(".video-card").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelectorAll(".pagination > li").forEach((e) => {
    e.classList.remove("active");
  });
  if (counter > 5) counter = 1; // stop after 5
  document
    .querySelector(`.video-card:nth-of-type(${counter})`)
    .classList.add("active");
  document
    .querySelector(`.pagination > li:nth-child(${counter})`)
    .classList.add("active");
  counter++;
}, 7000);

document.querySelectorAll(".pagination > li").forEach((e) => {
  e.addEventListener("click", (evnt) => {
    document.querySelectorAll(".video-card").forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelectorAll(".pagination > li").forEach((e) => {
      e.classList.remove("active");
    });
    let num = evnt.target.getAttribute("data-num");
    document
      .querySelector(`.video-card:nth-of-type(${num})`)
      .classList.add("active");
    document
      .querySelector(`.pagination > li:nth-child(${num})`)
      .classList.add("active");
  });
});

// End Landing

// Start trending

let spans = document.querySelectorAll(".category-box > span");
let cards = document.querySelectorAll(".trending-container .card");
spans.forEach((span) => {
  span.addEventListener("click", (selected) => {
    /******************/
    spans.forEach((element) => {
      element.classList.remove("active");
    });
    /******************/
    selected.target.classList.add("active");
    /******************/
    cards.forEach((card) => {
      card.classList.add("disabled");
    });
    /******************/
    setTimeout(() => {
      document
        .querySelectorAll(selected.target.getAttribute("data-cat"))
        .forEach((ele) => {
          ele.classList.remove("disabled");
        });
    }, 1);
  });
});

// End trending
