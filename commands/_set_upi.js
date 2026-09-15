/*CMD
  command: /set_upi
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

// কোড:
Bot.sendMessage("💳 নতুন UPI ID টি পাঠান (যেমন: example@upi):");
Bot.runCommand("/save_upi");
