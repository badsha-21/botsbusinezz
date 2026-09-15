/*CMD
  command: MessageUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🛠Enter User id?*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msg = message
User.setProperty("id", msg, "integer")
Bot.sendMessage(" Now Type Your Message For User ")
Bot.runCommand("/send")
