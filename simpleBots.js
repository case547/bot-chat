const simpleBots = Object.create(null);

simpleBots.senateBot = {
    "name": "Senate Bot",
    "response": function (ignore, user) {
        const senateOptions = [
            `It's over, ${user}! I have the high ground!`,
            "Hello there.",
            `GENERAL ${user.toUpperCase()}! You are a bold one.`,
            `Not just the men, but the women and ${user} too.`,
            "You have become the very thing swore to destroy!",
            `Are you threatening me, Master ${user}?`
        ];
        return senateOptions[Math.floor(Math.random() * senateOptions.length)];
    }
};

simpleBots.brennanBot = {
    "name": "BrennanBot",
    "response": () => "depre."
};

simpleBots.botaro = {
    "name": "Botaro",
    "response": function (history) {
        return `${history[history.length - 1]}? Oh yeah I had a crush on her in Year 8.`;
    }
};

export default Object.freeze(simpleBots);
