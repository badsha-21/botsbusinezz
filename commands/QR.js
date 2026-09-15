/*CMD
  command: QR
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*SEND YOUR QR URL 🖇️

SEND QR URL NOT IMAGE 🚫*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("QR", message, "string")
Bot.sendMessage("YOUR QR NOW SET : "+message)
