const TelegramBot = require('node-telegram-bot-api');


const token = '627663030:AAHA4Ccq4ZOUVw6HU0GDzwD4cTxo2uG02go';
const bot = new TelegramBot(token, {polling: true});
bot.onText('message', msg=> {
    bot.sendMessage(msg.chat.id, '${msg.from.first_name}, Не не, это Игорян - @stgiero');
})
