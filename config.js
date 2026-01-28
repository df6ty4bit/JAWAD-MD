
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VVW5OiOhD+L3nVWkFUwKqpOtxk8IIi3k/tQ4SAEUgwBBS3/O9bODsz+3B2aw5PIUl3f93f150fgFBcoAmqwfAHyBmuIEfNktc5AkOgl1GEGGiDEHIIhqA72i7jewnHcHY827fTwNx5zjE7WIYb3fE9DGst2C8qhdvCC3i0QV4eUxz8xaG2JSuHnvrju3XmRzZHsDb12Dyt3Kh1mOjTfLeLiT1m7jp5AY/GI8QMk9jKTyhDDKYTVC8gZl+Db+jT7Qh1IunU6etedTur4USqTMFzrUMCtR7szGFmZ7L/Gn8R/vnV55vWuqquxSwdldFVhkZXk3ZydDfLgnec1HEk0bjsvDf4BY4JCp0QEY55/eW6ayNpjjfra7ZRO4llzM8rB3uFVyYbvDqpyuq47huHKL0WkvI14LcTbeEtVqvc22StqVsIY0vu1Be0G+FENbe8jGfLG5HZPfgd+IK9ayX5P3VPtLpFLv2Y9AYJc9Ukjqm1p+GCrDu9or/pjmS9ZdJ+j4m9r8EfD0y9crfa2HcW9iTvuDTqD4ijmhebnoiJpsrr0paumr7tfcKHvGR/Q3kxaWegG7mERmFXvKTUC7WU7zqkO3OD5K5IucmYcNEFgS496zzfypZ5zC/KLcl3ysgMlDi917qfibVjoRbp6PK6Z3ovz4wSVDshGIqPNmAoxgVnkGNKnnui2gYwrHwUMMSf5QWWiHtb7yB2+sE12rgz3vf2r0mliIqu8vK89/z5QUM+V/bBC2iDnNEAFQUKX3HBKatnqChgjAow/Pd7GxB042/ENeEUUWqDCLOCr0mZpxSG77R+nMIgoCXhfk0Co1kgBobC5zbiHJO4aCpZEsiCE66QcYK8AMMIpgX6yBExFIIhZyX66FuDhk3pe4fp3l1ODNAG2ZMSHDbTReqpgjgQZUmUhaHY/af4dm38wjz/RhAHbUBgcx34HOUnREAbpE9DUVFloaf2ZEntDiSlMW0OHh+YmxAh4hCnRTMGJuXy3LMsy63G/aCwbc2JNSPWwGeO73J5o0Ocn+iUBUmub2zfmdqdyPWWFJ4cEeOtvMnupPL7c+8yXtKX/3DS9NtVGq2dtSdkdioLnsUi/zyG4fy+Xtzk2ai0bMVzIi8rVsQPFyNXPGTruL7Q49m3FgFOncPyOPMc5RyiyYFOtCS6XLRGW20QogoH6Pdgs9Yt8xd5H/F9mXalcXBdpg0doWCpI71i7kY4hrNUZV1i51LM9zxjZzhDq9etswpHqZovVJqv095ihMxFVfHZLjTjNyE/Gyn9NcDwU2INe81vhNFzHvwi6Q+kvANu1CY82r/Z/posf+hOPVxRaAyk8cTbLBNs3CrpvragTX13T9NSPBR9WShXyQSvIXg8vrdBnkIeUZaBISiyIwRtwGjZSNchEf3bK6EJju7FRpNuCguufbbDCmeo4DDLwVCUB2p/IEkD4e3WgtH8FRYnMAQkk/RjI+1ay3OfQ/7eXUBrPh1NweMn0efXa3oHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "JawadTech", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "JAWAD-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/pf270b.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am jawad md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
