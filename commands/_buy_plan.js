/*CMD
  command: /buy_plan
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

// ১. দাম সেট করা (Parameters থেকে আসবে)
var base_price = parseFloat(params); 

// ২. ক্যাটাগরির নাম নির্ধারণ করা
var categoryName = "Premium Access"; // ডিফল্ট নাম
if (base_price == 37) { categoryName = "INDIAN DESI PLAN"; }
else if (base_price == 99) { categoryName = "R@PE VIDEOS PLAN"; }
else if (base_price == 149) { categoryName = "CP VIDEOS PLAN"; }

// ৩. ইউনিক অ্যামাউন্ট ক্যালকুলেশন
var count_str = Bot.getProperty("paisa_counter") || "1";
var count = parseInt(count_str);
var next_count = count >= 99 ? 1 : count + 1;
Bot.setProperty("paisa_counter", next_count.toString(), "string");
var final_amount = base_price + (count / 100);
var display_amount = final_amount.toFixed(2);

// ৪. UPI ID নেওয়া
var upi_id = Bot.getProperty("upi_id") || "আপনার_UPI_ID";

// ৫. QR লিঙ্ক তৈরি
var qr_url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=" + upi_id + "%26pn=Premium_Bot%26am=" + display_amount + "%26cu=INR";

// ৬. মেসেজটি সাজানো (এখানেই আপনার টেক্সট ডায়নামিক হবে)
var msg = "💎 **" + categoryName + " PAYMENT**\n\n" +
"⚡ FLASH SALE: Limited Spots!\n" +
"🔥 ONE-TIME PAYMENT: ₹" + base_price + " ONLY!\n" +
"🔒 LIFETIME VALIDITY\n\n" +
"1️⃣ Scan QR Code\n" +
"2️⃣ Pay ₹" + display_amount + " (PAY THIS AMOUNT)\n" +
"3️⃣ Click 'I HAVE PAID' button below\n\n" +
"✅ UPI ID: `" + upi_id + "`";

Api.sendPhoto({
  photo: qr_url, // এখানে এখন অটোমেটিক জেনারেটেড কিউআর যাবে
  caption: msg,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "✅ I HAVE PAID (Submit Screenshot)", callback_data: "/paymentsc" }],
      [{ text: "📜 VIEW PROOFS", url: Bot.getProperty("proof_link") || "https://t.me/" }], 
      [{ text: "❌ CANCEL", callback_data: "/cancel_action" }] 
    ]
  }
});
