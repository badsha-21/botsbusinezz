/*CMD
  command: /save_membership_plans
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

var adminId = 8556893693;
if (user.telegramid != adminId) return;

if (message) {
  var lines = message.split("\n");
  var newPlans = [];

  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split("-");
    if (parts.length == 2) {
      var itemName = parts[0].trim();
      var itemPrice = parts[1].trim();

      if (itemName != "" && itemPrice != "") {
        newPlans.push({
          name: itemName,
          price: itemPrice
        });
      }
    }
  }

  if (newPlans.length > 0) {
    // Save as JSON object explicitly
    Bot.setProperty("membership_plans", newPlans, "json");

    var backButton = [[{ text: "🛠️ Return to Admin Panel", callback_data: "/admin" }]];

    Api.sendMessage({
      text: "✅ *Membership Packages Updated Successfully!*\n\n" +
            "Saved " + newPlans.length + " plan(s). Tap below to verify in Admin Panel.",
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: backButton }
    });
  } else {
    Api.sendMessage({
      text: "❌ *FORMAT ERROR*\n\n" +
            "Please send your plans formatted like this:\n" +
            "`Weekly Membership - 160`\n" +
            "`Monthly Membership - 790`",
      parse_mode: "Markdown"
    });
    Bot.runCommand("/save_membership_plans");
  }
} else {
  Api.sendMessage({ text: "⚠️ Operation canceled." });
}
