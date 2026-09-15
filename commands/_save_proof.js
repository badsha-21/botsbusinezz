/*CMD
  command: /save_proof
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

Bot.setProperty("proof_link", message, "string");
Bot.sendMessage("✅ Proofs Channel Link Updated!");
