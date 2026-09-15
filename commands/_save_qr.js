/*CMD
  command: /save_qr
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

Bot.setProperty("qr_img", message, "string");
Bot.sendMessage("✅ **QR Code Updated Successfully!**");
