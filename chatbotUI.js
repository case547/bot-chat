const chatbotUI = Object.create(null);

chatbotUI.init = function (bots) {
    const el = (id) => document.getElementById(id);
    const cloneTemplate = (id) => document.importNode(el(id).content, true);

    const history = [];
    let bot = bots[0];

    const composition = el("composition");
    const messages = el("messages");
    el("send-button").onclick = function () {
        const myMessage = composition.value;
        composition.value = "";
        history.push(myMessage);
        const user = localStorage.getItem("name");
        const response = bot.response(history, user);
        history.push(response);

        if (myMessage !== "") {
            const myTemplate = cloneTemplate("my-message");
            myTemplate.querySelector("[name=message]").textContent = myMessage;
            messages.appendChild(myTemplate);

            const theirTemplate = cloneTemplate("their-message");
            const theirMessage = theirTemplate.querySelector("[name=message]");
            theirMessage.textContent = response;
            messages.appendChild(theirTemplate);
            theirMessage.scrollIntoView();
        }
    };

    composition.onkeydown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            el("send-button").click();
        }
    };

    const botList = el("bot-list");
    const botTitle = el("bot-title");
    const botNames = [];
    bots.forEach(function (b, i) {
        const botTemplate = cloneTemplate("bot-listing");
        const botName = botTemplate.querySelector("[name=bot]");
        botNames.push(botName);
        botName.textContent = b.name;
        botList.appendChild(botTemplate);

        botName.onclick = function () {
            bot = b;
            botTitle.textContent = `! You're chatting with ${b.name}`;
            botNames.forEach(function (bn) {
                bn.setAttribute("aria-selected", false);
            });
            botName.setAttribute("aria-selected", true);
        };
        if (i === 0) {
            botName.onclick();
        }

        botName.onkeydown = function (event) {
            if (event.key === "Enter") {
                botName.click();
            }
        };
    });

    let myButton = el("userchange");
    let userName = el("username");

    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName || myName === null) {
            setUserName();
        } else {
            localStorage.setItem("name", myName);
            userName.textContent = myName;
        }
    }

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        userName.textContent = storedName;
    }

    myButton.onclick = function () {
        setUserName();
    };
};

export default Object.freeze(chatbotUI);
