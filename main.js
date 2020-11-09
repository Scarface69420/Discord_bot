const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "nix";

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

// this for test purpose
// client.on("message", (message) => {
//   if (message.content.includes("468694108945383434")) {
//     message.channel.send("Nixon is currently not available");
//   }
// });

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");
  let author = message.author.username;

  if (message.content.includes("468694108945383434")) {
    message.channel.send("Onii-chan is currently not available");
  }
  switch (args[0]) {
    case "help":
      // to use embed > add RichEmbed on the first line of code const {Client,RichEmbed} = require(Discord.js);
      //   const Embed = new RichEmbed()
      //     .setTitle("Helper Embed")
      //     .setColor(0xff0000)
      //     .setDescription("Whatever the message you want");

      message.author.send(`Hello ${author}, this is Nix-bot`);
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

client.login("NzcyODAyMDAyMjc4NTQ3NDk2.X5_98w.9Fbr6gBmL6A2mhq2KAgr5aj6DCY");
