/*CMD
  command: PD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND PREMIUM DEMO LINK 🖇️*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
Bot.setProperty("PD", message, "string")
Bot.sendMessage("*YOUR PREMIUM DEMO LINK SET TO:>\n"+message+"*")
}else{
Bot.sendMessage("You Are Not An Admin")
}
