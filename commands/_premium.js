/*CMD
  command: /premium
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

// ১. অ্যাডমিন প্যানেল থেকে ডাটা নেওয়া
var upi_id = Bot.getProperty("upi_id") || "BHARATPE.8LOU1QON1180293@fbpe";
var price = Bot.getProperty("plan_price") || "79";
var name = "VIP_ACCESS"; // পেমেন্ট নাম

// ২. Google QR API ব্যবহার করে ডাইনামিক কিউআর তৈরি
// এটি আপনার UPI এবং Price নিয়ে একটি নতুন QR ইমেজ তৈরি করবে
var qr_url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=" + upi_id + "%26pn=" + name + "%26am=" + price + "%26cu=INR";

var msg = "💎 **VIP ACCESS PAYMENT**\n" +
"━━━━━━━━━━━━━━━━━━\n" +
"⚡ FLASH SALE: Only 7 Spots Left!\n" +
"🔥 ONE-TIME PAYMENT: ₹" + price + " ONLY!\n" +
"🔒 LIFETIME VALIDITY\n" +
"━━━━━━━━━━━━━━━━━━\n" +
"1️⃣ Scan QR Code–\n" +
"2️⃣ Pay ₹" + price + "\n" +
"3️⃣ Click 'I HAVE PAID' button below\n\n" +
"✅ UPI ID: `" + upi_id + "`";

Api.sendPhoto({
  photo: qr_url, // এখানে এখন অটোমেটিক জেনারেটেড কিউআর যাবে
  caption: msg,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "✅ I HAVE PAID (Submit Screenshot)", callback_data: "/onScreenshot" }],
      [{ text: "📜 VIEW PROOFS", url: Bot.getProperty("proof_link") || "https://t.me/" }], 
      [{ text: "❌ CANCEL", callback_data: "/cancel_action" }]
    ]
  }
});
