/*CMD
  command: CA
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

// Sirf main admin hi naya admin add kar sakta hai
var currentAdmin = Bot.getProperty("adminID");

if (user.telegramid == currentAdmin || user.telegramid == ""+currentAdmin+"") {
  Bot.sendMessage("👤 Please send the *Telegram ID* of the person you want to make Admin:");
  Bot.runCommand("save_new_admin");
} else {
  Bot.sendMessage("❌ You are not authorized to use this command.");
}

