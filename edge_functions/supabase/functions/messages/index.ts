import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.command("supabase", async (ctx) => await ctx.reply('supabase'));
bot.command("start", async (ctx) => await ctx.reply('started'));
bot.on("message", async (ctx) => await ctx.reply('hello'));
bot.hears("ping", async (ctx) => {
    // `reply` is an alias for `sendMessage` in the same chat (see next section).
    await ctx.reply("pong", {
        // `reply_to_message_id` specifies the actual reply feature.
        reply_to_message_id: ctx.msg.message_id,
    });
});

const myMessages = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("secret") !== bot.token) {
            return new Response("not allowed", { status: 405 });
        }
        return await myMessages(req);
    } catch (err) {
        console.error(err);
    }
    return new Response();
});
