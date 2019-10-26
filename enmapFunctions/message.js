var prefix;
if (message.guild) {
    require("../enmapFunctions/NewGuild.js")(message.guild);

    prefix = EnmapGuildsDb.get(`g${message.guild.id}`, "prefix");
    if (!prefix) prefix === "-"; 
}



if (!args) return message.channel.send("Sorry, please provide a prefix.");
EnmapGuildsDb.set(`g${message.guild.id}`, args[0], "prefix");

message.channel.send(`Ok! The prefix has been changed to ${args[0]}.`);


var prefixStatus = EnmapGuildsDb.get(`g${message.guild.id}`, "prefix");
if (prefixStatus === "-") prefixStatus === "-";

