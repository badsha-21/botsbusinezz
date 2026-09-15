/*CMD
  command: /onScreenshot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: APPROVAL 

  <<ANSWER
📸 SUBMIT PROOF

Please send the payment screenshot here. Admin will verify it and grant access within 5-10 minutes.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var my_id = "8356234388"; 
var saved_admins = Bot.getProperty("admin_list") || "";
var admin_array = saved_admins.split(",");
var all_admins = [my_id];

for (var i = 0; i < admin_array.length; i++) {
  var id = admin_array[i].trim();
  if (id != "" && id != my_id) {
    all_admins.push(id);
  }
}

if (request.photo && request.photo.length > 0) {
  var photo_id = request.photo[0].file_id;
  
  // HTML ফরম্যাট ব্যবহার করা হয়েছে যা আন্ডারস্কোর বা বিশেষ চিহ্নে এরর দেয় না
  var caption_msg = "📩 <b>New Payment Receipt</b>\n\n" +
                    "👤 <b>From ID:</b> <code>" + user.telegramid + "</code>\n" +
                    "🔗 <b>Username:</b> @" + (user.username || "N/A");

  for (var j = 0; j < all_admins.length; j++) {
    Api.sendPhoto({
      chat_id: all_admins[j],
      photo: photo_id,
      caption: caption_msg,
      parse_mode: "HTML", // Markdown বদলে HTML করা হয়েছে
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✅ Approve", callback_data: "/approve " + user.telegramid },
            { text: "❌ Reject", callback_data: "/reject " + user.telegramid }
          ]
        ]
      }
    });
  }
  
  Bot.sendMessage("✅ <b>YOUR SCREENSHOT HAS BEEN SUBMITTED!</b>\n\nPlease wait, Admin will verify soon.", {parse_mode: "HTML"});

} else {
  Bot.sendMessage("❌ Please send a photo (screenshot) of the payment.");
}
