/*CMD
  command: /save_qr_msg
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

Bot.setProperty("qr_msg", message, "string");
Bot.sendMessage("✅ **QR Message Updated Successfully!**");
