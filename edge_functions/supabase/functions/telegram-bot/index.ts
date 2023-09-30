import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);




bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()}`));
bot.command("settings", (ctx) => ctx.reply(`Settings!`));



const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("secret") !== bot.token) {
            return new Response("not allowed", { status: 405 });
        }
        return await handleUpdate(req);
    } catch (err) {
        console.error(err);
    }
    return new Response();
});
