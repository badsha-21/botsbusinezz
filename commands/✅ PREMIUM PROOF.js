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

var proof = Bot.getProperty("proof_link") || "https://t.me/+RCCNCH-nOgo5MjVh";

Api.sendMessage({
  text: "✅ **Click the button below to check our Payment Proofs:**",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "👉 VIEW PROOFS NOW", url: proof }]]
  }
});
