const buttons = document.querySelectorAll(".toggleBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const info = btn.nextElementSibling;

    if (!info) return;
    info.classList.remove("hidden");

    void info.offsetWidth;

    info.classList.remove("opacity-0");
    info.classList.add("opacity-100");

    btn.classList.add("hidden");
  });
});