const discord = require("discord.js");
const HBbot = new discord.Client();
const commands = require("./commands.js");
var config = require("./botconfig.json");
const fs = require("fs");
let token = config.token;
let prefix = config.prefix;

var channelID = "716891031785701418";
var channelIDKH = "540176404604518411";

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
var arraymesMagest = ['С днем рождения мой создатель. Сервер Gensokyo Space Program поздравляет тебя. Это был нелегкий труд и спасибо моей маме марисе-фану за мою структуру. Я знаю у тебя очень сложная жизнь, но сохраняй решимость, помни  ты творец своей судьбы, ты способен изменить мир Магест я это знаю. Я желаю чтобы ты добивался успехов и открывал для себя все больше тайн этой вселенной. С днем рождения! \n' +  'https://youtu.be/0DizopdPMBw',
                      'С днем рождения мой создатель. Сервер Gensokyo Space Program поздравляет тебя. Мы желаем чтобы у тебя сбылись твои мечты, чтобы ты смог уехать за границу и сделать там карьеру. Удачи тебе и успехов! \n' + 'https://youtu.be/GWSzfWEyM_8',
    'С днем рождения мой создатель. Сервер Gensokyo Space Program поздравляет тебя. Пусть ты станешь хорошим специалистом в многих профессиях, чтобы ты был богат, умен и здоров. У тебя все получится! \n' + 'https://youtu.be/t8WuKJa6L5E'];

var arraymesEssil = ['С днем рождения Есилл.Сервер Gensokyo Space Program поздравляет тебя. Желаем тебе самых лучших прохождений лунатик уровней по тохе, хороших друзей, силы, мудрости и девушку вайфу похожую на Снаэ. Поздравляем! \n' + 'https://youtu.be/Jx5Ry1tQS5M',
    'С днем рождения Есилл.Сервер Gensokyo Space Program поздравляет тебя. Пусть Джипи всегда будет рядом, пусть телек кричит Авуу, пусть у тебя будет крутая тачка и хорошая зарплата. Силы и мудрости тебе желаем, поздравляем и соника тебе кидаем! \n' + 'https://youtu.be/qppHpolSlOg'];

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
      var guild = await HBbot.guilds.fetch("540176404126498816");
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
                case '494929901464453131':
                    user.send(arrayRandMessages(arraymesMagest));
                    break;
                case '559942785122172990':
                    user.send("С днем рождения Бордер. Сервер Gensokyo Space Program поздравляет тебя. Пусть сбудутся твои желания, жизнь будет насыщенна и прекрасна. Чтоб у тебя было все только к лучшему. Попрошу Юкари подарить тебе подарков, посматривай вверх, ато на голову могут упасть. Счастья тебе! А музыку она кинет сейчас \n" + 'https://youtu.be/xJUQy6kdSUk');
                    break;
                case '417003991579361280':
                    user.send("Awoo. С днем рождения телек, неко волчек сакуя ты наш. Сервер Gensokyo Space Program поздравляет тебя. Пускай Мирза тебя вечно любит и обнимает. Пусть луна восходит чаще, на кавказе иль на гавайском пляже. Здоровья, счастья и успехов. Мы все в этот день воем на луну и кричим НаноAWOO! \n" + 'https://youtu.be/eGslweDOihs');
                    break;
                case '572106639734210581':
                    user.send("С днем рождения Валерыч. Сервер Gensokyo Space Program поздравляет тебя. Сервер Gensokyo Space Program шлет тебе поздравление. Желаем тебе любви, любви, любви и пушистой хвостатой вайфу. Ну и других благ конечно же. Обнимаю тебя как Чень обнимает Ран. \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '422430982017253377':
                    user.send("С днем рождения Орагон-Ординатор. Сервер Gensokyo Space Program поздравляет тебя. Пусть Азура дарует тебе слава и богатство. Пусть она приведет тебя сквозь завесу сумерек и откроет тебе твою судьбу. Желаем тебе богатства и талантов. С праздником! \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '363989077260763137':
                    user.send("С днем рождения Мирза. Сервер Gensokyo Space Program поздравляет тебя. Желаем тебе успехов, хорошего настроения и хороших друзей! Кусь!" + 'https://youtu.be/ZKqe8QQ7sQU');
                    break;
                case '323775765193818132':
                    user.send("С днем рождения Маффин. Сервер Gensokyo Space Program шлет тебе поздравление. Пусть Влад тебя крепко любит и поддерживает. Желаем тебе успехов в карьере, много много денег и красивых рисунков от твоих рук. С днем рождения! \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '259545197925498880':
                    user.send("С днем рождения Петрович. Сервер Gensokyo Space Program поздравляет тебя. Надеемся что у тебя будут успехи в обучении и работе. Чтобы тебя радовали друзья, что у тебя была счастливая жизнь. С дрем рождения! \n" + 'https://youtu.be/HwMNuEn0jh8');
                    break;
                case '392390451908575254':
                    user.send("С днем рождения Хитохи. Сервер Gensokyo Space Program поздравляет тебя. Пусть лольки окружают тебя и не сбегают. Пускай здоровье твое будет крепче, а мысли умнее. С днем рождения! Лолек, интернета и сердцебиения! \n" + 'https://youtu.be/I7oTx0rhnHU');
                    break;
                case '346273817829834753':
                    user.send("С днем рождения Фриз. Сервер Gensokyo Space Program поздравляет тебя. Спасибо, что привел на сервер Магеста, моего создателя, ты ему очень помог. Желаем тебе благополучия, хороших друзей и успехов в тохо играх да и не только. Да прибудет с тобой Сатори. \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '471309855773163520':
                    user.send("С днем рождения Дионея. Сервер Gensokyo Space Program поздравляет тебя. Желаем чтобы ты могла больше наслаждаться по жизни и ловить кайф. Желаем чтобы у тебя все получалось и ты была счастлива. Пускай во сне тебя поцелует Бина. \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '282929733111644160':
                    user.send("С днем рождения Голди. Сервер Gensokyo Space Program поздравляет тебя. Желаем тебе фумо ёму и Роканкен как оружие в придачу. Удачи, успехов и счастливой жизни тебе желаем. \n" + 'https://youtu.be/oWns2HGN2Ro');
                    break;
                case '235614169888587776':
                    user.send(arrayRandMessages(arraymesEssil));
                    break;
                case '252042192858644482':
                    user.send("С днем рождения Влад Ронин. Сервер Gensokyo Space Program поздравляет тебя, наш владелец, наш Даймё. Пусть Маффин тебя радует в жизни, пусть растет в твоих глазах, пусть сервер процветает твой и невзгоды тебя минуют с лихвой. Пусть получишь тур поездку в Японию, чтобы принять там сауну в угоду здоровью. \n" + arrayRandMessages(arrayRandURL));
                    break;
                case '538645837325008917':
                    user.send("С днем рождения Вересдон. Сервер Gensokyo Space Program поздравляет тебя. Желаем тебе самых лучших результатов по тохо играм чтобы ты был одним из лучших игроков. Пускай у тебя все получится! \n" + arrayRandMessages(arrayRandURL));
                    break;
                default:
                    user.send("С днем рождения! Сервер Gensokyo Space Program поздравляет тебя. Желаем тебе проявлять больше актива у нас, иметь хороших друзей, жить без забот и любви полый рот. Удачи! Спасибо что остаешься с нами. \n" + arrayRandMessages(arrayRandURL));
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
