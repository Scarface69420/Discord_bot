const fetch = require("node-fetch");
module.exports = {
  name: "quote",
  description: "this is a quote command!",
  async execute(message, args, channel) {
    const { quote, author } = await fetch(
      "https://free-quotes-api.herokuapp.com/"
    ).then((response) => response.json());
    channel.send(`${quote}\n-${author}`);
  },
};
