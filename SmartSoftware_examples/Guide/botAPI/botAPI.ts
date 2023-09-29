
import {Bot} from "https://deno.land/x/grammy@v1.19.0/mod.ts";

const bot = new Bot('5808842798:AAETfho7rtAFHJ63HuukTL1Ky8AodW260eQ')

async function sendHelloTo12345() {

    await bot.api.sendMessage(5804335591, "Hello!");


    const sentMessage = await bot.api.sendMessage(5804335591, "Hello again!");
    console.log(sentMessage.message_id);
}

// sendHelloTo12345().then()

async function sendHelloTo() {
    await bot.api.sendMessage(5804335591, "<i>Hello grammy!</i>", {
        parse_mode: "HTML",
    });
}

// sendHelloTo()

async function sendHelloToMe() {
    await bot.api.raw.sendMessage({
        chat_id: 5804335591,
        text: "<i>Hello!</i>",
        parse_mode: "HTML",
    });
}

sendHelloToMe()
