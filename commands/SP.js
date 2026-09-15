/*CMD
  command: SP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND YOUR START IMAGE 📷*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
Bot.setProperty("SP", message, "string")
Bot.sendMessage("*YOUR START IMAGE SET TO:>\n\n"+message+"*")
}else{
Bot.sendMessage("You Are Not An Admin")
}
