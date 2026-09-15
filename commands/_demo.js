/*CMD
  command: /demo
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

// Step 1: Stop the button loading spinner on Telegram
Api.answerCallbackQuery({
  callback_query_id: request.id
});

// Step 2: Define the button that will appear under EVERY video
var videoButton = {
  inline_keyboard: [
    [{ text: "Get Premium 🥵", callback_data: "/premium" }]
  ]
};

// Step 3: Add all 10 video URLs or File IDs into an array
var videoList = [
  "https://t.me/bbhjjjnnnnnnn/13?single", // Video 1
  "https://t.me/bbhjjjnnnnnnn/12?single", // Video 2
  "https://t.me/bbhjjjnnnnnnn/11?single", // Video 3
  "https://t.me/bbhjjjnnnnnnn/10?single", // Video 4
  "https://t.me/bbhjjjnnnnnnn/9?single", // Video 5
  "https://t.me/bbhjjjnnnnnnn/8?single", // Video 6
  "https://t.me/bbhjjjnnnnnnn/7?single", // Video 7
  "https://t.me/bbhjjjnnnnnnn/6?single", // Video 8
  "https://t.me/bbhjjjnnnnnnn/5?single", // Video 9
  "https://t.me/bbhjjjnnnnnnn/4?single"  // Video 10
];

// Step 4: Loop through and send each video WITH its button attached
for (var i = 0; i < videoList.length; i++) {
  Api.sendVideo({
    video: videoList[i],
    reply_markup: videoButton
  });
}
