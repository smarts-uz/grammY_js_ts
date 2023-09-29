import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const bot = new Bot('6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0')





bot.command("start", (ctx) => {
    ctx.reply('Go!')
    bot.on("message:text");
});

bot.start()
