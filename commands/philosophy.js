module.exports = {
  name: "philosophy",
  description: "this is a philosophy command!",
  execute(message, args, channel) {
    let [arg, ...text] = args;
    channel.send(
      text.join(" ") + `\n-${message.guild.member(message.author).displayName}`
    );
  },
};
