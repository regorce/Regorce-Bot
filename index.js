const Discord = require ('discord.js')
const {YTSearcher} = require('ytsearcher');
const ytdl = require('ytdl-core');
const ytpl = require('ytpl');
const DiscordAntiSpam = require("discord-anti-spam");
const fs = require ('fs')
const AntiSpam = new DiscordAntiSpam();
const client = new Discord.Client();
var prefix = "!";

client.login("NjQyODk4NzM1MTAxMTE2NDM3.XeejjQ.8DYb2XH3FQBDbTaePUX5JHdrM4I");


        client.on("guildDelete", guild => {
            // this event triggers when the client is removed from a guild.
            console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
            client.user.setActivity(`Serving ${client.guilds.size} servers`);
          });        

const warns = JSON.parse(fs.readFileSync('./warns.json'))

client.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
    .setColor("#6200ea")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":grin: Welcome " + user + " to server " + user.guild.name + " !")
    .setFooter("regorce | Salim")
    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrFButMt2zqMoDrdo0ckYFZcnXp30tZEpeoYWKTz-2np7qT5w&s")
    user.guild.channels.get("651535228325593090").send(joinEmbed)
    user.addRole("644209389015924737")
});

client.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
    .setColor("#6200ea")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":disappointed_relieved:  Sniff... " + user + " Has leave server " + user.guild.name + " !")
    .setFooter("regorce | Salim")
    user.guild.channels.get("651535228325593090").send(leaveEmbed)
})

        client.on('message', async message => {
        
        
            if(message.content.startsWith(prefix + "dm")) {
 
                var args = message.content.split(" ").slice(1);
                var msge = args.join(' ');
 
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                if(!msge) return message.channel.send("Precise un message")
 
                var mpall = new Discord.RichEmbed()
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
                .addField("Regorce", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))
            }
        });
  

        client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})


client.on('message', message => {
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)
    }
})

client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor("000000")
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
    if(message.content.startsWith(prefix + 'rules')) {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
[ ★・rules   |  قوانين السيرفر  ]
Les règles à lire IMPERATIVEMENT pour éviter tous les problèmes.               
⛔️Pas d'insulte
⛔️Pas de racisme
⛔️Pas de spam (Texte, Emoji, etc...).
⛔️Pas de vente de compte Fortnite
⛔️Pas de lien youtube ou twitch (Sauf avec l'accord d'un modérateur).
⛔️Pas de contenu +18 (Photo, vidéo, etc...). 
__
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
  
    `)  
    .setFooter("regorce | Salim")
    message.author
      message.author.sendEmbed(embed)
       message.channel.send("Check Your Private Message " + message.author + " ! ")
        }
}); 

     client.on('message', message => {
    if (!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'count')) {
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('🌍| Regorce info')
.addBlankField(true)
.addField('Member Count',`${message.guild.memberCount}`)
message.channel.send(IzRo);
}    
});


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
})

client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`LegendSystem. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});


client.on('message', message => {
    if(message.content.includes('zaml')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`LegendSystem. `)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'ui')) {
        if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
        var client;
        if(mentionned){
            var client = mentionned; } else {
            var client = message.author;
        }
        let embedP = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .addField("Username", message.author.username)
        .addField("TAG", message.author.discriminator)
        .addField("ID", message.author.id)
        .addField("Compte créé le", message.author.createdAt)
        .addField("Nickname", message.member.nickname)
        .setFooter("UserInfo")
        .setTimestamp()
        
        message.channel.send(embedP);
         }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'bi')) {
message.delete()

        let embedP = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setThumbnail(client.user.AvatarURL)
        .addField("Username", client.user.username)
        .addField("TAG", `**#${client.user.discriminator}**`)
        .addField("ID", client.user.id)
        .addField("Compte créé le", client.user.createdAt)
        .addField("Nombre de serveur", client.guilds.size)
        .setFooter("client Info")
        .setTimestamp()
        
        message.channel.send(embedP);
         }
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'si')) {
message.delete()

        let embedP = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setAuthor(message.guild.name, message.guild.displayAvatarURL)
        .setThumbnail(message.guild.displayAvatarURL)
        .addField("Nom", message.guild.name)
        .addField("TAG", `**#${client.user.discriminator}**`)
        .addField("ID", message.guild.id)
        .addField("Serveur créé le", message.guild.createdAt)
        .addField("Nombre d'utilisateur", message.guild.memberCount)
        .addField("Owner", message.guild.owner)
        .setFooter("Serveur Info")
        .setTimestamp()
        
        message.channel.send(embedP);
         }
})

client.on("ready", async () => {
    console.log(`${client.user.username} is ready for action!`);
    if (config.activity.streaming == true) {
      client.user.setActivity(config.activity.game, {url: 'https://twitch.tv/username'});
    } else {
      client.user.setActivity(config.activity.game, {type: 'WATCHING'});//PLAYING, LISTENING, WATCHING
      client.user.setStatus('dnd'); // dnd, idle, online, invisible
    }
  });
