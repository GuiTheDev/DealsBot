module.exports = {
    name : 'test',
    aliases: [],
    description: "See amazon deals",
    permissions: [],
    async execute(client, message, args, cmd, Discord, MessageEmbed) {
        function pog() {
        message.reply('Pog testing')
        }

        pog();

        setInterval(function(){
            pog()
        }, 30000)
    }

}
