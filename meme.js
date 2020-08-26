const Discord = require('discord.js');
const redditFetch = require('reddit-fetch');
redditFetch({

    subreddit: 'meme',
    sort: 'new',
    allowNSFW: true,
    allowModPost: true,
    allowCrossPost: true,
    
    }).then(post => {
        message.channel.send(`Your meme from r/meme: ${post.url}`)
        message.channel.send(`pp!help_reddit for more subreddits`);
    });