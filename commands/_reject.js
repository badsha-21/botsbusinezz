/*CMD
  command: /reject
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

var userId = params; // এটি বাটন থেকে ইউজারের আইডিটি নিয়ে নেবে

if(userId){
  Api.sendMessage({
    chat_id: userId,
    text: "❌ *SORRY!! Your payment screenshot is invalid or inappropriate. Admin can't find your payment.*",
    parse_mode: "Markdown"
  });

  Bot.sendMessage("✅ User rejected and notification sent to: " + userId);
}
