/*CMD
  command: /checkout
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

if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

// 1. Read single numeric price safely
var price = params ? String(params).trim() : "0";

// 2. Map price to exact package name internally (prevents string split errors)
var packMap = {
  "75": "100 Diamonds",
  "220": "310 Diamonds",
  "380": "520 Diamonds",
  "750": "1060 Diamonds",
  "150": "Weekly Pass",
  "180": "Level Up Pass"
};

var packName = packMap[price] || (price + " INR Package");

// 3. Store data
User.setProperty("selected_price", price, "string");
User.setProperty("selected_pack", packName, "string");

// 4. Send message prompt
Api.sendMessage({
  text: "🎮 *ENTER YOUR FREE FIRE PLAYER ID (UID)*\n\n📦 Package: *" + packName + "*\n💵 Price: *₹" + price + "*\n\nPlease reply directly with your Player ID:",
  parse_mode: "Markdown"
});

// 5. Transfer control to UID receiver
Bot.run({ command: "/get_uid" });
