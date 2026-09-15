/*CMD
  command: BRO
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

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
  Bot.sendMessage("*📝 Send your message (Text or Photo with Caption):*");
  Bot.runCommand("onBroadcast");
} else {
  Bot.sendMessage("❌ Access Denied.");
}
