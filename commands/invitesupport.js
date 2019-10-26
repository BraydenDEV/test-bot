const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("DEVBrayden")
  .addField("About", "The DEVBrayden server is a server for people in the FiveM community to share there creations and seak support with there Dev problems. It's also a fan base for fans of DEVBraydens creations!")
  .setColor("#0x0099ff")
  .addField("Invite", "https://discord.gg/VfyskQD")
  .setFooter(`Invite Command`)
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "invite"
}