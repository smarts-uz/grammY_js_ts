import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";

// const bot = new Bot("5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ"); // <-- put your bot token between the ""


// bot.command("start", (ctx) => {
//
//     ctx.reply('Go!')
// });

// bot.on("message", (ctx) => {
//     const txt = ctx.message.text;
//     const id = ctx.message.message_id;
//     ctx.reply(txt)
//     ctx.reply('ID: '+id)
// });

// bot.on("edited_message", async (ctx) => {
//     // Get the new, edited, text of the message.
//     const editedText = ctx.editedMessage.text;
//     ctx.reply(editedText)
// });




// bot.on("message:entities", async (ctx) => {
//     // Get all the entities.
//     const entities = ctx.entities();
//
//     // Get the first entity's text.
//     entities[0].text;
//
//     // Get email entities.
//     const emails = ctx.entities("email");
//
//     // Get phone and email entities.
//     const phonesAndEmails = ctx.entities(["email", "phone"]);
//
//     ctx.reply(emails)
//     ctx.reply(phonesAndEmails)
// });


// bot.on("message", (ctx)=>{
//    if(ctx.hasCommand("start")) ctx.reply('yes')
// })
//
// bot.on("message", (ctx)=>{
//     ctx.reply("^ This is a message!", {
//         reply_to_message_id: ctx.msg.message_id,
//     });
// })


const BOT_DEVELOPER = 5804335590; // bot developer chat identifier

// Define custom context type.
interface BotConfig {
    botDeveloper: number;
    isDeveloper: boolean;
}
type MyContext = Context & {
    config: BotConfig;
};

const bot = new Bot<MyContext>("5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ");

// Set custom properties on context objects.
bot.use(async (ctx, next) => {
    ctx.config = {
        botDeveloper: BOT_DEVELOPER,
        isDeveloper: ctx.from?.id === BOT_DEVELOPER,
    };
    await next();
});

// Define handlers for custom context objects.
bot.command("start", async (ctx) => {
    if (ctx.config.isDeveloper) await ctx.reply("Hi mom!");
    else await ctx.reply("Welcome");
});



bot.start();
