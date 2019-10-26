const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry pal, you can't do that."); //premissions for command usage
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user"); //If the bot couldn't find the user it returns with this massage
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!"); // If the person doesn't put a role in the command in Disocrd 
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");// If the bot couldn't find the role means you didn't spell it right

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`) //After member is given the role the bot responds with the following
  }
}

module.exports.help = {
  name: "addrole"
}
