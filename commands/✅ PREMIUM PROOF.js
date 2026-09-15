/*CMD
  command: ✅ PREMIUM PROOF
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

var proof = Bot.getProperty("proof_link") || "https://t.me/";

Api.sendMessage({
  text: "✅ **Click below to see our Payment Proofs:**",
  reply_markup: {
    inline_keyboard: [[{ text: "👉 VIEW PROOFS", url: proof }]]
  }
});
