/*CMD
  command: premium
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND START MESSAGE 💬*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("P", message, "string")
Bot.sendMessage(" START MESSAGE SET TO:>\n\n\n"+message)
