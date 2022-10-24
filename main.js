const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('SMN est disponible')
});


client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });


client.login(process.env.TOKEN);
