// Toogle Navigation //
const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  header.classList.toggle("show-nav");
});

// Tab Features //
const tabsButton = document.querySelectorAll(".tab");
const features = document.querySelectorAll(".feature");

tabsButton.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Remove class from all buttons
    tabsButton.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");

    let id = e.target.dataset.id;

    // Remove class from all features
    features.forEach((feature) => feature.classList.remove("show"));

    const showFeature = document.querySelector(`#${id}`);
    showFeature.classList.add("show");
  });
});

// FaQ //
const questions = document.querySelectorAll(".question");
const questionsHead = document.querySelectorAll(".question__head");

questionsHead.forEach((ques) => {
  ques.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    parent.classList.toggle("show-ans");
  });
});

// Email Validation //
const form = document.querySelector(".sign-up__form");
const inputGroup = document.querySelector(".sign-up__input-group");
const input = document.querySelector(".sign-up__input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.value;
  const pattern = /\S+\@\S+\.\S+/;

  if (!pattern.test(email)) {
    showMsg("Whopes make sure its an email!", "error-show");
  } else {
    showMsg("We will get in touch", "success");
    // Clear input
    input.value = "";
  }
});

// Show Message while submit form
function showMsg(text, action) {
  inputGroup.classList.add(action);
  const span = inputGroup.querySelector("span");
  span.innerText = text;

  // Remove after a ms
  setTimeout(() => {
    inputGroup.classList.remove(action);
  }, 2000);
}
