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

var userId = params; // This gets the user ID from the admin's click
// 1. Get the dynamic Private Link from Properties
var pvtLink = Bot.getProperty("pvt_link") || "https://t.me/+Default_Link"; 

// 2. Send the message with the dynamic button
Api.sendMessage({
  chat_id: userId,
  text: "🎉 **PAYMENT APPROVED!**\n\nYour payment has been successfully verified. Click below to join the VIP Channel.",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🔗 JOIN VIP CHANNEL", url: pvtLink }
      ]
    ]
  }
});

// Notify Admin
Bot.sendMessage("User approved and Dynamic VIP Link sent! ✅");
