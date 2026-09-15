/*CMD
  command: onInlineQuery
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

Bot.sendMessage("Testing Inline Query")
var results = [
  {
    type: "article",
    id: "premium",
    title: "💎 GET PREMIUM",
    description: "Upgrade to premium services",
    input_message_content: { message_text: "I want to get Premium!" }
  },
  {
    type: "article",
    id: "demo",
    title: "🎮 DEMO",
    description: "Check our service demo",
    input_message_content: { message_text: "Show me the Demo." }
  },
  {
    type: "article",
    id: "proofs",
    title: "✅ PROOFS",
    description: "View payment proofs",
    input_message_content: { message_text: "I want to see the Proofs." }
  }
];

Api.answerInlineQuery({
  inline_query_id: request.id,
  results: results,
  cache_time: 0
});
