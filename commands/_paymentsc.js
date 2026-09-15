/*CMD
  command: /paymentsc
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

// Step 1: Define the inline keyboard buttons
var keyboard = [
  [
    { text: "🔄Try Again", callback_data: "/premium" }
  ]
];

// Step 2: Send the photo along with caption text and buttons
Api.sendPhoto({
  photo: "https://kommodo.ai/i/7r0s3tkx4FH3SkO25n4U", // Direct link to the image
  caption: "*PAYMENT NOT COMPLETED ❌ \n \n PLEASE PAY FIRST THEN CLICK ON I HAVE PAID BUTTON FOR VIP CHANNEL LINK*",  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: keyboard
  }
});
