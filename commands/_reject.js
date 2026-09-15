/*CMD
  command: /reject
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

var userId = params;

Api.sendMessage({
  chat_id: userId,
  text: "❌ *Sorry, your payment screenshot is invalid or not appropriate. Admin can't find your payment.*"
});

Bot.sendMessage("User rejected and notification sent.");
