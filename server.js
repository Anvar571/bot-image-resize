require("dotenv").config();

const express = require("express");
const {Telegraf} = require("telegraf");

const token = process.env.TOKEN;
const app = express();
const port = process.env.PORT;
const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply(`
${ctx.chat.first_name} salom botga xush kelibsiz
`))

bot.launch();

app.listen(port, ()=>{
    console.log(`server listen on ${port} port`);
})

