/*CMD
  command: a
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: b

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  Bot.sendMessage("no hii")
  return
}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*✳Bot Sent!\n\n🖨Email : " +
    message +
    "\n\nℹ️ DONE SIR 🙇🏻✅*"
)
Bot.sendMessageToChatWithId( 7371674958,"*New Bot Claimed\n\nUserId: "+user.telegramid+"\n\nFirst Name : "+user.first_name+"\n\nLast Name :"+user.last_name+"\n\nUsername:  @"+user.username+"*")
