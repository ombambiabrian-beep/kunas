const joinButton = document.getElementById("joinButton");

const welcomeBox = document.getElementById("welcomeBox");
const loginBox = document.getElementById("loginBox");
const backButton = document.getElementById("backButton");


joinButton.addEventListener("click", function() {

    welcomeBox.style.display = "none";
    loginBox.style.display = "block";

});
backButton.addEventListener("click", function() {

    loginBox.style.display = "none";
    welcomeBox.style.display = "block";});
loginButton.addEventListener("click", function () {

    const regNo = document.getElementById("regNo").value;
    const password = document.getElementById("password").value;

    if (regNo === "x"&& password === "1") {

        alert("Login successful!")

        window.location.href = "home.html";

    } else {

        alert("Invalid registration number or password");

    }

});