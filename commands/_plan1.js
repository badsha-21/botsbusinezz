/*CMD
  command: /plan1
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

// Step 1: Set your payment details and product price
var upiID = "BHARATPE2S0E0L1E2U70232@unitype"; // Replace with your merchant UPI ID
var amount = "49";               // Replace with dynamic price variable
var note = "VIP Access";         // Payment note

// Step 2: Build the UPI link string
var upiLink = "upi://pay?pa=" + upiID + "&pn=YourBusiness&am=" + amount + "&tn=" + encodeURIComponent(note) + "&cu=INR";

// Step 3: Generate the QR Code URL using the QR Server API
var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(upiLink);

// Step 4: Define the layout buttons
var keyboard = [
  [{ text: "✅ I HAVE PAID", callback_data: "/paymentsc" }],
  [{ text: "📜 VIEW PROOFS", url: "https://t.me/+pzsR-H0XseY4MTdl" }],
  [{ text: "❌ CANCEL", callback_data: "/premium" }]
];

// Step 5: Format the message caption using standard Markdown
var captionText = 
  "💎 *INDIAN DESI PAYMENT*\n" +
  "___________________________________\n" +
  "⚡ FLASH SALE: Only 7 Spots Left!\n" +
  "🔥 ONE-TIME PAYMENT: ₹" + amount + " ONLY!\n" +
  "🔒 LIFETIME VALIDITY\n" +
  "___________________________________\n" +
  "1️⃣ Scan QR Code\n" +
  "2️⃣ Pay ₹" + amount + " (pay this amount)"+"\n" +""+
  "3️⃣ Click 'I HAVE PAID' button below\n\n" +
  "✅ *UPI ID:*\n`" + upiID + "`";

// Step 6: Send the photo with formatted text caption and buttons
Api.sendPhoto({
  photo: qrUrl,
  caption: captionText,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: keyboard
  }
});
