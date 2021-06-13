module.exports = {
  name: "pick",
  description: "this is a pick command!",
  execute(message, args) {
    let [pick, ...options] = args;
    let optionStrings = options.join(" ");
    let arr = optionStrings.split(",");
    message.channel.send(
      `I pick ${arr[Math.floor(Math.random() * arr.length)]}`
    );
  },
};
