import { Bot } from "https://deno.land/x/grammy@v1.19.0/mod.ts";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Grammy!!!!!!!!!!!!!"));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("qwerty!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();