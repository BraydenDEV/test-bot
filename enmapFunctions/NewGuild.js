module.exports = async (guild) => {
    if (!EnmapGuildsDb.has(`g${guild.id}`)) {
        EnmapGuildsDb.set(`g${guild.id}`, {
            prefix: "-"
        });
    }
}
