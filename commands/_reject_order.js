/*CMD
  command: /reject_order
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

var targetUserId = params;

if (!targetUserId) {
  Bot.sendMessage("❌ Error: Target User ID missing.");
  return;
}

// 1. Notify the User (Customer)
Api.sendMessage({
  chat_id: targetUserId,
  text: "❌ <b>PAYMENT REJECTED</b>\n\nYour order payment verification failed due to invalid payment proof or UTR details.\n\nIf you believe this is an error, please contact support: @official_ff_diamond_seller",
  parse_mode: "HTML"
});

// 2. Update Admin Interface (Replaces inline buttons with status text)
Api.editMessageCaption({
  chat_id: user.telegramid,
  message_id: request.message.message_id,
  caption: (request.message.caption || request.message.text || "") + "\n\n🔴 <b>STATUS: REJECTED BY ADMIN</b>",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [] } // Removes buttons
});

// Fallback in case the proof was a text UTR message instead of a photo caption
Api.editMessageText({
  chat_id: user.telegramid,
  message_id: request.message.message_id,
  text: (request.message.text || "") + "\n\n🔴 <b>STATUS: REJECTED BY ADMIN</b>",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [] }
});
