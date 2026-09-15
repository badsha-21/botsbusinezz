/*CMD
  command: PR
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND YOUR QR BLOW MESSAGE 💬*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
Bot.setProperty("PR", message, "string")
Bot.sendMessage("*YOUR YOUR QR BLOW MESSAGE SET TO:>\n\n"+message+"*")
}else{
Bot.sendMessage("You Are Not An Admin")
}
