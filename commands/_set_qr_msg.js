/*CMD
  command: /set_qr_msg
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

Bot.sendMessage("Send the new QR Message text:"); Bot.runCommand("/save_qr_msg");
