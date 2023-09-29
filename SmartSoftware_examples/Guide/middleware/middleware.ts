import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";
const bot = new Bot("6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0");

import { type Middleware } from "https://deno.land/x/grammy@v1.19.0/mod.ts";
type Middleware = MiddlewareFn | MiddlewareObj;
// Omitted type parameters again.


export const middleware = ()=> {
    type MiddlewareFn = (ctx: Context, next: NextFunction) => MaybePromise<unknown>;
// with
    type NextFunction = () => Promise<void>;
    bot.on(":text", (ctx, next) => ctx.reply("Text!"));
    bot.command("start", (ctx, next) => ctx.reply("Command!"));
    //
    // bot.start();
}

export default middleware

