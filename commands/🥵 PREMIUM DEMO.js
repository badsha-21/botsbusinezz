/*CMD
  command: 🥵 PREMIUM DEMO
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

var demo = Bot.getProperty("demo_link") || "http://t.me/premium_demo_prime_bot";

Api.sendMessage({
  text: "🥵 **Click the button below to view our Premium Demo:**",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "👉 VIEW DEMO NOW", url: demo }]]
  }
});
