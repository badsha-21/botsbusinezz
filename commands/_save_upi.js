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

// কোড:
if (message) {
  // ডাটাবেসে সেভ করা হচ্ছে
  Bot.setProperty("upi_id", message, "string");
  
  Bot.sendMessage("✅ UPI ID সফলভাবে সেভ হয়েছে!\nনতুন UPI: " + message);
} else {
  Bot.sendMessage("❌ দয়া করে একটি ভ্যালিড টেক্সট পাঠান।");
}
