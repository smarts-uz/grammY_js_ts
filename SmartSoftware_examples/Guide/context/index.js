"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mod_ts_1 = require("https://deno.land/x/grammy@v1.19.0/mod.ts");
var bot = new mod_ts_1.Bot("5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ");
bot.command("start", function (ctx) { return ctx.reply(ctx); });
