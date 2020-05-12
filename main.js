import simpleBots from "./simpleBots.js";
import advancedBots from "./advancedBots.js";
import chatbotUI from "./chatbotUI.js";

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
