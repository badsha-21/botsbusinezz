/*CMD
  command: HP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND PREMIUM PROOF LINK 🖇️*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
Bot.setProperty("HP", message, "string")
Bot.sendMessage("*YOUR PREMIUM DEMO LINK SET TO:>\n"+message+"*")
}else{
Bot.sendMessage("You Are Not An Admin")
}
