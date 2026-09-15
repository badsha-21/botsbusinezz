/*CMD
  command: /process_checkout
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

var playerUid = message;
var packName = User.getProperty("selected_pack");
var amount = User.getProperty("selected_amount");

// Save Player UID
User.setProperty("player_uid", playerUid, "string");

// Payment Details
var upiID = "yourupi@bank"; // Replace with your UPI ID
var merchantName = "FFTopUpStore";

// Generate QR Code
var upiString = "upi://pay?pa=" + upiID + "&pn=" + merchantName + "&am=" + amount + "&cu=INR";
var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(upiString);

var keyboard = [
  [{ text: "✅ I HAVE PAID (Submit Screenshot)", callback_data: "/paid" }],
  [{ text: "❌ CANCEL ORDER", command: "/start" }]
];

var captionText = 
  "⚡ *FREE FIRE TOP-UP PAYMENT*\n" +
  "_____________________________________________________________________\n\n" +
  "🎮 *Player ID:* `" + playerUid + "`\n" +
  "📦 *Package:* " + packName + "\n" +
  "💵 *Total Price:* ₹" + amount + "\n" +
  "___________________________________\n\n" +
  "1️⃣ Scan QR Code & Pay ₹" + amount + "\n" +
  "2️⃣ Tap 'I HAVE PAID' below\n\n" +
  "✅ *UPI ID:*\n`" + upiID + "`";

Api.sendPhoto({
  photo: qrUrl,
  caption: captionText,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: keyboard }
});
