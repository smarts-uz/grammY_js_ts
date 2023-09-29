import { Bot, InputFile } from "https://deno.land/x/grammy@v1.19.0/mod.ts";
// import { createReadStream } from "fs";
// import { URL } from "url";


const bot = new Bot("6512809429:AAEugT-aHuLgGOitPnHlOS0y6dZKqjWbFA0");


bot.on("message:voice", async (ctx)=>{
    const voice = ctx.msg.voice;
    const duration = voice.duration;
    await ctx.reply(`Your voice message is ${duration} seconds long.`)

    const fileId = voice.file_id;
    await ctx.reply("The file identifier of your voice message is: " + fileId);

    const file = await ctx.getFile(); // valid for at least 1 hour
    const path = file.file_path; // file path on Bot API server
    await ctx.reply("Download your own file again: " + path);





// Send via URL.
    await ctx.replyWithPhoto("https://grammy.dev/images/grammY.png")
    await ctx.replyWithPhoto("https://www.istockphoto.com/photo/tashkent-tv-tower-aerial-shot-during-sunset-in-uzbekistan-gm1034587098-276993933")

    // new InputFile(fs.createReadStream("D:/images/avatars/download (1).jpg"))
    // await ctx.replyWithPhoto(new InputFile("D:/images/avatars/download (1).jpg"))
    // await ctx.replyWithPhoto(new InputFile("./img/download.jpg"))


    // new InputFile(new URL("https://grammy.dev/images/grammY.png"));
    // new InputFile({ url: "https://grammy.dev/images/grammY.png" });

    await bot.api.sendPhoto(5804335591, new InputFile("./img/download.jpg"), {
        caption: "my_photo.jpg",
    });

    await ctx.replyWithDocument("./doc/text.txt")
})

bot.start()
