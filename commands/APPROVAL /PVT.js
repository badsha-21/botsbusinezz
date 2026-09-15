/*CMD
  command: PVT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: APPROVAL 
  answer: *SEND YOUR PVT CHANNEL LINK 🖇️*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("PVT", message, "string")
Bot.sendMessage("YOUR PVT CHANNEL LINK SET : "+message)
