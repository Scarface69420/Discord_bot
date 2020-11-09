module.exports = {
  name: "youtube",
  description: "this sends the youtube link!",
  execute(message, args) {
    let role = message.guild.roles.cache.find((r) => r.name === "Mod");
    //   cache.has(roleId) if role id is known and cache.some(r => r.name === "nameOfTheRole")
    if (message.member.roles.cache.has("772821962903781386")) {
      message.channel.send("https://www.youtube.com/");
    } else {
      message.channel.send(
        "You don't have the role to use this command! So let me change that :)"
      );
      //   to give the memver the role the next time he uses the command
      message.member.roles.add(role).catch(console.error);
    }
  },
};
