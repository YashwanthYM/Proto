document.addEventListener('DOMContentLoaded', function() {
  // Search-box open/close
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");

  if (searchBox && navbar) {
    searchBox.addEventListener("click", () => {
      navbar.classList.toggle("showInput");
      if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
      } else {
        searchBox.classList.replace("bx-x", "bx-search");
      }
    });
  }

  // Sidebar open/close
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");

  if (menuOpenBtn && menuCloseBtn && navLinks) {
    menuOpenBtn.onclick = function() {
      navLinks.style.left = "0";
    };
    menuCloseBtn.onclick = function() {
      navLinks.style.left = "-100%";
    };
  }

  // Sidebar submenu open/close
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  let moreArrow = document.querySelector(".more-arrow");
  let jsArrow = document.querySelector(".js-arrow");

  if (htmlcssArrow) {
    htmlcssArrow.onclick = function() {
      navLinks.classList.toggle("show1");
    };
  }

  if (moreArrow) {
    moreArrow.onclick = function() {
      navLinks.classList.toggle("show2");
    };
  }

  if (jsArrow) {
    jsArrow.onclick = function() {
      navLinks.classList.toggle("show3");
    };
  }
});
