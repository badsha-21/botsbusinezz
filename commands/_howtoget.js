/*CMD
  command: /howtoget
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

// Step 1: Define the inline keyboard button
var keyboard = {
  inline_keyboard: [
    [{ text: "Get Premium🥵", callback_data: "/premium" }]
  ]
};

// Step 2: Send the single video with the button attached
Api.sendVideo({
  video: "https://t.me/bbhjjjnnnnnnn/14", // Replace with your video URL or Telegram File ID
  reply_markup: keyboard
});
