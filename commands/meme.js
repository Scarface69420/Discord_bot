const fetch = require("node-fetch");
module.exports = {
  name: "meme",
  description: "this is a meme command!",
  async execute(message, args) {
    const { url } = await fetch("https://meme-api.herokuapp.com/gimme").then(
      (response) => response.json()
    );
    message.channel.send(url);
  },
};
