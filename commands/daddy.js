const Discord = require("discord.js")

var jokes = [
    "Brayden is a hotty",
    "Want to see your mom happy call Brayden",
    "I as a bot enjoy watching Brayden Suck toes in his free time.",
    "Love is noice when daddy brayden walks in the room!!!",
];

module.exports.run = async (bot, message, args) => {

      var DAD = new Discord.RichEmbed()
      .setDescription(jokes[Math.floor(Math.random() * jokes.length)])

      .setColor("#0x0099ff")

      message.channel.send(DAD);

}

module.exports.help = {
    name: "daddy"
}