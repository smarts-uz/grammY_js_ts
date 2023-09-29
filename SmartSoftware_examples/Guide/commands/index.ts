import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const bot = new Bot('6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0')


bot.command("start", (ctx) => ctx.reply("Welcome! Grammy!!!!!!!!!!!!!"));
// Respond to the command /help.
bot.command("help", (ctx) => ctx.reply("help"));
bot.command("settings", (ctx) => ctx.reply("settings"));

bot.command("add", async (ctx) => {
    // `item` will be "apple pie" if a user sends "/add apple pie".
    // const item = ctx.match;
    console.log(item)
    ctx.reply(ctx.message.text)
});


// Respond to the commands /a, /b, /c, and /d.
// bot.command(["a", "b", "c", "d"] /* , ... */);




await bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Show help text" },
    { command: "settings", description: "Open settings" },
    { command: "add", description: "add" },
]);
bot.start()

