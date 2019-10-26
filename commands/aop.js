const Discord = require("discord.js")

var areas = [
    "Blaine County",
    "Downtown Los Santos",
    "Grapeseed",
    "Little Seoul",
    "Los Santos",
    "Mount Chiliad",
    "Rockford Hills\"",
    "South Los Santos",
    "Vespucci Beach",
    "Vinewood",
];
//above are what the bot will change every now and then.

module.exports.run = async (bot, message, args) => {

      var DAD = new Discord.RichEmbed()
      .setDescription(jokes[Math.floor(Math.random() * jokes.length)])

      .setColor("#0x0099ff")

      message.channel.send(DAD);

}

module.exports.help = {
    name: "aopfivem"
}