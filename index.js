var TelegramBot = require('node-telegram-bot-api');

// ������������� �����, ������� ������� ��� ���.
var token = '627663030:AAHA4Ccq4ZOUVw6HU0GDzwD4cTxo2uG02go';
// �������� ����� �������
var bot = new TelegramBot(token, {polling: true});
bot.onText(/pidor/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];

    bot.sendMessage(userId, ' �� ��, �i��� ���������� @stgiero');
});