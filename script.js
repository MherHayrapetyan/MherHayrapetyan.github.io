const loading = document.querySelector(".loading");

window.onload = (event) => {
  loading.style.display = "none";
};

const changeNum = document.querySelectorAll(".contentOneBoxerChangeBoxNum");
const changeLine = document.querySelectorAll(".contentOneBoxerChangeBoxLine");
const arr = [
  document.querySelectorAll(".contentOneMiniBox"),
  document.querySelectorAll(".contentTwoMiniBox"),
  document.querySelectorAll(".contentThreeMiniBox"),
];

changeNum.forEach((itemOne, indexOne) => {
  itemOne.onclick = () => {
    changeNum.forEach((item) => {
      item.classList.remove("contentOneBoxerChangeBoxBefore");
    });
    arr.forEach((itemArrOne, indexArrOne) => {
      if (indexOne === indexArrOne) {
        itemArrOne.forEach((itemArrTwo) => {
          itemArrTwo.style.display = "block";
        });
      } else {
        itemArrOne.forEach((itemArrTwo) => {
          itemArrTwo.style.display = "none";
        });
      }
    });
    itemOne.classList.toggle("contentOneBoxerChangeBoxBefore");
    changeLine.forEach((itemTwo, indexTwo) => {
      if (indexTwo === indexOne) {
        itemTwo.style.display = "block";
      } else {
        itemTwo.style.display = "none";
      }
    });
  };
});

const headerBox = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 120) {
    headerBox.classList.add("toggleClassHeader");
  } else {
    headerBox.classList.remove("toggleClassHeader");
  }
});

const contentOne = document.querySelector(".contentOne");
const navigationBoxUlList = document.querySelectorAll(".backgroundGuyn");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset > 0 &&
    window.pageYOffset < contentOne.clientHeight - 90
  ) {
    navigationBoxUlList.forEach((item) => {
      item.style.background = "none";
    });
    navigationBoxUlList[0].style.background = "#24c1dd";
  }
});

const cursorOne = document.querySelector(".cursorOne");
const headerLogoBox = document.querySelector(".logoBox");

document.addEventListener("mousemove", (e) => {
  cursorOne.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "navigationBoxUlList") {
    cursorOne.style.background = "gray";
    cursorOne.style.opacity = ".1";
    cursorOne.style.border = "none";
    cursorOne.style.width = "90px";
    cursorOne.style.height = "90px";
    cursorOne.style.transition = ".3s";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "imgLogoBox") {
    cursorOne.style.background = "gray";
    cursorOne.style.opacity = ".1";
    cursorOne.style.border = "none";
    cursorOne.style.width = "90px";
    cursorOne.style.height = "90px";
    cursorOne.style.transition = ".3s";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "navigationBoxUlBurgCursor") {
    cursorOne.style.opacity = ".2";
    cursorOne.style.width = "70px";
    cursorOne.style.height = "70px";
    cursorOne.style.transition = ".3s";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "contentOneJoinUsBoxBttCursor") {
    cursorOne.style.display = "none";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "contentOneIconCursor") {
    cursorOne.style.opacity = ".2";
    cursorOne.style.width = "55px";
    cursorOne.style.height = "55px";
    cursorOne.style.transition = ".3s";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] === "contentOneBoxerChangeBoxCursor") {
    cursorOne.style.opacity = "0";
    cursorOne.style.width = "60px";
    cursorOne.style.height = "60px";
    cursorOne.style.transition = ".3s";
  }
});

document.addEventListener("mousemove", (e) => {
  if (e.pageY > contentOne.clientHeight) {
    cursorOne.style.display = "none";
  }
});

const menuBurger = document.querySelector(".navigationBoxUlBurg");
const headerBurger = document.querySelector(".headerMenuMediaBox");
const headerMenuOgnox = document.querySelector(".headerMenuMediaBoxOgnox");
const headerMenuClose = document.querySelector(".headerMenuClose");

menuBurger.onclick = () => {
  headerBurger.classList.add("headerMenuMediaBoxToggle");
  headerMenuOgnox.style.display = "block";
};

headerMenuOgnox.onclick = () => {
  headerBurger.classList.remove("headerMenuMediaBoxToggle");
  headerMenuOgnox.style.display = "none";
};

headerMenuClose.onclick = () => {
  headerBurger.classList.remove("headerMenuMediaBoxToggle");
  headerMenuOgnox.style.display = "none";
};

const burgerClass = document.querySelectorAll(".burgerClass");

const contentFour = document.querySelector(".contentFour");
const contentTwo = document.querySelector(".contentTwo");

burgerClass.forEach((item, index) => {
  item.onclick = () => {
    headerBurger.classList.remove("headerMenuMediaBoxToggle");
    headerMenuOgnox.style.display = "none";
    if (index === 0) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (index === 1) {
      window.scroll({
        top: contentTwo.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
    } else if (index === 2) {
      window.scroll({
        top: contentFour.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
    }
  };
});

function homeTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const contentTwoImgBlue = document.querySelector(".contentTwoImgBox");

const contentTwoTwoImgAnim = document.querySelector(
  ".contentTwoBigBoxFlexBoxImgBox"
);
const contentTwoTwoTxtAnim = document.querySelector(
  ".contentTwoBigBoxFlexBoxTextBox"
);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 320) {
    if (window.innerWidth > 768) {
      contentTwoTwoImgAnim.style.display = "block";
      contentTwoTwoTxtAnim.style.display = "block";
      contentTwoImgBlue.style.height = contentTwo.clientHeight + "px";
    } else {
      contentTwoTwoTxtAnim.style.display = "flex";
      contentTwoImgBlue.style.height = contentTwo.clientHeight + "px";
    }
  }
});

function servTop() {
  window.scroll({
    top: 570,
    left: 0,
    behavior: "smooth",
  });
}

const contentThreeTxtBox = document.querySelector(".contentThreeTxtBox");
const contentThree = document.querySelector(".contentThree");
const contentThreeSmallBox = document.querySelectorAll(
  ".contentThreeSmallSmallBox"
);
const contentThreeSmallSmallBoxNum = document.querySelectorAll(
  ".contentThreeSmallSmallBoxNum"
);

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset >
    contentThreeTxtBox.scrollHeight + contentThree.scrollHeight + 90
  ) {
    contentThreeTxtBox.style.opacity = "1";
  }
});

let contentThreeNumTrue = true;

window.addEventListener("scroll", () => {
  contentThreeSmallBox.forEach((item) => {
    if (window.innerWidth < 768) {
      if (
        window.pageYOffset >
        item.scrollHeight + contentThree.scrollHeight + 200
      ) {
        item.style.opacity = "1";
        if (contentThreeNumTrue) {
        }
      }
    } else {
      item.style.opacity = "1";
      contentThreeNumTrue = false;
      contentThreeNum();
    }
  });
});

function contentThreeNum() {

  let o = 0;
  let tw = 0;
  let th = 213000;
  let f = 400;

  let setIntervalNumOne = setInterval(() => {
    contentThreeSmallSmallBoxNum[0].innerHTML = o;
    o++;
    if (o === 26) {
      clearInterval(setIntervalNumOne);
    }
  }, 70);

  let setIntervalNumTwo = setInterval(() => {
    contentThreeSmallSmallBoxNum[1].innerHTML = tw;
    tw++;
    if (tw === 33) {
      clearInterval(setIntervalNumTwo);
    }
  }, 70);

  let setIntervalNumThree = setInterval(() => {
    contentThreeSmallSmallBoxNum[2].innerHTML = th;
    th++;
    if (th === 213252) {
      clearInterval(setIntervalNumThree);
    }
  }, 1);

  let setIntervalNumFour = setInterval(() => {
    contentThreeSmallSmallBoxNum[3].innerHTML = f;
    f++;
    if (f === 778) {
      clearInterval(setIntervalNumFour);
    }
  }, 1);
}

function techTop() {
  window.scroll({
    top: contentFour.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const perSentNum = document.querySelectorAll(
  ".contentFourTwoBlockOneTopOneTxtNum"
);
const perSentNumAnim = document.querySelectorAll(
  ".contentFourTwoBlockOneTopOneTopRealOne"
);
const perSentBlock = document.querySelector(".contentFourTwoBlockOneTop");
const perSentTrue = true;

addEventListener("scroll", () => {
  if (window.pageYOffset > perSentBlock.offsetTop - 400) {
    if (perSentTrue) {
      perSentNumAnim.forEach((item) => {
        item.style.animationIterationCount = "1";
        perSentNumFn()
      });
      perSentTrue = false
    }
  }
});

function perSentNumFn() {

  let o = 0;
  let tw = 0;
  let th = 0;
  let f = 0;

  let setIntervalNumOne = setInterval(() => {
    perSentNum[0].innerHTML = o + "%";
    o++;
    if (o === 96) {
      clearInterval(setIntervalNumOne);
    }
  }, 50);

  let setIntervalNumTwo = setInterval(() => {
    perSentNum[1].innerHTML = tw + "%";
    tw++;
    if (tw === 89) {
      clearInterval(setIntervalNumTwo);
    }
  }, 50);

  let setIntervalNumThree = setInterval(() => {
    perSentNum[2].innerHTML = th + "%";
    th++;
    if (th === 84) {
      clearInterval(setIntervalNumThree);
    }
  }, 50);

  let setIntervalNumFour = setInterval(() => {
    perSentNum[3].innerHTML = f + "%";
    f++;
    if (f === 92) {
      clearInterval(setIntervalNumFour);
    }
  }, 50);
}
