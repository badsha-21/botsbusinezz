/*CMD
  command: onPaymentProof
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

var my_id = "8556893693"; 
var saved_admins = Bot.getProperty("admin_list") || "";
var admin_array = saved_admins.split(",");
var all_admins = [my_id];

// Collect all admin IDs safely
for (var i = 0; i < admin_array.length; i++) {
  var id = admin_array[i].trim();
  if (id != "" && id != my_id) {
    all_admins.push(id);
  }
}

// 1. DYNAMICALLY DETECT PHOTO FILE_ID
var photo_id = null;

if (request.photo && request.photo.length > 0) {
  photo_id = request.photo[request.photo.length - 1].file_id;
} else if (request.message && request.message.photo && request.message.photo.length > 0) {
  photo_id = request.message.photo[request.message.photo.length - 1].file_id;
} else if (options && options.photo) {
  photo_id = options.photo;
}

// 2. DETECT TEXT OR CAPTION
var proofText = (message || request.caption || "").trim();

// 3. UTR VALIDATION (Checks if exact 12 digits numeric string)
var isValidUTR = /^\d{12}$/.test(proofText);

var adminKeyboard = [
  [
    { text: "✅ Approve", callback_data: "/approve_order " + user.telegramid },
    { text: "❌ Reject", callback_data: "/reject_order " + user.telegramid }
  ]
];

// CASE A: PHOTO RECEIVED
if (photo_id) {
  var caption_msg = "📩 <b>New Payment Receipt (Screenshot)</b>\n\n" +
                    "👤 <b>From ID:</b> <code>" + user.telegramid + "</code>\n" +
                    "🔗 <b>Username:</b> @" + (user.username || "N/A") + "\n" +
                    "📝 <b>Note:</b> " + (proofText || "None");

  for (var j = 0; j < all_admins.length; j++) {
    Api.sendPhoto({
      chat_id: all_admins[j],
      photo: photo_id,
      caption: caption_msg,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: adminKeyboard }
    });
  }
  
  Bot.sendMessage("✅ <b>YOUR SCREENSHOT HAS BEEN SUBMITTED!</b>\n\nPlease wait, Admin will verify soon.", {parse_mode: "HTML"});

// CASE B: VALID 12-DIGIT UTR RECEIVED
} else if (isValidUTR) {
  var text_msg = "📩 <b>New Payment Receipt (UTR Number)</b>\n\n" +
                 "👤 <b>From ID:</b> <code>" + user.telegramid + "</code>\n" +
                 "🔗 <b>Username:</b> @" + (user.username || "N/A") + "\n" +
                 "💳 <b>UTR / TXN ID:</b> <code>" + proofText + "</code>";

  for (var k = 0; k < all_admins.length; k++) {
    Api.sendMessage({
      chat_id: all_admins[k],
      text: text_msg,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: adminKeyboard }
    });
  }

  Bot.sendMessage("✅ <b>YOUR UTR NUMBER HAS BEEN SUBMITTED!</b>\n\nPlease wait, Admin will verify soon.", {parse_mode: "HTML"});

// CASE C: INVALID INPUT
} else {
  Bot.sendMessage("❌ <b>Invalid Input!</b>\n\nPlease upload a valid payment screenshot image or enter a correct <b>12-digit UTR number</b>.", {parse_mode: "HTML"});
}
