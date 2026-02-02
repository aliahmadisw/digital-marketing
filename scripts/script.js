document.addEventListener("DOMContentLoaded", () => {
  let timer_day = document.getElementById("timer-day-value");
  let timer_hours = document.getElementById("timer-hours-value");
  let timer_minutes = document.getElementById("timer-minutes-value");
  let timer_seconds = document.getElementById("timer-seconds-value");

  const Btn_Menu = document.querySelector(".btn-menu-m");
  const Btn_Menuclose = document.querySelector(".btn-close-menu-m");
  const Header_Wrapper = document.querySelector(".header-wrapper");
  const Body = document.querySelector("body");
  const Submenu = document.createElement("div");

  let day = 1;
  let hours = 12;
  let minutes = 42;
  let seconds = 36;
  function timer_format(n) {
    return n < 10 ? "0" + n : n;
  }
  setInterval(() => {
    if (day === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      day = 1;
      hours = 12;
      minutes = 42;
      seconds = 36;
    }

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
          day--;
        }
      }
    }

    timer_day.textContent = timer_format(day);
    timer_hours.textContent = timer_format(hours);
    timer_minutes.textContent = timer_format(minutes);
    timer_seconds.textContent = timer_format(seconds);
  }, 1000);

  (function () {
    Btn_Menu.addEventListener("click", function () {
      Header_Wrapper.classList.add("active");
      Body.style.overflow = "hidden";
      Submenu.classList.add("submenu-open");
      Submenu.style.zIndex = "1";
      Body.appendChild(Submenu);
    });

    Btn_Menuclose.addEventListener("click", function () {
      Header_Wrapper.classList.remove("active");
      Body.style.overflow = "";
      Submenu.remove();
    });
  })();

  var swiper = new Swiper(".clients-section .mySwiper", {
    loop: true,
    speed: 900,
    pagination: {
      el: ".client-pagination",
      clickable: true,
    },
  });
});
