import {Bot, webhookCallback} from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const bot = new Bot("6525407673:AAFwORsjACAhjN30IyB2V4cZDYrdBkb5_c4")

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()}`));
bot.command("start", (ctx) => ctx.reply("started"))

bot.on("message", async (ctx) => {
    const chat_id = ctx.message.chat_id
    await ctx.reply(chat_id)
});

const handler = webhookCallback(bot, "std/http");


Deno.serve(async (req) => {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("secret") !== bot.token) {
            return new Response("not allowed", {status: 405});
        }
        return await handler(req);
    } catch (err) {
        console.error(err);
    }
    return new Response();
});


// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
