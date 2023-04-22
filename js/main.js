// Start Header
let myLinks = document.querySelector("header .links");
document.querySelector(".burger").addEventListener("click", () => {
  myLinks.style.top = "0";
});
document.querySelector("header .links > span").addEventListener("click", () => {
  myLinks.style.top = "-120%";
});
document.onkeyup = (e) => {
  if (e.key === "Escape") {
    myLinks.style.top = "-120%";
  }
};
document.querySelectorAll("header .links li > a").forEach((element) => {
  element.addEventListener("click", () => {
    myLinks.style.top = "-120%";
  });
});
let prevScrollpos = window.pageYOffset;
let myHeader = document.querySelector(".main-header");
window.onscroll = () => {
  let currScrollpos = window.pageYOffset;
  prevScrollpos > currScrollpos
    ? (myHeader.style.top = "0")
    : (myHeader.style.top = "-100%");
  prevScrollpos = currScrollpos;
  if (currScrollpos > 600) {
    document.querySelector(".scroll-top").style.left = "1rem";
  } else {
    document.querySelector(".scroll-top").style.left = "-10rem";
  }
};
document.querySelector(".scroll-top").addEventListener("click", () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// End Header
// Start Landing
let counter = 2;
setInterval(() => {
  // removing the active class
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
