/*CMD
  command: /on_uid_found
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

var playerName = null;

try {
  var response = JSON.parse(content);

  // Check all possible JSON key formats used by public lookup APIs
  if (typeof response === "object" && response !== null) {
    playerName = response.nickname || 
                 response.name || 
                 response.AccountName || 
                 response.player_name || 
                 response.username || 
                 (response.data && (response.data.AccountName || response.data.nickname || response.data.name)) ||
                 (response.result && (response.result.name || response.result.nickname));
  }
} catch(e) {
  playerName = null;
}

// If API returned a valid name, display verified status
if (playerName && playerName !== "Verified Player") {
  User.setProperty("player_name", playerName, "string");
  var playerUid = User.getProperty("player_uid");
  var price = User.getProperty("selected_price");
  var packName = User.getProperty("selected_pack");

  var upiID = Bot.getProperty("admin_upi") || "yourupi@bank";
  var merchantName = "FF Store";
  var upiString = "upi://pay?pa=" + upiID + "&pn=" + encodeURIComponent(merchantName) + "&am=" + price + "&cu=INR";
  var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(upiString);

  var keyboard = [
    [{ text: "✅ I HAVE PAID", callback_data: "/submit_proof" }],
    [{ text: "❌ Wrong Account / Cancel", callback_data: "/start" }]
  ];

  Api.sendPhoto({
    photo: qrUrl,
    caption: "✅ *PLAYER ACCOUNT VERIFIED*\n" +
             "___________________________________\n\n" +
             "👤 *In-Game Name:* `" + playerName + "`\n" +
             "🎮 *Player ID (UID):* `" + playerUid + "`\n" +
             "📦 *Package:* " + packName + "\n" +
             "💵 *Amount Due:* ₹" + price + "\n" +
             "___________________________________\n\n" +
             "👉 *Scan QR Code via GPay, PhonePe, or Paytm to pay.*\n\n" +
             "📌 *UPI ID:* `" + upiID + "`",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: keyboard }
  });
} else {
  // If parsing failed or name not present, hand over to fallback handler
  Bot.run({ command: "/on_uid_error" });
}
