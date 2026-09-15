/*CMD
  command: /save_upi
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
  // Regex to validate UPI ID format (e.g., name@bank or number@bank)
  var upiPattern = /^[\w\.\-]+@[\w\-]+$/;

  if (upiPattern.test(message.trim())) {
    // Valid UPI format - Save to database
    Bot.setProperty("admin_upi", message.trim(), "string");

    var backButton = [
      [{ text: "🛠️ Return to Admin Panel", callback_data: "/admin" }]
    ];

    Api.sendMessage({
      text: "✅ *UPI ID Saved Successfully!*\n\nNew UPI ID: `" + message.trim() + "`",
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: backButton }
    });
  } else {
    // Invalid format - Ask user to try again
    Api.sendMessage({
      text: "❌ *INVALID UPI ID FORMAT*\n\n" +
            "You sent: `" + message + "`\n\n" +
            "A valid UPI ID must contain an `@` symbol (e.g., `name@upi`, `9876543210@ybl`, or `paytm@paytm`).\n\n" +
            "Please send a valid UPI ID again:",
      parse_mode: "Markdown"
    });

    // Re-trigger listener to wait for correct input
    Bot.run({
      command: "/save_upi",
      run_after: 0
    });
  }
} else {
  Api.sendMessage({ text: "⚠️ No text received. UPI ID update canceled." });
}
