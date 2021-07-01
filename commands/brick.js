const constants = require("../constants.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "brick",
  description: "This is brick command!",
  execute(message, args, userId) {
    let author = message.guild.member(message.author).displayName;
    let userToBeSlapped = message.guild.member(userId).displayName;
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${author} bricked ${userToBeSlapped}`)
      .setImage(
        constants.brick_array[
          Math.floor(Math.random() * constants.brick_array.length)
        ]
      );

    message.channel.send(embed);
  },
};
