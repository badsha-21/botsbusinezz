/*CMD
  command: /start
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

// --- ১. ইনলাইন বাটন তৈরি (যা মেসেজের নিচে থাকবে) ---
var inline_buttons = [
  [{ text: "🎥 GET DEMO", callback_data: "/show_videos" }]
];

// ইনলাইন বাটনসহ মূল মেসেজ
Api.sendMessage({
  text: "Welcome! Click the button below to get the demo videos.",
  reply_markup: {
    inline_keyboard: inline_buttons
  }
});

// --- ২. কিবোর্ড বাটন তৈরি (যা নিচে টাইপিং বক্সে থাকবে) ---
var keyboard_buttons = [
  [{ text: "🎥 GET DEMO" }]
];

// কিবোর্ডটি যাতে স্টার্ট করার সাথে সাথেই নিচে বসে যায়
Api.sendMessage({
  text: "CHECK IT NOW🥵",
  reply_markup: {
    keyboard: keyboard_buttons,
    resize_keyboard: true,     // বাটন সাইজ ছোট ও সুন্দর রাখার জন্য
    one_time_keyboard: false,  // বাটনটি যাতে নিচে স্থায়ীভাবে থাকে
    force_reply: false         // কোনো রিপ্লাই প্রম্পট যাতে আটকে না থাকে
  }
});
