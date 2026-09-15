/*CMD
  command: /set_upi
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

var adminId = 8556893693;

// Clear button loading spinner
if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

// Admin Check
if (user.telegramid != adminId) return;

// Prompt admin and run the waiter command for the next reply
Api.sendMessage({
  text: "✏️ *Please send your new UPI ID now:*\n\n_(Example: myname@upi or 9876543210@ybl)_",
  parse_mode: "Markdown"
});

// Transfer control to wait for input
Bot.runCommand("/save_upi");
