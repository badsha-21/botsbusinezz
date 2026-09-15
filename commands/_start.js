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

var admin_id = 8556893693;
var bannerUrl = "https://t.me/nnnnnkkkkkkkkkk/15"; // Put image link here if needed

// 1. Fetch persistent user list as JSON array
var list = Bot.getProperty("user_list");
if (!list) {
  list = [];
}

// 2. Check and add new user
if (!list.includes(user.telegramid)) {
  list.push(user.telegramid);
  Bot.setProperty("user_list", list, "json");

  // Admin Notification message (HTML mode)
  var msg = "➕ <b>New User Joined!</b>\n\n" +
            "👤 <b>Name:</b> " + user.first_name + "\n" +
            "🆔 <b>ID:</b> <code>" + user.telegramid + "</code>\n" +
            "🏷️ <b>Username:</b> @" + (user.username || "N/A") + "\n\n" +
            "📊 <b>Total Users:</b> " + list.length;

  // Send alert to admin using HTML parse mode
  Api.sendMessage({
    chat_id: admin_id,
    text: msg,
    parse_mode: "HTML"
  });
}

// 3. Clear inline button spinner
if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

// 4. Main Menu Buttons
var mainButtons = [
  [
    { text: "💎 Buy Diamonds", callback_data: "/buy_diamonds" },
    { text: "📜 Subscriptions", callback_data: "/buy_passes" }
  ],
  [
    { text: "📞 Support", url: "https://t.me/Official_ff_diamond_seller?text=hello+admin+I+have+some+issues+please+help+me" }
  ]
];

var welcomeText = "👋 <b>Welcome " + (user.first_name || "User") + "!</b>\n\n" +
                  "𝗦𝗲𝗹𝗲𝗰𝘁 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻 𝗯𝗲𝗹𝗼𝘄 𝘁𝗼 𝗯𝗿𝗼𝘄𝘀𝗲 𝗼𝘂𝗿 𝘁𝗼𝗽-𝘂𝗽 𝗽𝗮𝗰𝗸𝗮𝗴𝗲𝘀:";

// 5. Send Photo or Text Interface
if (bannerUrl && bannerUrl.startsWith("http") && !bannerUrl.includes("example.com")) {
  Api.sendPhoto({
    photo: bannerUrl,
    caption: welcomeText,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: mainButtons }
  });
} else {
  Api.sendMessage({
    text: welcomeText,
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: mainButtons }
  });
}
