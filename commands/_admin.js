/*CMD
  command: /admin
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
var a = Bot.getProperty("adminID")

if (user.telegramid == a){
Bot.sendMessage("🔐Access Granted")
var buttons = [
    [{title: "📣 Broadcast", command: "BRO" },{title:"🖇️ Send Link ", command:"MessageUser"}],
    [{title: " SET QR CODE 🛡️", command: "QR"},{title: "START MESSAGE 😍", command: "premium"}],[{title: "PREMIUM DEMO 🥵", command: "PD" },{title:"PREMIUM PROOF ✅", command:"HP"}],[{title: "START IMAGE 📷", command: "SP" },{title:"QR MESSAGE 💬", command:"PR"}],[{title: "CHANGE ADMIN ⚒️", command: "CA" }],[{title:"SET PVT CHANNEL 🖇️", command:"PVT"}]
]
Bot.sendInlineKeyboard(buttons, "*HEY* " +user.first_name+ "👋🏻\n\n*WELCOME TO THE ADMIN PANEL 🎀*", {disable_web_page_preview: true});

}else{
Bot.sendMessage("You Are Not An Admin")
}
