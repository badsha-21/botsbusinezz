/*CMD
  command: /get_link
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Please upload your **Payment Screenshot** here. After checking, we will provide the link.");
// Next line sets the bot to wait for the user to upload a photo
Bot.runCommand("/onScreenshot");
