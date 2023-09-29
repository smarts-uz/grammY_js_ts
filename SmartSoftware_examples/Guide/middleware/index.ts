import { Bot } from "https://deno.land/x/grammy@v1.19.0/mod.ts";
// import {Composer} from "https://deno.land/x/grammy@v1.18.1/composer.ts";
import {Composer} from "https://deno.land/x/grammy@v1.18.1/mod.ts";

const bot = new Bot("6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0");

async function responseTime(
    ctx: Context,
    next: NextFunction, // is an alias for: () => Promise<void>
): Promise<void> {
    // take time before
    const before = Date.now(); // milliseconds
    // invoke downstream middleware
    await next(); // make sure to `await`!
    // take time after
    const after = Date.now(); // milliseconds
    // log difference
    console.log(`Response time: ${after - before} ms`);
    ctx.reply(`Response time: ${after - before} ms`)
    ctx.reply(`message_id: ${ctx.msg.message_id}`)
}

// bot.use(responseTime);
const composer = new Composer();
composer.use(responseTime)
bot.use(composer)
bot.command("start", (ctx) => ctx.reply("Started!"));
bot.command("help", (ctx) => ctx.reply("Help text"));

bot.on(":text", (ctx) => ctx.reply("Text!")); // (*)
bot.on(":photo", (ctx) => ctx.reply("Photo!"));

bot.start();
