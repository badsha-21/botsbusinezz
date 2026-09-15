/*CMD
  command: 💎 GET PREMIUM
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
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var qr = Bot.getProperty("QR")
var pr = Bot.getProperty("PR")
Api.sendPhoto({
  photo: ""+qr+"", // URL of the picture
  caption: ""+pr+"",

  reply_markup: {
    inline_keyboard: [
      // Row 1: Two URL buttons
      [
        { 
          text: "𝗚𝗘𝗧 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗟𝗜𝗡𝗞 ✅", 
          callback_data: "/onScreenshot" 
        }],
      [
        { 
          text: "CANCEL ❌", 
          callback_data: "/start" 
        }
      ]
    ]
  }
})
