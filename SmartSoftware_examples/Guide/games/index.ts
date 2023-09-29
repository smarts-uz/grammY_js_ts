import { Bot, } from "https://deno.land/x/grammy@v1.19.0/mod.ts";
const bot = new Bot("6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0");


bot.command("start", async (ctx) => {
    // Pass the name of the game you created in BotFather, for example "my_game".
    await ctx.replyWithGame("my_game");
});

bot.start()
