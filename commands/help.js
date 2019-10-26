const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("Commands")
  .addField("aopfivem ", "This will give out a random location in GTA 5")
  .addField("botinfo", "Tells information about the bot!")
  .addField("daddy", "Command lets you receive a nice message from Brayden!")
  .addField("love", "The bot will send back a inference about your releship with the person make sure you do -love @user")
  .addField("notice", "Just a simple fun command if you want to be seen!")
  .addField("poll ", "Allows you to get others to express how they feel about your question,etc.")
  .addField("report  ", "You can report a member just do (-report @user reason)")
  .addField("ticket", "Need to talk to staff about something important make a ticket.")
  .addField("dadjoke ", "Sends you a random dad joke back")
  .addField("invite", "Gives you a invite to share!")
  .addField("botreport", "Makes a new channel with the staff and Brayden for you to share a bot bug.")
  .setColor("#0x0099ff")
  .addField("Invite", "https://discord.gg/VfyskQD")
  .setFooter(`Commands for Members!`)
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}