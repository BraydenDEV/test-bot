const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
exports.run = async(client, message, ops) => {
    let args = message.content.split(' ')

    let topic = args.join(' ').slice(8);  
    let id = message.author.id;
    if (message.guild.channels.find(channel => channel.name === `ticket-${id.slice(14)}`)) return message.author.send('❌ You have a Ticket open ❌');
    message.guild.createChannel(`ticket-${id.slice(14)}`, "text").then(c => {
        let everyone = message.guild.roles.find(role => role.name === `@everyone`);
        let staff = message.guild.roles.find(role => role.name === `Support Team`);
        c.overwritePermissions(everyone, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(staff, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        }).then(chnl => {
            message.channel.send(`:white_check_mark: Ticket created! Name: #ticket-${id.slice(14)}`);
        let newTicketEmbed = new Discord.RichEmbed()
            .setTitle(`Ticket Created By ${message.author.username}`)
            .setColor('0x0099ff')
            .setDescription(`Topic: **${topic}**`)
            .addField(`Hello ${message.author.tag}`, `How can we help you?`) 
            .addField(`Close the ticket?`, '-close to close The Ticket')
            .setTimestamp();
            chnl.send(newTicketEmbed);
        })
    })
};

module.exports.help = {
  name: "ticket"
}
