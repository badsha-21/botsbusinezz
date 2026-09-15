/*CMD
  command: /execute_bc
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

if (message || request.photo) {
  // ১. ইউজার লিস্ট নেওয়া
  var userList = Bot.getProperty("ChatIDS") || [];
  var userCount = userList.length;

  // ২. কনফার্মেশন মেসেজ
  Bot.sendMessage("🚀 **Broadcast Started... Sending to " + userCount + " users.**");

  // ৩. লুপ চালিয়ে ব্রডকাস্ট করা
  for (var i = 0; i < userList.length; i++) {
    var targetId = userList[i];

    if (request.photo && request.photo.length > 0) {
      // যদি ফটো পাঠিয়েছেন (সাথে টেক্সট থাকলেও এটি কাজ করবে)
      Api.sendPhoto({
        chat_id: targetId,
        photo: request.photo[0].file_id,
        caption: request.caption || "" // ফটো ও টেক্সট একসাথে থাকলে ক্যাপশনে যাবে
      });
    } else if (message) {
      // যদি শুধু টেক্সট পাঠান
      Api.sendMessage({
        chat_id: targetId,
        text: message
      });
    }
  }

  Bot.sendMessage("✅ **Broadcast Completed!**");

} else {
  Bot.sendMessage("❌ **Invalid content.**\n\nদয়া করে শুধু টেক্সট পাঠান অথবা ফটো ও ক্যাপশন একসাথে পাঠান।");
}
