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

var demo = Bot.getProperty("demo_link") || "https://t.me/";

Api.sendMessage({
  text: "🥵 **Click below to see our Premium Demo:**",
  reply_markup: {
    inline_keyboard: [[{ text: "👉 VIEW DEMO", url: demo }]]
  }
});
