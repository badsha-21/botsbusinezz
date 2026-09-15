/*CMD
  command: msg_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: SEND MSG

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var tg =
User.getProperty("MsgId")
Bot.runCommand("Us")
Bot.sendMessageToChatWithId(tg, "*"+message+"*")
