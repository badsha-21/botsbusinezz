/*CMD
  command: /buy_diamonds
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

var bannerUrl = "https://t.me/bndksksjsnsn/2?single";

if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

// Fetch live dynamic plans from database
var diamondPlans = Bot.getProperty("diamond_plans");

// Fallback defaults if no admin data exists yet
if (!diamondPlans || !Array.isArray(diamondPlans)) {
  diamondPlans = [
    { amount: "100 Diamonds", price: "80" },
    { amount: "310 Diamonds", price: "240" }
  ];
}

// Dynamically generate inline buttons based on active prices
var keyboard = [];
for (var i = 0; i < diamondPlans.length; i++) {
  var plan = diamondPlans[i];
  keyboard.push([
    {
      text: "💎 " + plan.amount + " — ₹" + plan.price,
      callback_data: "/checkout " + plan.price
    }
  ]);
}

keyboard.push([{ text: "⬅️ Back to Main Menu", callback_data: "/start" }]);

Api.sendPhoto({
  photo: bannerUrl,
  caption: "*🔥 Ultimate Diamond Top-Up Sale*\n\n*⚡ INSTANT FREE FIRE DIAMONDS — 50% OFF LIMITED TIME! ⚡*\n\nSelect an option below to get discount upto 50%:",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: keyboard }
});
