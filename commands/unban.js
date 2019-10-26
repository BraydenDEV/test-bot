const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#0x0099ff")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`unban` **You Need A channel call staff-log** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', 'staff-log', 'log');//mod-log channel name. change for you
  if (!modlog) return message.reply('`staff-log` Cant Find Channel.');//don't find mod-log channel.
  if (!user) return message.reply('**You Must Have the** **__ID__**').catch(console.error);
  message.guild.unban(user);
  if (reason.length < 1) return message.reply('**unBan You did not specify the removal reason**');//don't forget unban reason

  const embed = new Discord.RichEmbed()
    .setColor("#0x0099ff")
    .setTimestamp()
    .addField('Action:', 'Ban lifting ')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Authorized By:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};

module.exports.help = {
 name: "unban"
}