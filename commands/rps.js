module.exports = {
  name: "rps",
  description: "this is a rps command!",
  execute(message, rpsoption) {
    let author = message.guild.member(message.author).displayName;
    let rpsArr = ["r", "p", "s"];
    let bot_option = rpsArr[Math.floor(Math.random() * rpsArr.length)];
    // && rpsoption.length !== 1
    if (rpsoption === "r" || rpsoption === "p" || rpsoption === "s") {
      if (bot_option === rpsoption) {
        message.channel.send("Tie! I spared your life");
      } else if (rpsoption === "r") {
        if (bot_option === "s") {
          message.channel.send(`${author} wins!`);
        } else if (bot_option === "p") {
          message.channel.send(`Bot wins!`);
        }
      } else if (rpsoption === "p") {
        if (bot_option === "r") {
          message.channel.send(`${author} wins!`);
        } else if (bot_option === "s") {
          message.channel.send(`Bot wins!`);
        }
      } else if (rpsoption === "s") {
        if (bot_option === "p") {
          message.channel.send(`${author} wins!`);
        } else if (bot_option === "r") {
          message.channel.send(`Bot wins!`);
        }
      }
    } else {
      message.channel.send("Invalid option! Use r,p or s.\neg. pp rps p");
    }
  },
};
