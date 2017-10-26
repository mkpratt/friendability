function setActive() {
    var f = document.getElementById("loginForm");
    if (!f.classList.contains("login-active")) {
        f.classList.add("login-active");
    }
    var s = document.getElementById("signup") 
    if (!s.classList.contains("hidden")) {
        s.classList.add("hidden");
    }
}
function setInactive() {
    var f = document.getElementById("loginForm");
    if (f.classList.contains("login-active")) {
        f.classList.remove("login-active");
    }
    var s = document.getElementById("signup") 
    if (s.classList.contains("hidden")) {
        s.classList.remove("hidden");
    }
}