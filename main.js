import simpleBots from "./simpleBots.js";
import advancedBots from "./advancedBots.js";
import chatbotUI from "./chatbotUI.js";

let myButton = document.querySelector("button");
let userName = document.getElementById("username");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        sessionStorage.setItem("name", myName);
        userName.textContent = myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem("name");
    userName.textContent = storedName;
}

myButton.onclick = function () {
    setUserName();
};

window.addEventListener("DOMContentLoaded", function () {
    const bots = [
        ...Object.values(simpleBots),
        advancedBots.newCountdownBot({
            name: "Countdown",
            from: 5,
            then: "Boom"
        }),
        advancedBots.newMathBot()
    ];
    chatbotUI.init(bots);
});
