/*CMD
  command: /support
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

// 1. Immediately acknowledge the button tap to clear the loading spinner
if (request && request.id) {
  Api.answerCallbackQuery({
    callback_query_id: request.id
  });
}

// 2. Put your exact Telegram Username inside quotes (WITHOUT @)
var adminUsername = "naruto_l_uzumaki_l_49"; 

var supportButtons = [
  [
    { text: "💬 Direct Chat with Admin", url: "https://t.me/naruto_l_uzumaki_l_49" + adminUsername }
  ],
  [
    { text: "⬅️ Back to Main Menu", callback_data: "/start" }
  ]
];

// 3. Send support instructions
Api.sendMessage({
  text: "🎧 *CUSTOMER SUPPORT*\n" +
        "___________________________________\n\n" +
        "Have an issue with your top-up, payment, or UTR verification?\n\n" +
        "Click the button below to message our support admin directly on Telegram:\n\n" +
        "⏱ *Active Hours:* 24/7",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: supportButtons
  }
});


