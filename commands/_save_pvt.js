/*CMD
  command: /save_pvt
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

Bot.setProperty("pvt_link", message, "string");
Bot.sendMessage("✅ **Private Channel Link Updated!**");
