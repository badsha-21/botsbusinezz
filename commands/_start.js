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

var chat_ids = Bot.getProperty("ChatIDS") || [];
if (!chat_ids.includes(chat.chatid)) {
  chat_ids.push(chat.chatid);
  Bot.setProperty("ChatIDS", chat_ids, "json");
}
var list = Bot.getProperty("user_list", []);
var admin_id = "8356234388"; // Apnar Admin ID thik ache kina check korun

// Jodi user list-e na thake, tobe notification jabe
if (!list.includes(user.telegramid)) {
  list.push(user.telegramid);
  Bot.setProperty("user_list", list, "json");
  
  // 🔔 Admin Notification message
  var msg = "➕ <b>New User Joined!</b>\n\n" +
            "👤 <b>Name:</b> " + user.first_name + "\n" +
            "🆔 <b>ID:</b> <code>" + user.telegramid + "</code>\n" +
            "🏷 <b>Username:</b> @" + (user.username || "N/A") + "\n\n" +
            "📊 <b>Total Users:</b> " + list.length;
            
  // Api.sendMessage use kora holo HTML mode-e
  Api.sendMessage({
    chat_id: admin_id,
    text: msg,
    parse_mode: "HTML"
  });
}
// 1. Get dynamic data from Admin Panel
var img = Bot.getProperty("start_img") || "https://telegra.ph/file/default.jpg";
var txt = Bot.getProperty("start_msg") || "Welcome to the Bot!";
var demo = Bot.getProperty("demo_link") || "https://t.me/";
var proof = Bot.getProperty("proof_link") || "https://t.me/";

// 2. Send the Photo with Inline Buttons (Direct Links)
Api.sendPhoto({
  photo: img,
  caption: txt,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "💎 GET PREMIUM", callback_data: "/premium" }],
      [{ text: "🥵 PREMIUM DEMO", callback_data: "/demo"}],
      [{ text: "✅ PREMIUM PROOF", url: proof }], 
      [{ text: "👀HOW TO GET PREMIUM", callback_data: "/howtoget"}]
    ]
  }
});

// 3. Keep the Reply Keyboard (The buttons at the bottom from your screenshot)
Bot.sendKeyboard(
  "💎 GET PREMIUM, \n🥵 PREMIUM DEMO,\n👀HOW TO GET PREMIUM\n✅ PREMIUM PROOF", 
  
  "𝗦𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗳𝗿𝗼𝗺 ₹𝟰𝟵 𝗼𝗻𝗹𝘆!!"
);
