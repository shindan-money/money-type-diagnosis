const TYPES = {
  investor: { name: "投資家タイプ", icon: "💰", summary: "未来の可能性を信じ、今のお金を育てることが得意なタイプです。", advice: "利益だけでなく、リスクの大きさと使う時期もセットで考えると、さらに強みが活きます。" },
  saver: { name: "貯蓄家タイプ", icon: "🏦", summary: "安心の土台を大切にし、着実にお金を守れるタイプです。", advice: "貯める目的と期限を決め、余裕資金の一部を楽しみや成長にも回すと満足度が上がります。" },
  planner: { name: "計画家タイプ", icon: "🎯", summary: "数字と計画を使って、お金を整えるのが得意なタイプです。", advice: "予定外の出費も楽しめる『自由枠』を作ると、計画が長続きしやすくなります。" },
  enjoyer: { name: "エンジョイタイプ", icon: "🎉", summary: "経験や喜びにお金を変えるのが上手なタイプです。", advice: "先取り貯蓄を少額でも自動化すると、楽しさと安心を両立できます。" },
  challenger: { name: "チャレンジャータイプ", icon: "⚡", summary: "新しい挑戦や成長のために、思い切ってお金を使えるタイプです。", advice: "挑戦予算の上限と撤退ラインを決めておくと、大胆さがより大きな武器になります。" },
  balance: { name: "バランスタイプ", icon: "💎", summary: "使う・貯める・増やすを、状況に応じて切り替えられるタイプです。", advice: "器用さが強みです。今いちばん優先したい目的を1つ決めると、成果がさらに見えやすくなります。" }
};

const QUESTIONS = [
  { text: "今よりも、将来のためにお金を残したい。", type: "investor" },
  { text: "少しずつでも、お金を増やすための投資（NISAなど）を始めたいと思う。", type: "investor" },
  { text: "今ほしい物があっても、将来のためなら我慢できる。", type: "investor" },
  { text: "お金が残っていると安心する。", type: "saver" },
  { text: "物を買う前に、本当に必要か考える。", type: "saver" },
  { text: "もしものために、お金を残しておきたい。", type: "saver" },
  { text: "買い物をする前に、いくら使うか考える。", type: "planner" },
  { text: "大きな買い物は、よく調べてから決める。", type: "planner" },
  { text: "思いつきで買うことは少ない。", type: "planner" },
  { text: "旅行や趣味には、お金を使いたい。", type: "enjoyer" },
  { text: "思い出になることには、お金を使いたい。", type: "enjoyer" },
  { text: "「今しかできない」と思うことは楽しみたい。", type: "enjoyer" },
  { text: "新しいことに挑戦するのが好き。", type: "challenger" },
  { text: "自分が成長できることには、お金を使いたい。", type: "challenger" },
  { text: "面白そうと思ったら、まずやってみたい。", type: "challenger" },
  { text: "貯めることも、使うことも大切だと思う。", type: "balance" },
  { text: "状況に合わせて、お金の使い方を変えている。", type: "balance" },
  { text: "お金は「貯める・使う・増やす」のバランスが大切だと思う。", type: "balance" }
];
