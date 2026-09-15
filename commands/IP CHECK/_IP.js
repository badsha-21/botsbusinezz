/*CMD
  command: /IP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: IP CHECK

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(User.getProperty("verify") == "ok"){
  Bot.runCommand("lol");
  return;
}

const webhookUrl = Libs.Webhooks.getUrlFor({
  command: "onWebhook",
  user_id: user.id
});

// NEW STABLE API LINK
const webPage = "https://onfaucet.com/api/captcha/verify?webhookUrl=" + encodeURIComponent(webhookUrl);

var layout = "<b>🛡️ ADVANCED SECURITY GATEWAY</b>\n" +
"━━━━━━━━━━━━━━━━━━━\n" +
"<b>User ID:</b> <code>" + user.id + "</code>\n" +
"<b>Encryption:</b> <code>SSL-SECURE</code>\n\n" +
"<i>Please complete the human verification to unlock the bot features.</i>";

Api.sendMessage({
  text: layout,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ text: "✅ VERIFY NOW", web_app: { url: webPage } }]
    ]
  }
});

