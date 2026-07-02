const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = "YOUR_BOT_TOKEN"; // BotFather bergan token
const bot = new TelegramBot(token, { polling: true });

// /start komandasi
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom ✂️ Barber Navbat botiga xush kelibsiz!");
});

// /navbat komandasi
bot.onText(/\/navbat/, (msg) => {
  const jadval = `
  Bugungi navbat:
  10:00 - Ali
  11:00 - Vali
  12:00 - Guli
  `;
  bot.sendMessage(msg.chat.id, jadval);
});

// Express server (Render uchun)
const app = express();
app.get('/', (req, res) => res.send('Barber Bot ishlayapti!'));
app.listen(3000, () => console.log('Server 3000-portda ishlayapti'));
