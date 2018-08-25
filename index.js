const TelegramBot = require('node-telegram-bot-api');
const token = '688244892:AAH81QEQaOQ-ywA-OjZGOGuHVQqEQneLpmw';
const bot = new TelegramBot(token, {polling: true});
bot.onText('message', msg=> {
    bot.sendMessage(msg.chat.id, '${msg.from.first_name}, Не не, это Игорян - @stgiero');
})
