/*CMD
  command: /buy_passes
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

var bannerUrl = "https://t.me/bndksksjsnsn/3?single";

if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

// Fetch live dynamic membership plans from database
var membershipPlans = Bot.getProperty("membership_plans");

// Fallback defaults if no admin data exists yet
if (!membershipPlans || !Array.isArray(membershipPlans)) {
  membershipPlans = [
    { name: "Weekly Membership", price: "160" },
    { name: "Monthly Membership", price: "790" }
  ];
}

// Dynamically generate inline buttons based on active prices
var keyboard = [];
for (var j = 0; j < membershipPlans.length; j++) {
  var pass = membershipPlans[j];
  keyboard.push([
    {
      text: "📜 " + pass.name + " — ₹" + pass.price,
      callback_data: "/checkout " + pass.price
    }
  ]);
}

keyboard.push([{ text: "⬅️ Back to Main Menu", callback_data: "/start" }]);

Api.sendPhoto({
  photo: bannerUrl,
  caption: "*👑 MAXIMIZE YOUR DAILY DIAMONDS WITH PASSES! 👑*\n\n*📜 Super Saver Membership Passes*\n\nSelect an option below to get discount upto 50%:",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: keyboard }
});
