/*CMD
  command: /check_upi
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

var saved_upi = Bot.getProperty("upi_id") || "কোনো UPI সেট করা নেই";
Bot.sendMessage("বর্তমান UPI ID: " + saved_upi);
