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
            name: "Allahu AkBot",
            from: 5,
            then: "ALLAHU AKBAR!!!"
        }),
        advancedBots.newMathBot()
    ];
    chatbotUI.init(bots);
});
