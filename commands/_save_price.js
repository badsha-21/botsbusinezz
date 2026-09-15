/*CMD
  command: /save_price
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

Bot.setProperty("plan_price", message, "string");
Bot.sendMessage("✅ Price Updated!");
