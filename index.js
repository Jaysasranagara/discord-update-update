require('dotenv').config()

const { Client, MessageAttachment, Message } = require('discord.js');
const client = new Client();

const sadWords = ["kurang pede", "nyerah", "ga percaya diri", "capek"]

// const attachment = new MessageAttachment ('https://i.imgur.com/ADxrAFS.jpg')




/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
 client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  
  client.on("message", msg => {
    

    if (msg.author.id == '852531807072813086')
        return;

    if (msg.content === "bingung") {
      msg.reply("sudah check stackoverflow.com atau google.com belum ka?");
    }

    if (msg.content === "!silabus") {
        msg.reply('https://discord.com/channels/696903768117084281/838708808423178260/846325598230282241')
    }

    if (msg.content === "!jadwal") {
        msg.reply('bisa di cek di sini ka https://sites.google.com/glints.com/bootcamp/ib12?authuser=0')
    }

    if (sadWords.includes(msg.content.replace('!', ''))) {
        const attachment = new MessageAttachment('https://i.imgur.com/ADxrAFS.jpg');
        msg.channel.send(`${msg.author},`, attachment);
      }
    
    
    

   
      

    if (msg.content === "bro") {
        msg.reply('naon');
    }

    if (msg.content === "selamat datang") {
        msg.channel.send('selamat menikmati');
    }
    if (msg.content === "!miniproject") {
        msg.reply('https://gist.github.com/isumizumi/1582ff298d247d61c6504c11d178fcb9');
    }
    
    if (msg.content === "!repoteame") {
        msg.reply('https://gitlab.com/binarxglints_batch12/miniproject/team-e');
    }

    if (msg.content === "!repoteama") {
        msg.reply('https://gitlab.com/binarxglints_batch12/miniproject/team-a');
    }

    if (msg.content === "!repoteamb") {
        msg.reply('https://gitlab.com/binarxglints_batch12/miniproject/team-b');
    }

    if (msg.content === "!repoteamc") {
        msg.reply('https://gitlab.com/binarxglints_batch12/miniproject/team-c');
    }

    if (msg.content === "!repoteamd") {
        msg.reply ('https://gitlab.com/binarxglints_batch12/miniproject/team-d');
    }

    if (msg.content === "!repoteamf") {
        msg.reply ('https://gitlab.com/binarxglints_batch12/miniproject/team-f');
    }

    if(msg.content === "!helpme") {
        msg.reply
            ('!repoteam = masuk ke link repo minproj kalian. !miniproject = ke github mengenai minproj. !silabus = jadwal kelas dan pelajaran. !jadwal = ke jadwal batch 12 yg di google site itu');
    }

    if(msg.content === "!docsqlcli") {
        msg.reply ('https://discord.com/channels/696903768117084281/849479183310258196/849529707291738193');
    }
    
    if(msg.content === "!test") {
        message.reply ('test')
    }

  

});

client.login(process.env.DISCORD_TOKEN)