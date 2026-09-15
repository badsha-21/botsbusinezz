/*CMD
  command: /edit_diamond_plans
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
if (request && request.id) Api.answerCallbackQuery({ callback_query_id: request.id });
if (user.telegramid != adminId) return;

Api.sendMessage({
  text: "💎 *EDIT DIAMOND PACKAGES*\n-----------------------------------\n" +
        "Send your diamond packages in this format (one per line):\n\n" +
        "`100 Diamonds - 80`\n" +
        "`310 Diamonds - 240`\n" +
        "`520 Diamonds - 400`\n" +
        "`1060 Diamonds - 800`",
  parse_mode: "Markdown"
});

Bot.runCommand("/save_diamond_plans");
