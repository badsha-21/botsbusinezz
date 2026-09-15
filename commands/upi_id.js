/*CMD
  command: upi_id
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

// আগে যেখানে UPI ID লিখেছিলেন, সেখানে এখন এটি বসান:
var upi_id = Bot.getProperty("upi_id") || "আপনার_ডিফল্ট_UPI@upi";
