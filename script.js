const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupBtn.addEventListener("click", () => {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    signupBtn.classList.remove("active");
    loginBtn.classList.add("active");
});

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Sign Up submitted");
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Log In submitted");
});
