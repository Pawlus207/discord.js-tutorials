const discord = require('discord.js');

const bot = new discord.Client();

bot.on("ready", () => {
    console.log("The bot is ready and online!")
})

bot.login('ODI0OTkyOTUwNzYwMzc0MzMz.YF3cjw.qO2qUkLddsYyVovU6-InBw5PVwc')
