const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const prefix = "pp";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Nix-bot is online!");
});

// this is for test purpose
// client.on("message", (message) => {
//   if (message.content.includes("468694108945383434")) {
//     message.channel.send("Nixon is currently not available");
//   }
// });

client.on("message", (message) => {
  let args = message.content.substring(prefix.length + 1).split(" ");

  let author = message.author.username;

  if (message.content.includes("468694108945383434")) {
    message.channel.send("Onii-chan is currently not available");
  }
  if (message.content.includes("684683991936532492")) {
    message.channel.send("Baka   is currently not available");
  }
  switch (args[0]) {
    case "help":
      // to use embed > add RichEmbed on the first line of code const {Client,RichEmbed} = require(Discord.js);
      const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(
          `${author}`,
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
            name: "pp avatar",
            value: "Display user avatar",
            inline: true,
          },
          { name: "\u200B", value: "\u200B" },
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

      // message.author.send(
      //   `Hello ${author}, this is Nix-bot.\nTo use commands add prefix - pp and the command.\nFor eg. pp hi.\nThe commands are hi,avatar,ping,beep`
      // );
      break;

    case "avatar":
      message.channel.send(
        `Your avatar: ${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}`
      );
      break;

    case "hi":
      message.channel.send(`Hello ${author}`);
      break;

    case "beep":
      message.channel.send(`boop!`);
      break;

    case "ping":
      client.commands.get("ping").execute(message, args);
      break;

    case "youtube":
      client.commands.get("youtube").execute(message, args);
      break;
  }
});

// Basic method to create custom commands
// client.on("message", (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   const args = message.content.slice(prefix.length).split(/ +/); //it is (" ") same as (/ +/)
//   const command = args.shift().toLowerCase();

//   if (command === "ping") {
//     client.commands.get("ping").execute(message, args);
//     // message.channel.send("pong!");
//   } else if (command == "youtube") {
//     client.commands.get("youtube").execute(message, args);
//   } else {
//     // message.channel.send("This is not a recognized command!");
//   }
// });

client.login(process.env.TOKEN);
