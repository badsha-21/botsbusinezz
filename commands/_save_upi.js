/*CMD
  command: /save_upi
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

Bot.setProperty("upi_id", message, "string");
Bot.sendMessage("✅ UPI ID Updated!");
