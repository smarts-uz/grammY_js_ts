import { Bot } from "https://deno.land/x/grammy@v1.19.0/mod.ts";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
// bot.command("start", (ctx) => ctx.reply("Welcome! Grammy!!!!!!!!!!!!!"));
// // Handle other messages.
// // bot.on("message", (ctx) => ctx.reply("qwerty!"));
//
// bot.on("message", async (ctx) => {
//     const message = ctx.message; // the message object
//     ctx.reply(message.text)
// });
//
// const message = await bot.api.sendMessage(5804335591, "Hi group!");
// console.log(message.chat_id);

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.

// bot.hears("how are you?", async (ctx) => {
//     // `reply` is an alias for `sendMessage` in the same chat (see next section).
//     await ctx.reply("fine", {
//         // `reply_to_message_id` specifies the actual reply feature.
//         reply_to_message_id: ctx.msg.message_id,
//     });
// });

// await bot.api.sendMessage(
//     5804335591,
//     "*Hi\\!* _Welcome_ to [grammY](https://grammy.dev)\\.",
//     { parse_mode: "MarkdownV2" },
// );

bot.command("age", async (ctx) => {
    await ctx.reply("Введите ваш возраст", {
        // Make Telegram clients automatically show a reply interface to the user.
        reply_markup: { force_reply: true },
    });
});

await bot.api.sendMessage(
    5804335591,
    '<b>Hi!</b> <i>Go to google!</i> to <a href="https://google.com">google.com</a>.',
    { parse_mode: "HTML" },
);


bot.start();



