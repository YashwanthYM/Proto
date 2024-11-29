<body>
  <!-- Your HTML content here -->
  <script>
  // Add this function in your scripts.js file
function showInstructions() {
  var instructionBox = document.getElementById("instructionBox");
  instructionBox.classList.toggle("active");
}

    function showInstructions(language) {
      if (language === 'ENGLISH') {
        window.location.href = "test_english.html"; // Redirect to English test page
      } else if (language === 'मराठी') {
        window.location.href = "test_marathi.html"; // Redirect to Marathi test page
      } else if (language === 'हिन्दी') {
        window.location.href = "test_hindi.html"; // Redirect to Hindi test page
      }
    }

    function login() {
      window.location.href = "login.html";  // Navigate to login page
    }

    function register() {
      window.location.href = "register.html";  // Navigate to register page
    }

    document.addEventListener('DOMContentLoaded', () => {
      const navbar = document.querySelector('.navbar');
      const searchBox = document.querySelector('.search-box .bx-search');
      if (searchBox && navbar) {
        searchBox.addEventListener('click', () => {
          navbar.classList.toggle('showInput');
          searchBox.classList.toggle('bx-x');
          searchBox.classList.toggle('bx-search');
        });
      }

      const navLinks = document.querySelector('.nav-links');
      const menuOpenBtn = document.querySelector('.navbar .bx-menu');
      const menuCloseBtn = document.querySelector('.nav-links .bx-x');

      if (menuOpenBtn && navLinks) {
        menuOpenBtn.addEventListener('click', () => navLinks.classList.add('open'));
        menuCloseBtn?.addEventListener('click', () => navLinks.classList.remove('open'));
      }

      const toggleSubmenu = (arrowSelector, showClass) => {
        const arrow = document.querySelector(arrowSelector);
        if (arrow) {
          arrow.addEventListener('click', () => navLinks?.classList.toggle(showClass));
        }
      };

      toggleSubmenu('.htmlcss-arrow', 'show1');
      toggleSubmenu('.more-arrow', 'show2');
      toggleSubmenu('.js-arrow', 'show3');
    });
  </script>
</body>

