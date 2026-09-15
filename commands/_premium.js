/*CMD
  command: /premium
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(request.data){
  Api.deleteMessage({ chat_id: request.message.chat.id, message_id: request.message.message_id });
}

var buttons = [
  [{ text: "👉  INDIAN DESI PLAN  👈 ", callback_data: "/plan1" }],
  [{ text: "👉  R@PE VIDEOS PLAN  👈 ", callback_data: "/plan2" }],
  [{ text: "👉 CHILD VIDEOS (50K+)  👈", callback_data: "/plan3" }], 
  [{ text: "❌ CANCEL", callback_data: "/cancel_actionn" }]
];
 
Api.sendPhoto({
  photo: "https://t.me/nnnnnkkkkkkkkkk/12", 
  reply_markup: { inline_keyboard: buttons },
  parse_mode: "Markdown"
});
var buttons = [
[{ text: "Limited Offer ⏳", callback_data: "/plan4" }]
];
Api.sendMessage({
  text: "         👉     𝗔𝗟𝗟 𝗜𝗡 𝗢𝗡𝗘 𝗚𝗥𝗢𝗨𝗣    👈                 ", 
  reply_markup: { inline_keyboard: buttons },
  parse_mode: "Markdown"
});
