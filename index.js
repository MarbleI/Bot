const { token,CLIENT_ID } = require('./config.json')
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
const assBanned = ('./pictures/getAssBanned.jpg')
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('messageCreate', async message => {
 if(message.author.bot == true) return;
 if(message.channel.id != '876626398402465798') return;
 client.channels.cache.get('1017455128263016479').send(`${message.content}`)
});
 
client.on("messageCreate", message => {
    if(message.content === "!ping") {
      return message.reply("Bobby is Online!");
    }
 });
 
 client.on("messageCreate", message => {
    if(message.author.bot == true) return;
    if(message.content.toLowerCase() === "heheheha") {
        message.channel.send(message.content);
    }
 });
 
 client.on("messageCreate", message => {
  if(message.author.bot == true) return;
  if(message.content.toLowerCase() === "get that ass banned") {
      message.channel.send({files:[assBanned]});
  }
});


 client.on('guildMemberAdd', member => {
    member.guild.channels.get('876626398402465798').send("Welcome"); 
});
 
 
client.login(token);