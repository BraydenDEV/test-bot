const urban = require('relevant-urban'),
  Discord = require('discord.js'); 

exports.run = async (client, message, args, tools) => {

  if (!args[0]) return message.channel.send(`***Please specify some text!***`);

  let res = await urban(args.join(' ')).catch(e => {
    
    return message.channel.send('***Sorry, that word was not found!***');
  });

  let urbanembed = new Discord.RichEmbed()
    .setColor('RANDOM') 
    .setTitle(res.word) 
    .setUrl(res.urbanURL) 
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`) 
    .setField('Author', res.author, true) 
    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)

  
  if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
    embed.addField('Tags', res.tags.join(', '), true)
  }

 
  message.channel.send(embed); 

}

module.exports.help = {
    name: "urban"
  }