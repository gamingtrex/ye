const {MessageEmbed} = require('discord.js');
const api = require("imageapi.js");
module.exports={
    name: "meme",
    description: "This is a meme",
    category: "fun",
    run: async(bot, message, args)=>{
        let subReddits = [
            "meme"
        ]
        let subReddit = subReddits[Math.floor(Math.random() * (subReddits.length))]
        console.log(subReddit)
        let img = await api(subReddit)
        console.log(img)
        const Embed = new MessageEmbed
        .setTitle(`Your meme from r/${subReddit}`)
        .setURL(`https://reddit.com/r/${subReddit}`)
        .setColor('RANDOM')
        .setImage(img)
        message.channel.send(Embed)
    }
}