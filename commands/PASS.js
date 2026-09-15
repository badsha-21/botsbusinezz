/*CMD
  command: PASS
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *ENTER YOUR PASS ✅*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("pass", message, "string")
Bot.sendMessage("PASS HAS BEEN CHANGE : "+message)
