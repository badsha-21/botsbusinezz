/*CMD
  command: /on_uid_error
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

var playerUid = User.getProperty("player_uid");
var price = User.getProperty("selected_price");
var packName = User.getProperty("selected_pack");

var upiID = Bot.getProperty("admin_upi") || "yourupi@bank";
var merchantName = "FF Store";
var upiString = "upi://pay?pa=" + upiID + "&pn=" + encodeURIComponent(merchantName) + "&am=" + price + "&cu=INR";
var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(upiString);

var keyboard = [
  [{ text: "✅ I HAVE PAID", callback_data: "/submit_proof" }],
  [{ text: "❌ Cancel Order", callback_data: "/start" }]
];

Api.sendPhoto({
  photo: qrUrl,
  caption: "⚡ *PAYMENT DETAILS*\n" +
           "___________________________________\n\n" +
           "🎮 *Player ID (UID):* `" + playerUid + "`\n" +
           "📦 *Package:* " + packName + "\n" +
           "💵 *Amount Due:* ₹" + price + "\n" +
           "___________________________________\n\n" +
           "👉 *Scan QR Code via GPay, PhonePe, or Paytm to pay.*\n\n" +
           "📌 *UPI ID:* `" + upiID + "`",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: keyboard }
});
