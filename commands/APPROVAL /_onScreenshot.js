/*CMD
  command: /onScreenshot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: APPROVAL 
  answer: *📝 Kindly Send Payment Full Screenshot*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var a = Bot.getProperty("adminID");

if (request.photo && request.photo.length > 0) {
  let photo_id = request.photo[0].file_id;
  let admin_id = "" + a + ""; 

  Api.sendPhoto({
    chat_id: admin_id,
    photo: photo_id,
    caption: "📩 **New Payment Receipt**\n\nFrom User ID: `" + user.telegramid + "`",
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Approve", callback_data: "/approve " + user.telegramid },
          { text: "❌ Reject", callback_data: "/reject " + user.telegramid }
        ]
      ]
    }
  });

  Bot.sendMessage("*YOUR SCREENSHOT HAS BEEN SUBMITTED ✅*\n\n*PLEASE WAIT SOME TIME ADMIN SEND YOU LINK 🔗💎*");
} else {
  Bot.sendMessage("❌ Please send a photo (screenshot) of the payment.");
  Bot.run({ command: "/onScreenshot" });
}
