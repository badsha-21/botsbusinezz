/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let tgid = User.getProperty("id")
let msag = message
let msg = "💬Message from Admin\n➖➖➖➖➖➖➖➖➖➖➖\n\n" + msag
Bot.sendMessageToChatWithId(tgid, msg)
Bot.sendMessage("✅Message sent to User")
