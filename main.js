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

client.on("message", (message) => {
  let author = message.author.username;

  if (message.author.bot) return;

  if (message.content.includes("468694108945383434")) {
    // message.channel.send("Onii-chan is currently not available");
    // console.log(message.content);
    client.users
      .fetch("468694108945383434")
      .then((user) =>
        user.send(
          `Onii-chan\n${
            message.author.username
          } tagged you and said: ${message.content.replace(
            "<@!468694108945383434>",
            "[Nixon]"
          )}\nChannel name: ${message.channel}`
        )
      );
  }
  if (message.content.includes("sed")) {
    message.channel.send(`Very sad ${message.author.username}`);
  }
  if (message.content.includes("throw yourself off a bridge")) {
    message.channel.send(`Yeet! ${message.author.username}`);
  }
  //  "809295234848260127" - philosophy channel id
  const philoChannel = client.channels.cache.find(
    (channel) => channel.name === "🤓-philosophy"
  );

  if (message.content.split(" ")[0] === "pp") {
    let args = message.content.substring(prefix.length + 1).split(" ");

    switch (args[0]) {
      case "help":
        client.commands.get("help").execute(message, args);
        break;

      case "meme":
        client.commands.get("meme").execute(message, args);
        break;
      case "avatar":
        client.commands.get("avatar").execute(message, args);
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

      case "robo":
        client.commands.get("robo").execute(message, args);
        break;
      case "count":
        message.channel.send(`There are ${message.guild.memberCount} members.`);
        break;
      case "philosophy":
        client.commands.get("philosophy").execute(message, args, philoChannel);
        break;
      case "slap":
        let [argslap, name] = args;
        const user_id = name.slice(3, name.length - 1);
        const foundUser = client.users.cache.find(
          (user) => user.id === user_id
        );
        client.commands.get("slap").execute(message, args, foundUser.id);
        break;
      case "quote":
        if (message.channel.id === philoChannel.id) {
          client.commands.get("quote").execute(message, args, philoChannel);
          message.delete();
        } else {
          message.channel.send(
            "This command will work in philosophy channel Baka."
          );
        }
        break;
      case "delete":
        message.delete();
        message.channel.send("Hehe command got deleted");
        break;
      case "github":
        let githubAcc = args[1];
        client.commands.get("github").execute(message, githubAcc);
        break;
      case "pick":
        client.commands.get("pick").execute(message, args);
        break;
      case "kill":
        let [argkill, kname] = args;
        const kuser_id = kname.slice(3, kname.length - 1);
        const kfoundUser = client.users.cache.find(
          (user) => user.id === kuser_id
        );
        client.commands.get("kill").execute(message, args, kfoundUser.id);
        break;
      case "rps":
        let [rpscommand, rpsoption] = args;
        client.commands.get("rps").execute(message, rpsoption);
        break;
      case "brick":
        let [argbrick, bname] = args;
        const buser_id = bname.slice(3, bname.length - 1);
        const bfoundUser = client.users.cache.find(
          (user) => user.id === buser_id
        );
        client.commands.get("brick").execute(message, args, bfoundUser.id);
        break;
      case "cry":
        client.commands.get("cry").execute(message, args);
        break;
    }
  }
});

client.login(process.env.TOKEN);
