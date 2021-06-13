module.exports = {
  name: "github",
  description: "this is a github command!",
  execute(message, accName) {
    message.channel.send(`https://github.com/${accName}`);
  },
};
