/*CMD
  command: /cancel_action
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

// ১. বর্তমান মেসেজটি (QR কোডটি) ডিলিট করে দেওয়া
Api.deleteMessage({
  chat_id: chat.chatid,
  message_id: request.message.message_id
});

// ২. আপনার মেইন মেনু বা ক্যাটাগরি লিস্ট দেখানোর কমান্ডটি রান করা
Bot.runCommand("/premium"); // আপনার মেনু কমান্ডের নাম এখানে দিন
