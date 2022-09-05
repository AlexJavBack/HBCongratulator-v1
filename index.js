const discord = require("discord.js");
const HBbot = new discord.Client();
const commands = require("./commands.js");
var config = require("./botconfig.json");
const fs = require("fs");
let token = config.token;
let prefix = config.prefix;

var channelID = "";
var channelIDKH = "";

HBbot.on("ready", function () {
  /* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
  console.log(HBbot.user.username + " запустился!");

  testtwo(HBbot);

    var INTERVAL = 86400000;
  setInterval(testtwo, INTERVAL, HBbot);
});

HBbot.on("message", (msg) => {
  // Реагирование на сообщения
  if (
    msg.author.username == HBbot.user.username &&
    msg.author.discriminator == HBbot.user.discriminator
  )
    return;

  var comm = msg.content.trim() + " ";
  var comm_name = comm.slice(0, comm.indexOf(" "));
  var messArr = comm.split(" ");
  for (comm_count in commands.commands) {
    var comm2 = prefix + commands.commands[comm_count].name;
    if (comm2 == comm_name) {
      commands.commands[comm_count].out(HBbot, msg, messArr);
    }
  }
});

function arrayRandMessages(arr) {
    var randMessages = Math.floor(Math.random() * arr.length);
    return arr[randMessages];
}
var arraymesMagest = [''];

var arraymesEssil = [''];

var arrayRandURL = ['https://youtu.be/xEO5JU1o6Jo', 'https://youtu.be/zsIo3VfKgSQ', 'https://youtu.be/Mm-W1y68EW0', 'https://youtu.be/_uNldo7lMsU', 'https://youtu.be/t0nW6ZcqxSc', 'https://youtu.be/GWSzfWEyM_8', 'https://youtu.be/oWns2HGN2Ro', 'https://youtu.be/Ftdxh5BOyHA', 'https://youtu.be/GA7lPgPi6Uk', 'https://youtu.be/Yb0Xg4-0dgQ', 'https://youtu.be/l1Xo3FM5j94', 'https://youtu.be/jamldE_ESxU', 'https://youtu.be/148ndV_hkbw', 'https://youtu.be/0NB3EcvfIk0', 'https://youtu.be/8BiP19u_vLk', 'https://youtu.be/6SaV-z0THUo', 'https://youtu.be/Ph17JRmzts0', 'https://youtu.be/u5_gq8cWtNs'];

async function testtwo(HBbot) {
    var channel = await HBbot.channels.fetch(channelID);
    var channelKonfHoll = await HBbot.channels.fetch(channelIDKH);
    var messages = await getAllMessages(channel);

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

  var bdayBoys = [];

  for (var message of messages) {
    var match = message.content.match(reg);
    if (!match) continue;

    var str = match[0];
    var date = str.split(/ |\.|\,/gi);
    date[0] = +date[0];
    date[1] = +date[1].toLowerCase().replace(re, (m) => {
      return findIndex(months, m) + 1;
    });

    var Ydate = new Date();
    var DYdate = Ydate.getDate();
    var MYdate = Ydate.getMonth() + 1;
      var userID = message.author.id;
      var guild = await HBbot.guilds.fetch("");
      //var usernick = await guild.members.fetch(userID).catch((err) => { console.log("caught"); console.log(err) });
      if (date[0] == DYdate && date[1] == MYdate) {         
          var usernick = await guild.members.fetch(userID);
          let message = await channelKonfHoll.send(`У ${usernick.displayName} сегодня день рождения! Давайте поздравим его все вместе!`);
          message.edit(`У <@${userID}> сегодня день рождения! Давайте поздравим его все вместе!`)
      bdayBoys.push(userID);
    }
  }
    //usernick.displayName
  var bdayBoysUnique = [...new Set(bdayBoys)];
    for (var userID of bdayBoysUnique) {
    channel.guild.members
      .fetch(userID)
        .then((user) => {
            switch (userID) {
               
                default:
                    user.send("С днем рождения! Сервер  поздравляет тебя. Желаем тебе проявлять больше актива у нас, иметь хороших друзей, жить без забот и любви полый рот. Удачи! Спасибо что остаешься с нами. \n" + arrayRandMessages(arrayRandURL));
                    break;
            }

      })
      .catch((err) => {
        console.log("User not in guild");
      });
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

async function getAllMessages(channel) {
  var resultMessages = [];
  var lastMessageId = null;
  var ttt = null;
  for (;;) {
    var messages = await channel.messages.fetch({
      limit: 100,
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

//var INTERVAL = 30000;
//setInterval(testtwo, INTERVAL);

HBbot.login(token);
