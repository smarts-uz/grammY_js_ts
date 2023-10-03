// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN"))

bot.command("Go", ctx => ctx.reply("Hello"))

await bot.api.sendMessage(5804335591, "Hello!");

const handler = webhookCallback(bot, 'std/http')

serve(async (req) => {
    try {
        const url = new URL(req.url);
        if (url.searchParams.get("secret") !== bot.token) {
            return new Response("not allowed", { status: 405 });
        }
        return await handler(req);
    } catch (err) {
        console.error(err);
    }
    return new Response();
}).then()

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
