import "../styles/styles.scss";

const menuLink = document.querySelectorAll(".link");
const header = document.querySelector(".header");
const scrollToSection = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (!href && !href.startsWith("#")) return;
  const section = href.slice(1);
  const top = document.getElementById(section)?.offsetTop || 0;
  window.scrollTo({top, behavior: "smooth"});
};

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    header.classList.add('header-bg');
  }else header.classList.remove('header-bg')
});
const formatValue = (value) => (value < 10 ? `0${value}` : value);
const getTimerValues = (diff) => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (1000 * 60)) % 60,
  hours: (diff / (1000 * 3600)) % 24,
  days: (diff / (1000 * 3600 * 24)) % 30,
});
const startTimer = (date) => {
  const id = setInterval(() => {
    const diff = new Date(date).getTime() - new Date().getTime();
    const values = getTimerValues(diff);
    Object.entries(values).forEach(([key, values]) => {
      const timerValue = document.getElementById(key);
      timerValue.innerText = formatValue(Math.floor(values));
    });
    if (diff < 0) {
      clearInterval(id);
      return;
    }
  }, 1000);
};
startTimer("October 28, 2023 12:00:00");
menuLink.forEach((link) => link.addEventListener("click", scrollToSection));
