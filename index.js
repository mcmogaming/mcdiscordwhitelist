const Discord = require('discord.js');
const keys = require('keys.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        const emoji = guild.emoju.cache.first();
        message.channel.send('Pong. ${emoji}');
    }

    if (message.content === '!newchannel') {
        guild.channels.create
    }
});





client.login(keys.token);