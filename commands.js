const config = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = config.prefix;

// Команды //

/* async function test(HBbot, mess, channeles, args) {
    //mess.channel.send("1");
  // const channel = client.channels.cache.get('<id>');
    if (!mess.channel.id === '842852900300652584') return;

    var messages = await getAllMessages(mess);
    var months = [
    ["января", "январь"],
    ["февраля", "февраль"],
    ["марта", "март"],
    ["апреля", "апрель"],
    ["мая", "май"],
    ["июня", "июнь"],
    ["июля", "июль"],
    ["августа", "август"],
    ["сентября", "сентябрь"],
    ["октября", "октябрь"],
    ["ноября", "ноябрь"],
    ["декабря", "декабрь"],
    ];
    var re = new RegExp(formDateRule(months), "ig");
    var reg = new RegExp(
      `\\d{1,2} (${formDateRule(months)})|\\d{1,2}(\\.|\\,)\\d{1,2}`,
    "ig"
  );
  for (var message of messages) {
    var match = message.content.match(reg);
    if (match) {
      var str = match[0];
        var date = str.split(/ |\.|\,/gi);
        date[0] = +date[0];
        date[1] = +date[1].toLowerCase().replace(re, (m) => {
            //console.log(m);
            return findIndex(months, m) + 1;
        });
      Ydate = new Date();
      DYdate = Ydate.getDate();
        MYdate = Ydate.getMonth() + 1;
        //console.log(message.author.id);
        userssss = message.author.id;
        console.log(userssss);
        if (date[0] == DYdate && date[1] == MYdate ) {
            //idkf.channel.send("!");
            //var autorname = mess.guild.members.nickname;
             //message.author.send("С днем рождения Бордер. Я чень твоей вайфу юкари. Я бегаю по серверу генсоке спейс програм и раздаю каждому именнинику и именнинице тортики. Вот и ты возьми. Я попрошу юкари прийти к тебе, но не обещаю т.к она может быть слишком ленивой. С днем рожения. Сил, здоровья и везенья!");
            //message.author.send("С днем рождения ");
            //var user = await HBbot.users.fetch("701966708239237191");
            //console.log(user);
            console.log(userssss);
            mess.guild.members.fetch(userssss).then((user) => {
                user.send("все ок.");
                
            }).catch((err) => {
                console.log("User not in guild");
            });
            

            //user.send("С днем рождения Бордер. Я чень твоей вайфу юкари. Я бегаю по серверу генсоке спейс програм и раздаю каждому именнинику и именнинице тортики. Вот и ты возьми. Я попрошу юкари прийти к тебе, но не обещаю т.к она может быть слишком ленивой. С днем рожения. Сил, здоровья и везенья!");
            //HBbot.users.get('494929901464453131').send("С днем рождения Бордер. Я чень твоей вайфу юкари. Я бегаю по серверу генсоке спейс програм и раздаю каждому именнинику и именнинице тортики. Вот и ты возьми. Я попрошу юкари прийти к тебе, но не обещаю т.к она может быть слишком ленивой. С днем рожения. Сил, здоровья и везенья!");

      }
    }
  }
}

function formDateRule(months) {
  var rule = "";
  for (var month of months) {
    rule += month.join("|") + "|";
  }
  return rule.slice(0, -1);
}

function findIndex(array, text) {
  var i = 0;
  for (var arr of array) {
    if (arr.includes(text)) return i;
    i++;
  }
  return -1;
}

async function getAllMessages(commandMessage) {
  var resultMessages = [commandMessage];
  var LIMIT = 90;
  var lastMessageId = null;
  var ttt = null;
  for (;;) {
    var messages = await commandMessage.channel.messages.fetch({
      limit: LIMIT,
      before: lastMessageId,
    });
    var messagesArray = messages.map((m) => m);
    if (messagesArray.length == 0) break;

    lastMessageId = messages.last().id;
    ttt = messages.last().author.id;

    resultMessages.push(...messagesArray);
  }
  return resultMessages;
}
*/

async function hb(HBbot, mess, args, MessageEmbed) {
    const fetch = require('node-fetch');
    //let HUser = mess.guild.member(mess.mentions.users.first()) || mess.guild.members.cache.get(args[0]) || mess.author;
    let HUser = mess.mentions.users.first().username;
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        //.setDescription('Some description here')
        .setDescription(`**${HUser}** Тебя поздравил **${mess.member.displayName}**, желает тебе здоровья, успехов, развития, AWOO под луной, подарки горой, вкусной еды и хороших друзей.`)
    urlgif = ['https://media1.tenor.com/images/4a762b9e4205fb76c52d058666ac5dc0/tenor.gif?itemid=14704089', 'https://media1.tenor.com/images/513a98d519c16f0c6f0c9fe1f3f4c63b/tenor.gif?itemid=19862717', 'https://media1.tenor.com/images/4edc2a068950de1b0b5cbbba7389ac79/tenor.gif?itemid=12005599', 'https://media1.tenor.com/images/ade6ea654ec8e7c6de665d9c58836455/tenor.gif?itemid=16271642', 'https://media1.tenor.com/images/6464f57456b3c4bdcf5dbc72ce9fe9c1/tenor.gif?itemid=4627210', 'https://media1.tenor.com/images/b52815f6d64559b27076b4a1377838fc/tenor.gif?itemid=19862717', 'https://media1.tenor.com/images/d285615c7aff1360d144f863424a8cca/tenor.gif?itemid=15232281'];
    //const { url } = await fetch('Cсылка на гифку или изображение').then(res => res.json()).catch(err => {
      //  mess.reply(`https://cdn.weeb.sh/images/rJ1WlyKPZ ыыы`);
        //return;
    //})h

    exampleEmbed.setImage(arrayRandMessages(urlgif));

    mess.channel.send(exampleEmbed);
}
      
function arrayRandMessages(arr) {
    var randMessages = Math.floor(Math.random() * arr.length);
    return arr[randMessages];
}

// Список команд //

var commands_list = [
  {
        name: "hb",
        out: hb,
    about: "Тестовая команда",
  },
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды

module.exports.commands = commands_list;
