var TelegramBot = require('node-telegram-bot-api');

// ������������� �����, ������� ������� ��� ���.
var token = '627663030:AAHA4Ccq4ZOUVw6HU0GDzwD4cTxo2uG02go';
// �������� ����� �������
var bot = new TelegramBot(token, {polling: true});
bot.onText(`message`, msg=> {
    var userId = ;
    bot.sendMessage(userId, ' �� ��, �i��� ���������� @stgiero');
});