      //===== close navbar-collapse when a  clicked
      let navbarTogglerFive = document.querySelector(
        ".navbar-five .navbar-toggler"
      );
      navbarTogglerFive.addEventListener("click", function () {
        navbarTogglerFive.classList.toggle("active");
      });