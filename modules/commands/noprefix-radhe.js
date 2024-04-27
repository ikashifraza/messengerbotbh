const fs = require("fs");
module.exports.config = {
  name: "radhe",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed By Arun", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Ishika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Owner")==0 || event.body.indexOf("owner")==0 || event.body.indexOf("Onwr")==0 || event.body.indexOf("bot kis ki h")==0) {
    var msg = {
        body: "🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽🌹 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ Ali Jan  ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𓆩ҞȺꞨĦĪӺ ꞦȺƵȺ𓆪 ☜︎︎︎✰ 


🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ 

  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/iamkashifrazamallah 💞🕊️
  
 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @ikashifraza 

  ====

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎.☜︎︎︎✰ 

✅Thanks for using My Bot ❤",
        attachment: fs.createReadStream(__dirname + `/noprefix/kashif.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💓", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
