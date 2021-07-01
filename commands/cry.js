const constants = require("../constants.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "cry",
  description: "This is cry command!",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(
        constants.cry_array[
          Math.floor(Math.random() * constants.cry_array.length)
        ]
      );

    message.channel.send(embed);
  },
};
// let author = message.guild.member(message.author).displayName;
// .setTitle(`${author}'s crying`)
