/*CMD
  command: /admin
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

if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

if (user && user.telegramid != adminId) {
  Api.sendMessage({
    text: "⚠️ *ACCESS DENIED*",
    parse_mode: "Markdown"
  });
  return;
}

// Reset any listener states
User.setProperty("current_command", "", "string");

// Fetch total user count from global database
// Fetch user count directly from array length
var list = Bot.getProperty("user_list") || [];
var totalUsers = list.length;

var currentUpi = Bot.getProperty("admin_upi") || "Not Set";
var diamondPlans = Bot.getProperty("diamond_plans") || [
  { amount: "100💎", price: "80" },
  { amount: "310💎", price: "240" },
  { amount: "520💎", price: "400" },
  { amount: "1060💎", price: "800" }
];
var membershipPlans = Bot.getProperty("membership_plans") || [
  { name: "Weekly Membership", price: "160" },
  { name: "Monthly Membership", price: "790" }
];

var diamondListText = "";
for (var i = 0; i < diamondPlans.length; i++) {
  diamondListText += "• " + diamondPlans[i].amount + ": ₹" + diamondPlans[i].price + "\n";
}

var membershipListText = "";
for (var j = 0; j < membershipPlans.length; j++) {
  membershipListText += "• " + membershipPlans[j].name + ": ₹" + membershipPlans[j].price + "\n";
}

var adminButtons = [
  [
    { text: "💳 Set UPI ID", callback_data: "/set_upi" }
  ],
  [
    { text: "💎 Edit Diamond Plans", callback_data: "/edit_diamond_plans" },
    { text: "📜 Edit Membership Plans", callback_data: "/edit_membership_plans" }
  ],
  [
    { text: "⬅️ Back to Main Menu", callback_data: "/start" }
  ]
];

// Display Admin Management Panel with Live User Count
Api.sendMessage({
  text: "🛠️ *ADMIN STORE MANAGEMENT*\n\n" +
        "📊 *Total Registered Users:* " + totalUsers + "\n" +
        "📌 *Current UPI ID:* `" + currentUpi + "`\n\n" +
        "💎 *Diamond Top-Up Plans:*\n" + diamondListText + "\n" +
        "📜 *Membership Plans:*\n" + membershipListText + "\n" +
        "Select an option below to modify your pricing structure:",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: adminButtons }
});
