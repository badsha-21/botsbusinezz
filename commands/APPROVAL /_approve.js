/*CMD
  command: /approve
  help: 
  need_reply: false
  auto_retry_time: 
  folder: APPROVAL 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var PVT = Bot.getProperty("PVT"); // আপনার প্রপার্টি নাম অনুযায়ী
let user_id = params;

if(user_id){
  Api.sendMessage({
    chat_id: user_id,
    text: "✅ **Payment Verified!**\n\nYour payment has been successfully confirmed. Click the button below to join your private channel.",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🔗 JOIN VIP CHANNEL", url: PVT }
        ]
      ]
    }
  });

  Bot.sendMessage("✅ User Approved and pvt link was sent to: " + user_id);
}
