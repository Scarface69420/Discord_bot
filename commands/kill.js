const constants = require("../constants.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kill",
  description: "This is kill command!",
  execute(message, args, userId) {
    let author = message.guild.member(message.author).displayName;
    let userToBeSlapped = message.guild.member(userId).displayName;
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${author} killed ${userToBeSlapped}`)
      .setImage(
        constants.kill_array[
          Math.floor(Math.random() * constants.kill_array.length)
        ]
      );

    message.channel.send(embed);
  },
};
