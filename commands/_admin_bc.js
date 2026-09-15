/*CMD
  command: /admin_bc
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

// আপনার অ্যাডমিন প্যানেলের ব্রডকাস্ট বাটন থেকে এটি রান হবে
Bot.sendMessage("📝 **Send your message (Text or Photo with Caption):**");
Bot.runCommand("/execute_bc");
