var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '627663030:AAHA4Ccq4ZOUVw6HU0GDzwD4cTxo2uG02go';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});
bot.onText(/pidor/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    bot.sendMessage(userId, ' Не не, пiдор однозначно @stgiero');
});