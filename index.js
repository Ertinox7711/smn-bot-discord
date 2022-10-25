const Discord = require("discord.js");





client.once('ready', () => {
    console.log('SMN est disponible')
});



const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: ping,
    description: pong,
  },
];

const rest = new REST({ version: '10' }).setToken(MTAzMzkwMzA2MDA5MjcxOTE1NA.GWUaQl.Yj8whUdtr8HANFokUx4TUQW0ffY_a9AffpYMik);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();



const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});









client.login(process.env.TOKEN);
