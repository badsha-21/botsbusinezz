/*CMD
  command: /save_admin_list
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

if (message) {
  // ১. ইউজার যে আইডিগুলো পাঠাবে সেগুলো 'admin_list' প্রপার্টিতে সেভ হবে
  // যেমন: 123456,789012 (কমা দিয়ে আইডি দিতে হবে)
  Bot.setProperty("admin_list", message, "string");

  var msg = "✅ **Admin List Updated Successfully!**\n\n" +
            "👥 **Current Admins:**\n`" + message + "`\n\n" +
            "⚠️ **Note:** নিশ্চিত করুন যে এই আইডিগুলো বটটিকে একবার /start করেছে। নাহলে বট তাদের পেমেন্ট স্ক্রিনশট পাঠাতে পারবে না।";

  Bot.sendMessage(msg);
} else {
  Bot.sendMessage("❌ **Error:** Invalid ID. Please send numbers separated by commas.");
}
