/*CMD
  command: /submit_proof
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

// Acknowledge the inline button click safely
if (request && request.id) {
  Api.answerCallbackQuery({ callback_query_id: request.id });
}

Api.sendMessage({
  text: "📸 *UPLOAD PAYMENT PROOF*\n\n" +
        "Please send a **screenshot** of your payment receipt or type your 12-digit **UPI UTR / Transaction ID** directly in this chat below:\n\n" +
        "⏱ *Our admin team will verify and top up your account shortly.*",
  parse_mode: "Markdown"
});

// Transfer listener control to capture the admin proof
Bot.run({ command: "onPaymentProof" });
