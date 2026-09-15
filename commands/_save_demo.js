/*CMD
  command: /save_demo
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

Bot.setProperty("demo_link", message, "string");
Bot.sendMessage("✅ Demo Link Updated!");
