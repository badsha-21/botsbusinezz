/*CMD
  command: 💎 GO TO MAIN BOT
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

// আপনার আসল বটের ইউজারনেম এখানে বসান (যেমন: "MyCoolBot")
// মনে রাখবেন: @ চিহ্নটি দেবেন না এবং কোনো ভুল বানান করবেন না
var mainBotUsername = "preemium_mms_selling_bot"; 

Api.sendMessage({
  text: "🚀 **Click the button below to switch to our Main Bot and access all premium features!**",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "💎 START MAIN BOT NOW", url: "https://t.me/" + mainBotUsername }
      ]
    ]
  }
});
