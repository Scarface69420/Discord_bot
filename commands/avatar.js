module.exports = {
  name: "avatar",
  description: "this is a avatar command!",
  execute(message, args) {
    message.channel.send(
      message.author.displayAvatarURL({
        format: "png",
        dynamic: true,
      })
    );
  },
};
