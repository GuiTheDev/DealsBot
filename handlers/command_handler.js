const fs = require("fs");
const commands = new Map();


module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    
    for(const file of command_files){
        const command = require(`../commands/${file}`);
        
        if(command.name){
            client.commands.set(command.name, command);
            commands.set(command.name, command);
            module.exports.commands = commands;
        } else {
            continue;
        }
    }
}
