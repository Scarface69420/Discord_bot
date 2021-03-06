const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  description: "this is a help command!",
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(
        `${message.author.username}`,
        `${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}`
      )
      .setAuthor("Henlo")
      .setDescription("pp bot is a fun bot")
      .setThumbnail(
        "https://cdn.discordapp.com/avatars/468694108945383434/a_c52d212378f8073e7bb5aae3f042c7e8.gif"
      )
      .addFields(
        {
          name: "Still Under development!",
          value: "\u200B",
        },
        { name: "Following are the commands:", value: "\u200B" },
        {
          name: "pp hi ",
          value: "Greetings",
          inline: true,
        },
        {
          name: "pp count",
          value: "Displays members in the server.",
          inline: true,
        },
        {
          name: "pp avatar",
          value: "Display user avatar",
          inline: true,
        },
        {
          name: "pp robo",
          value: "Displays a robo picture",
          inline: true,
        },
        {
          name: "pp meme",
          value: "Random meme from reddit",
          inline: true,
        },
        // { name: "\u200B", value: "\u200B" },
        {
          name: "pp ping",
          value: "Pongs back!",
          inline: true,
        },
        {
          name: "pp beep",
          value: "Boops back!",
          inline: true,
        },

        {
          name: "pp philosophy [text]",
          value:
            "Will display the [text] in #🤓-philosophy channel(if you have one).",
          inline: true,
        },
        {
          name: "pp slap @user",
          value: "Will slap the mentioned user.",
          inline: true,
        },
        {
          name: "pp quote",
          value: "Displays random quote. Only in a #🤓-philosophy channel.",
          inline: true,
        },
        {
          name: "pp github [username]",
          value: "Display user's github Account",
          inline: true,
        },
        {
          name: "pp pick [comma seperated options]",
          value: "Will pick any one of the options",
          inline: true,
        },
        {
          name: "pp rps [r,p,s]",
          value: "Play rock, paper, scissors with the bot!",
          inline: true,
        },
        {
          name: "pp brick @user",
          value: "Will brick the mentioned user.",
          inline: true,
        },
        {
          name: "pp cry",
          value: "Crying gif.",
          inline: true,
        },
        { name: "\u200B", value: "\u200B" }
      )
      .addField(
        `Hope you got the commands ${message.author.username}`,
        "Have fun!!"
      )
      .setImage(
        "https://www.elyrsps.net/forums/uploads/monthly_2021_03/image0.thumb.gif.0b892035b2937c2572355a72f222171c.gif"
      )
      .setTimestamp()
      .setFooter(
        "pp-bot",
        "https://pa1.narvii.com/6831/2b060dd90cd5ddbf28111304ac9b0c9b81fda044_128.gif"
      );

    message.author.send(embed);
  },
};
