/*CMD
  command: onBroadcast
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

var a = Bot.getProperty("adminID")

if (user.telegramid == a){
  var users = Bot.getProperty("userList", []);
  Bot.sendMessage("🚀 *Broadcast Started... Sending to " + users.length + " users.*");

  for(var i in users){
    if(request.photo && request.photo[0]){
      // If message is a Photo
      Api.sendPhoto({
        chat_id: users[i],
        photo: request.photo[0].file_id,
        caption: request.caption ? request.caption : ""
      });
    } else {
      // If message is Text
      Api.sendMessage({
        chat_id: users[i],
        text: message
      });
    }
  }
  Bot.sendMessage("✅ *Broadcast Sent Successfully!*");
}
