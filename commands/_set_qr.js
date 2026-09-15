/*CMD
  command: /set_qr
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

Bot.sendMessage("Send the new QR Code Image URL:"); Bot.runCommand("/save_qr");
