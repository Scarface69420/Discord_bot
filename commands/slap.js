const constants = require("../constants.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "slap",
  description: "This is slap command!",
  execute(message, args, userId) {
    let author = message.guild.member(message.author).displayName;
    let userToBeSlapped = message.guild.member(userId).displayName;
    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${author} slaps ${userToBeSlapped}`)
      .setImage(
        constants.slap_array[
          Math.floor(Math.random() * constants.slap_array.length)
        ]
      );

    message.channel.send(embed);
  },
};
