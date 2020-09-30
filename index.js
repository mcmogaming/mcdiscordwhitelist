const Discord = require('discord.js');
const token = "NzYwMzgyMDM2MDM1ODk1Mjk3.X3LO9A.EmDc4H5H1QHfAScB5pSFaySTZ0g"

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





client.login(token);