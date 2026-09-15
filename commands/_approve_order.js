/*CMD
  command: /approve_order
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
  text: "✅ <b>PAYMENT APPROVED & DELIVERED!</b>\n\nYour payment has been verified by the admin.\n💎 Diamonds/Pass has been successfully credited to your account.\n\nThank you for purchasing! Type /start to order again.",
  parse_mode: "HTML"
});

// 2. Update Admin Interface (Replaces inline buttons with status text)
Api.editMessageCaption({
  chat_id: user.telegramid,
  message_id: request.message.message_id,
  caption: (request.message.caption || request.message.text || "") + "\n\n🟢 <b>STATUS: APPROVED BY ADMIN</b>",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [] } // Removes buttons so it can't be clicked twice
});

// Fallback in case the proof was a text UTR message instead of a photo caption
Api.editMessageText({
  chat_id: user.telegramid,
  message_id: request.message.message_id,
  text: (request.message.text || "") + "\n\n🟢 <b>STATUS: APPROVED BY ADMIN</b>",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [] }
});
