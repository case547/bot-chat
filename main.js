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
        localStorage.setItem("name", myName);
        // Create and store data item "name" = myName using localStorage API
        userName.textContent = myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
    // If "name" data doesn't exist, setUserName() is run to create it
} else {
    let storedName = localStorage.getItem("name");
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
