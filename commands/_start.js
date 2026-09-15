/*CMD
  command: /start
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

if(request.data){
  Api.deleteMessage({ chat_id: request.message.chat.id, message_id: request.message.message_id });
}

// --- ADMIN SETUP ---
var SP = Bot.getProperty("SP")
var HP = Bot.getProperty("HP")
var PD = Bot.getProperty("PD")
var p = Bot.getProperty("P")
var ad = Bot.getProperty("adminID")
if (!ad) {
  Bot.setProperty("admin_chat", user.telegramid, "string")
  Bot.setProperty("adminID", user.telegramid, "string")
  Bot.sendMessage("*🟢 ADMIN PANEL: /admin\n\n😍 FIRST ADD BUTTON LINKS 😍*")
}

// --- NEW USER NOTIFICATION & DATABASE ---
var isUserDone = User.getProperty("UserDone");
if (!isUserDone) {
  User.setProperty("UserDone", "true", "string");
  
  // Total Users Count
  var stat = Libs.ResourcesLib.anotherChatRes("stat", "global");
  stat.add(1);
  
  // User ID save for broadcast
  var userList = Bot.getProperty("userList", []);
  if(userList.indexOf(user.telegramid) === -1){
    userList.push(user.telegramid);
    Bot.setProperty("userList", userList, "json");
  }
  
  var username = user.username ? "[@" + user.username + "]" : "[No Username]";
  
  // Direct Notification to you
  Api.sendMessage({
    chat_id: ""+ad+"", 
    text: "➕ <b>New User Notification</b>\n\n👤 <b>Name:</b> " + user.first_name + "\n🆔 <b>ID:</b> <code>" + user.telegramid + "</code>\n🏷 <b>User:</b> " + username + "\n\n📊 <b>Total Users:</b> " + stat.value(),
    parse_mode: "html"
  });
}
//DELETE 
Api.sendPhoto({
  photo: ""+SP+"", // URL of the picture
  caption: ""+p+"",

  reply_markup: {
    inline_keyboard: [
      // Row 1: Two URL buttons
      [
        { 
          text: "💎 GET PREMIUM  ", 
          callback_data: "💎 GET PREMIUM" 
        }],
        [{ 
          text: "🥵 PREMIUM DEMO", 
          url: ""+PD+"" 
        }
      ],    // Row 5: One button with callback
      [
        { 
          text: "✅ PREMIUM PROOF ", 
          url: ""+HP+"" 
        }
      ]
    ]
  }
})

// --- REFERRAL TRACKING ---
RefLib.track({
  onTouchOwnLink: function() { Bot.sendMessage("*❌ Stop Clicking Your Own Link*") },
  onAtractedByUser: function(refUser) {
    Api.sendMessage({ chat_id: refUser.telegramid, text: "<b>👨🏻 You Got a New Referral</b>", parse_mode: "html" });
  },
  linkPrefix: 'Bot'
});
// --- BOTTOM KEYBOARD BUTTONS ---
Bot.sendKeyboard(
  "💎 GET PREMIUM, 🥵 PREMIUM DEMO,\n✅ PREMIUM PROOF", 
);
