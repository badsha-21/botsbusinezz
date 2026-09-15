/*CMD
  command: save_new_admin
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

// User ne jo ID bheji hai usko extract karna
var newAdminID = message;

// Check karein ki message sirf numbers hai (valid ID)
if (!isNaN(newAdminID)) {
  
  // Naya Admin ID property mein save karna
  Bot.setProperty("adminID", newAdminID, "string");
  
  Bot.sendMessage("✅ **Success!**\n\nNew Admin has been set.\n🆔 ID: `" + newAdminID + "`\n\n");
  
  // Naye admin ko notify karna (Optional)
  Api.sendMessage({
    chat_id: newAdminID,
    text: "🎉 𝘾𝙤𝙣𝙜𝙧𝙖𝙩𝙪𝙡𝙖𝙩𝙞𝙤𝙣𝙨!\n\n✅ 𝙔𝙤𝙪 𝙝𝙖𝙫𝙚 𝙗𝙚𝙚𝙣 𝙖𝙥𝙥𝙤𝙞𝙣𝙩𝙚𝙙 𝙖𝙨 𝙖𝙣 𝘼𝙙𝙢𝙞𝙣 𝙛𝙤𝙧 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩."
  });

} else {
  Bot.sendMessage("❌ Invalid ID! Please send a numeric Telegram ID.");
  // Wapas maangna agar galat hai
  Bot.runCommand("save_new_admin");
}

