const header=document.querySelector(".header"),hamburger=document.querySelector(".header__hamburger");hamburger.addEventListener("click",(()=>{header.classList.toggle("show-nav")}));const tabsButton=document.querySelectorAll(".tab"),features=document.querySelectorAll(".feature");tabsButton.forEach((e=>{e.addEventListener("click",(e=>{tabsButton.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active");let t=e.target.dataset.id;features.forEach((e=>e.classList.remove("show")));document.querySelector(`#${t}`).classList.add("show")}))}));const questions=document.querySelectorAll(".question"),questionsHead=document.querySelectorAll(".question__head");questionsHead.forEach((e=>{e.addEventListener("click",(e=>{e.target.parentElement.classList.toggle("show-ans")}))}));const form=document.querySelector(".sign-up__form"),inputGroup=document.querySelector(".sign-up__input-group"),input=document.querySelector(".sign-up__input");function showMsg(e,t){inputGroup.classList.add(t);inputGroup.querySelector("span").innerText=e,setTimeout((()=>{inputGroup.classList.remove(t)}),2e3)}form.addEventListener("submit",(e=>{e.preventDefault();const t=input.value;/\S+\@\S+\.\S+/.test(t)?(showMsg("We will get in touch","success"),input.value=""):showMsg("Whopes make sure its an email!","error-show")}));