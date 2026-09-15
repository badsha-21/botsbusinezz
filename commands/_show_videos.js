/*CMD
  command: /show_videos
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

var page = parseInt(params) || 0;
var perPage = 10;

// আপনার ভিডিও লিঙ্কগুলো এখানে দিন
var videoLinks = [
"https://t.me/nnnkkkkkm/113?single", 
"https://t.me/nnnkkkkkm/112?single", 
"https://t.me/nnnkkkkkm/116?single", 
"https://t.me/nnnkkkkkm/118?single", 
"https://t.me/nnnkkkkkm/115?single", 
"https://t.me/nnnkkkkkm/104?single", 
"https://t.me/nnnkkkkkm/103?single", 
"https://t.me/nnnkkkkkm/99?single", 
"https://t.me/nnnkkkkkm/71?single", 
"https://t.me/nnnkkkkkm/73?single", 
"https://t.me/nnnkkkkkm/70?single", 
"https://t.me/nnnkkkkkm/39?single", 
"https://t.me/nnnkkkkkm/114?single", 
"https://t.me/nnnkkkkkm/108?single", 
"https://t.me/nnnkkkkkm/107?single", 
"https://t.me/nnnkkkkkm/101?single", 
"https://t.me/nnnkkkkkm/86?single", 
"https://t.me/bbhjjjnnnnnnn/3", 
"https://t.me/bbhjjjnnnnnnn/2"
];

var start = page * perPage;
var end = start + perPage;
var currentVideos = videoLinks.slice(start, end);

// ১. ভিডিও পাঠানোর অংশ
if (currentVideos.length > 0) {
  if (currentVideos.length === 1) {
    Api.sendVideo({
      video: currentVideos[0],
      caption: "🎬 **Demo Video " + (start + 1) + "**",
      parse_mode: "Markdown"
    });
  } else {
    var media = [];
    for (var i = 0; i < currentVideos.length; i++) {
      media.push({
        type: "video",
        media: currentVideos[i],
        caption: i === 0 ? "🎬 **Demo Batch " + (page + 1) + "**" : ""
      });
    }
    Api.sendMediaGroup({ media: media });
  }
}

// ২. বাটন পাঠানোর অংশ (ডাবল মেসেজ রোধ করতে একটি মাত্র কন্ডিশন)
if (end < videoLinks.length) {
  // যদি আরও ভিডিও বাকি থাকে
  var nextSet = page + 1;
  Api.sendMessage({
    text: "✅ **Demo Batch " + (page + 1) + " sent!**\nClick below for the next 10 videos:",
    reply_markup: { 
      inline_keyboard: [[{ text: "👉 NEXT 10 VIDEOS", callback_data: "/show_videos " + nextSet }]]
    }
  });

} else {
  // --- ১. প্রথম মেসেজ: ইনলাইন বাটনসহ মূল টেক্সট ---
var inline_buttons = [
  [{ text: "💎 GO TO MAIN BOT", url: "http://t.me/desi_preemium_seller_bot" }]
];

var msg = "🏁 **All demo videos finished! purchase premium for more best collections**\n\n" +
"⬇️Click the button below to join our Main Bot and purchase premium⬇️.";

Api.sendMessage({
  text: msg,
  reply_markup: {
    inline_keyboard: inline_buttons
  },
  parse_mode: "Markdown"
});


// --- ২. দ্বিতীয় মেসেজ: এটি নিচের কিবোর্ড বাটন দুটিকে স্ক্রিনে নিয়ে আসবে ---
var keyboard_buttons = [
  [
    { text: "💎 GO TO MAIN BOT" },
    { text: "🎥 GET DEMO" }
  ]
];

Api.sendMessage({
  text: "𝗖𝗹𝗶𝗰𝗸 𝗼𝗻 𝘁𝗵𝗲 𝗯𝘂𝘁𝘁𝗼𝗻 𝗯𝗲𝗹𝗼𝘄 𝗳𝗼𝗿 𝗩𝗜𝗣 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗔𝗰𝗰𝗲𝘀𝘀", 
  reply_markup: {
    keyboard: keyboard_buttons,
    resize_keyboard: true,    // বাটনগুলো ছোট ও সুন্দর দেখাবে
    one_time_keyboard: false  // বাটনগুলো নিচে স্থায়ীভাবে থাকবে
  }
});
}
