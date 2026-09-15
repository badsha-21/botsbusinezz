/*CMD
  command: /edit_membership_plans
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
  text: "📜 *EDIT MEMBERSHIP PACKAGES*\n-----------------------------------\n" +
        "Send your membership packages in this format (one per line):\n\n" +
        "`Weekly Membership - 160`\n" +
        "`Monthly Membership - 790`\n" +
        "`Level Up Pass - 190`",
  parse_mode: "Markdown"
});

Bot.runCommand("/save_membership_plans");
