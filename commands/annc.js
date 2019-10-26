const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let question = args.slice(0).join(" ");
    let img = `https://cdn.discordapp.com/attachments/552804978285346836/563518255898296377/fba1a05df9fe118a91efc5332d33f334.png` //DevBraydens logo upload your own WITH A LINK
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Insufficient permissions.").then(msg => msg.delete(600000));//Perms feel free to change but know what your doing

    const embed = new Discord.RichEmbed()
    .setTitle("Announcement") 
    .setDescription(`${question}`)	
    .setThumbnail(img)	
    .setColor("#0x0099ff")		
    .setFooter("© 2019 DevBrayden");	
	
    message.channel.send({embed});
}

module.exports.help = {
    name: "annc"
}