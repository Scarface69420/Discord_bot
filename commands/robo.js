module.exports = {
  name: "robo",
  description: "this is a robo command!",
  execute(message, args) {
    message.channel.send(`https://robohash.org/${message.author.id}`);
  },
};
