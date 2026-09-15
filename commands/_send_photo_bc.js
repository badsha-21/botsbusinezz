/*CMD
  command: /send_photo_bc
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

Api.sendPhoto({ photo: options.photo, caption: options.caption });
