/*CMD
  command: /save_msg
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

Bot.setProperty("start_msg", message, "string");
Bot.sendMessage("✅ Start Message Updated!");
