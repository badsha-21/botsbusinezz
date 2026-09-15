/*CMD
  command: /save_img
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

Bot.setProperty("start_img", message, "string");
Bot.sendMessage("✅ Start Image Updated!");
