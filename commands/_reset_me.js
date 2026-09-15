/*CMD
  command: /reset_me
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

var adminId = 6777766890;
if (user.telegramid != adminId) return;

// Reset your user key
Bot.setProperty("user_joined_" + user.telegramid, null, "string");

// Reset user counter lib
var userCounter = Libs.ResourcesLib.anotherGroupRes("total_users", "global");
userCounter.set(0);

Api.sendMessage({
  text: "✅ *Reset Complete!*\nYour account status is wiped and counter is set to 0. Send /start to test.",
  parse_mode: "Markdown"
});
