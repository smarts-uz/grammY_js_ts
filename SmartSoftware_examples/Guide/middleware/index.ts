import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";
const bot = new Bot("6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0");
import middleware from './middleware.ts'


bot.use(middleware());

bot.command("start", middleware);
bot.command("help", (ctx) => ctx.reply("Help text"));

bot.on(":text", (ctx) => ctx.reply("Text!")); // (*)
bot.on(":photo", (ctx) => ctx.reply("Photo!"));




bot.start();



