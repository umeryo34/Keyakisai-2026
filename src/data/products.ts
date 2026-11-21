import type { Product } from "@/types/product";
import scheduleFitterImg from "@/assets/ScheduleFitter.png";
import atomemoImg from "@/assets/atomemo.webp";
import tokiwaImg from "@/assets/tokiwa.png";
import drankerImg from "@/assets/dranker.webp";
import chillNightImg from "@/assets/chill-night.webp";
import wealyImg from "@/assets/wealy.webp";
import momoPayImg from "@/assets/momopay.png";
import dayliaImg from "@/assets/daylia.webp";
import tovalImg from "@/assets/toval.webp";
import manzaiImg from "@/assets/manzai.png";
import carpoolImg from "@/assets/carpool.png";
import dopaPongImg from "@/assets/dopa-pong.webp";
import pcRemoteImg from "@/assets/pc-remote.webp";
import sarcasmImg from "@/assets/sarcasm-detector.webp";

export const products: Product[] = [
  {
    id: "manzai",
    title: "MANZAI",
    catchphrase: "タイミングよく正しくツッコんで高得点を目指そう！",
    description:
      "漫才のゲームです！タイミングよく正しくツッコんで高得点を目指そう！",
    category: "Game",
    thumbnail: manzaiImg.src,
    authors: [
      { name: "いおな", grade: "2年" },
      { name: "きょうか", grade: "2年" },
      { name: "みやこ", grade: "2年" },
    ],
    period: "2026年7月〜現在",
    motivation: "漫才ゲーム界のパイオニアになるため",
    appeals: ["実際に漫才をしているかのような没入感を味わえます(ガチ)"],
    links: {},
    techStack: [],
  },
  {
    id: "toval",
    title: "TOVAL",
    catchphrase: "あなたの日々が、2人を変える。",
    description: `「TOVAL」はタスクを完了させると1日1話ストーリーが進む習慣化アプリです。

＜使い方＞
・目標時間のタイマーを起動
・タイマーが終わるまでタスクに取り組む
・タイマー終了でストーリー1話解放
ストーリーは全60話。約2か月間1つのタスクの継続を後押しすることで、習慣化の基盤を作ることを目指しています。

＜機能＞
・タイマー機能
カウントダウンで目標時間を計測します。目標時間を達成すると時間に応じたポイント（NT）が付与されます。目標時間を過ぎるとカウントアップで超過時間が計測され、その分のNTも付与されます。ストーリー解放は1日1話までですが、タイマーは1日に何回でも起動できます。
・メモリー機能
解放したストーリーを読み返すことができます。
・ログ機能
カレンダーからその月の自分の取り組み状況がわかります。また、指定した日の「タスクに取り組んだ時間」と「ふりかえりメモ（任意）」を確認できます。
・ショップ機能
貯まったNTを消費し、追加のストーリーを解放できます。継続だけでなく、取り組む時間を増やす動機となります。

＜今後の展望＞
TestFlightで短期バージョンをユーザーに体験していただき、アプリの効果をより発揮できるよう改善したいと考えています。改善後、60話の完全版をAppStoreにてリリース予定です。`,
    category: "App",
    thumbnail: tovalImg.src,
    team: "SleguasTech",
    authors: [{ name: "さほの", grade: "2年" }],
    period: "2026年7月〜現在",
    motivation: `近年就職の早期化やAIの普及によって、短期間で実力を証明できる、TOEICや簿記等の「資格勉強」の重要性が高まっていると感じます。勉強時間を確保するには、勉強を日々の習慣に組み込む”習慣化”が効果的ですが、私は3日坊主でタスクを継続して行うことができず、ついサボってしまいます。
色々な習慣化アプリを試してみましたが、既存のアプリは継続することで初めて達成感やアイテムなどの報酬をもらうことができ、そもそも短期間でやめてしまうユーザーには効果的ではないことに気が付きました。
そこで、タスクが終わった時点で報酬が貰えるシステムがあれば継続できるのではないかと考え、ストーリーを報酬とするこのアプリの開発を始めました。`,
    appeals: [
      "世界観：幻想的で温かみのあるデザインと、個性的な二人の宇宙人が魅力です。",
      "徹底した習慣化の基礎づくり：登録できるタスクは1つのみ。60話のストーリーで約1カ月間あなたのやる気をサポートし続けます。",
    ],
    links: {
      web: "https://sleguas.com/pages/toval",
    },
    techStack: [],
  },
  {
    id: "daylia",
    title: "Daylia(デイリア)",
    catchphrase: "その日の気分と写真で自分だけの日記を作ろう",
    description:
      "その日の気分や日記を写真と一緒に記録でき、友達と共有できるカレンダー風写真アプリです！！あとから振り返った時に鮮明にこの日の記憶を思い出すことができます。",
    category: "App",
    thumbnail: dayliaImg.src,
    authors: [
      { name: "ちょこ。", grade: "2年" },
      { name: "ぷにに", grade: "2年" },
      { name: "みさと", grade: "2年" },
    ],
    period: "9月17日〜10月3日(サポーターズハッカソン)",
    appeals: [
      "デザインと機能面にはこだわりました！デザインではDayliaという名前もあり、花を取り入れて鮮やかに仕上げました。",
      "機能面では、自分たちで記録だけでなく、シェア機能を付けて他人と共有できるようにしました。1か月終わった時に1か月分の写真をまとめてシェアできるので、たくさんの人とどんな1か月をおくったのか共有してほしいです！",
    ],
    links: {
      web: "https://dopa-pong.vercel.app",
    },
    techStack: [],
  },
  {
    id: "momo-pay",
    title: "ももPay",
    catchphrase: "成蹊大学生のための決済アプリ",
    description:
      "成蹊大学生のための決済アプリです。手元で商品のバーコードを読み取って、そのまま決済して買い物完了。スマホでレジ決済ができます。",
    category: "App",
    thumbnail: momoPayImg.src,
    authors: [
      { name: "そら", grade: "3年" },
      { name: "たかそら", grade: "2年" },
      { name: "しん", grade: "2年" },
      { name: "せいや", grade: "2年" },
      { name: "いおな", grade: "2年" },
    ],
    period: "2026年5月〜現在",
    motivation:
      "成蹊大学生は大学構内にあるファミリーマートで買い物をすることが多く、友人レジとセルフレジの待ち行列が交差していることも珍しくありません。そこで、もしスマホでレジ決済ができたら混雑を解消できるのではないかという発想から実際に作ってみようと始めました。",
    appeals: [
      "手元で商品のバーコードを読み取れる！そうしたら決済をして買い物完了。",
      "成蹊大学のアカウントで認証(できたらいいな)",
    ],
    links: {},
    techStack: [],
  },
  {
    id: "wealy",
    title: "Wealy",
    catchphrase: "毎日のコーデをWealyと",
    description:
      "カレンダー機能とクローゼット機能で、持っている服やコーディネートを可愛く管理できるアプリです。それだけでなく、もっと使いやすいような機能を開発中です。",
    category: "App",
    thumbnail: wealyImg.src,
    authors: [
      { name: "うめ", grade: "3年" },
      { name: "りょーた", grade: "OB" },
      { name: "よっしー", grade: "OB" },
    ],
    period: "1年以上",
    motivation: "身近な服の問題を解決するため",
    highlights: [
      "持っている服を可愛く管理できるということにとどまらず、持っている服からコーディネートを提案してくれる",
    ],
    appeals: [
      "カレンダー機能とクローゼット機能で持っている服やコーディネートを可愛く管理できる。それだけでなくもっと使いやすいような機能を開発中。",
    ],
    links: {
      appStore: "https://apps.apple.com/jp/app/wealy-%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%AA%E3%83%BC-%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BC%E3%83%83%E3%83%88-%E6%B4%8B%E6%9C%8D%E7%AE%A1%E7%90%86-%E3%82%B3%E3%83%BC%E3%83%87%E8%A8%98%E9%8C%B2/id6755212242",
    },
    techStack: [],
  },
  {
    id: "chill-night",
    title: "CHILL NIGHT",
    catchphrase: "日本の夜景を、当てて・眺めて、ひと息つこう。",
    description:
      "日本の夜景スポットを「当てて・眺めて」楽しむ、息抜き用のチルWebアプリです。夜景クイズ（写真を見て地図をクリックし、場所を当ててスコアを競う）と、アンビエントモード（夜景を全画面で眺めながら、環境音を楽しむ）の二つのモードが楽しめます。",
    category: "Web",
    thumbnail: chillNightImg.src,
    team: "0xD",
    authors: [
      { name: "Hiiragi", grade: "3年" },
      { name: "tukimi", grade: "3年" },
      { name: "とっしー", grade: "1年" },
      { name: "サンダルクイナ", grade: "1年" },
    ],
    period: "2026年7月〜現在",
    motivation:
      "作業や勉強の合間の休憩で、TikTokやYouTubeを見続けるなど、いわゆるドパってる状態から抜け出してCHILLしようというコンセプトのアプリが作りたかった",
    appeals: [
      "没入感を上げられるように、全画面表示機能を付けた",
      "ボタンや操作パネルをすりガラス風にして、夜景の写真の雰囲気を邪魔しないデザインにした",
      "操作しないとボタンが自動で消えるぼーっと眺められる仕様にした",
    ],
    links: {},
    techStack: [],
  },
  {
    id: "dranker",
    title: "DRANKER",
    catchphrase: "お酒を飲めなくても、遠くても、雰囲気で乾杯。",
    description:
      "お酒を飲めない人も、遠くでもお酒を飲みながら楽しみたい人も、雰囲気を楽しみながら遊べるゲームです。ボイスチャット機能があるので、おしゃべりしながら遊べます。とても難易度の高い神経衰弱を、最大4人で同時に遊ぶことができます。",
    category: "Game",
    thumbnail: drankerImg.src,
    authors: [
      { name: "てんとうむし", grade: "2年" },
      { name: "たかそら", grade: "2年" },
      { name: "なす", grade: "2年" },
      { name: "いとそまっくす", grade: "1年" },
    ],
    period: "2026年7月〜現在",
    motivation:
      "お酒を飲めない人も、遠くでもお酒を飲みながら楽しみたい人も、雰囲気を楽しみながら遊べるゲームを作りたいと思い、制作しました！",
    appeals: [
      "ボイスチャット機能があるので、おしゃべりしながら遊べます！",
      "とても難易度の高い神経衰弱を遊ぶことができます^^",
      "最大4人で同時に遊ぶことができます。",
    ],
    links: {},
    techStack: [],
  },
  {
    id: "sarcasm-detector",
    title: "冷笑検知AI",
    catchphrase: "最近のAIはなんてクールなんだ！！",
    description:
      "Raspberry Pi 5に搭載したSystem One型AIモデル「Laya-Multilingual」を用いた冷笑検知サービスです。「うお」「ど、どわー」などの冷笑ワードをAIが推論し判定します。16進数変換などさまざまな変換に対して対応できます。",
    category: "Hardware",
    thumbnail: sarcasmImg.src,
    authors: [{ name: "ひかり", grade: "3年" }],
    period: "記憶にありません",
    motivation:
      "身内に冷笑検知システムを提供していましたが、変換されまくり、しまいには「UTF-8の16進数エンコード後各バイトに対して1ビットの右循環シフト」とかされたのでAIに頼ることにしました。",
    highlights: [
      "Raspberry Pi 5に4万ぐらい払ってます。今回の展示物の中で一番金使ってる自信があります。",
    ],
    appeals: [
      "今回のサムネイルはすべてGPT-6 Astraに作らせました。AIってすごいね。",
    ],
    links: {},
    techStack: ["Raspberry Pi 5", "Laya-Multilingual"],
  },
  {
    id: "pc-remote",
    title: "どこでもPC",
    catchphrase: "スマホから、パソコンを自由に操作！OpenClawでAIとも対話。",
    description:
      "スマホからパソコンをマウス・キーボードで操作できるアプリ。さらにOpenClawを通してAIアシスタントに指示を出し、まるで手元にあるようにPCを操作できます。",
    category: "App",
    thumbnail: pcRemoteImg.src,
    authors: [{ name: "Itoth", grade: "3年" }],
    period: "1週間",
    motivation: "パソコンをスマホから操作できたら便利だと思ったため。",
    highlights: ["よく使う機能はボタンにした"],
    appeals: ["スマホでは画面サイズが限られるため、AIで操作するようにした"],
    links: {},
    techStack: [],
  },
  {
    id: "dopa-pong",
    title: "DOPA PONG",
    catchphrase: "打ち返すたびに、世界が壊れる。",
    description:
      "ドパガキの為に作られたPong(ピンポン)ゲームです。ドパガキによる、ドパガキのための、ドパガキのゲームです。YouTube Shortだのインスタグラムのリールだのと比較して動体視力を鍛えられるため、コスパ・タイパ共に良いです。継続力の低いドパガキに対するソリューションとして、ありえんぐらいドーパミン出す作りにしています。ドパガキは3行以上読めないため、ここからは読んでくれた人の為の豆知識ですが、静的サイト生成（SSG）は、ビルド時にHTMLをあらかじめ生成する方式のため、リクエストごとにHTMLを生成する必要がなく、ページを高速に配信でき、サーバーへの負荷も軽減できます。一方で、基本的にはコンテンツの更新時に再ビルドが必要となるため、頻繁に情報が更新されるページには不向きです。これに対して、サーバーサイドレンダリング（SSR）は、ユーザーからのリクエストに応じてサーバー側でHTMLを動的に生成する方式です。そのため、最新の情報やユーザーごとに異なる内容を表示するページに適しています。一方で、リクエストごとにサーバー側で処理が発生するため、SSGと比較してサーバーへの負荷が大きくなる傾向があります。このように、SSGとSSRにはそれぞれメリットとデメリットがあり、更新頻度や必要な動的処理など、ページの要件に応じて適切な方式を選択することが重要です。とりあえず困ったら私に相談しろ。ニッコニコで話に付き合ってやる。",
    category: "Game",
    thumbnail: dopaPongImg.src,
    team: "ドパガキを許すな！！！",
    authors: [{ name: "ひかり", grade: "3年" }],
    period: "ひかりが馬鹿おさけ飲んでるとき",
    motivation: "ドパガキを潰すため",
    highlights: [
      "ドパガキの気持ちを体験するため、作者自身がドパガキになりきって開発を進めました。具体的に言うと開発方式にDDD(ドパガキ駆動開発)を採用し、ChatGPTに全部ぶん投げて開発しました。",
    ],
    appeals: [
      "記憶が正しければNext.jsを採用してます。技術は真面目に選んだはずです。記憶が正しければ。",
    ],
    links: {
      web: "https://dopa-pong.vercel.app",
    },
    techStack: [],
  },
  {
    id: "carpool",
    title: "送迎チーム分け",
    catchphrase: "車割りと集合場所を、自動で決める。",
    description:
      "複数人で同じ目的地へ車で向かうとき、「何台に分けるか／誰と同乗か／どこに集合するか」を自動で決めるWebアプリ。結果はリストだけでなく地図上にも表示されるのでわかりやすい。",
    category: "Web",
    thumbnail: carpoolImg.src,
    authors: [{ name: "そら", grade: "3年" }],
    period: "2026年7月〜8月",
    motivation:
      "スキューバダイビングサークルで遠出が多く、幹事が毎回「最寄駅を踏まえた集合場所＋車割り」を手で組む負担が大きそうだったため。",
    highlights: [
      "集合駅方式",
      "計算と外部APIの分離",
      "運転手はアプリで決めない",
      "制約を先に入れるクラスタリング",
      "ゲスト／ログインの二段構え",
    ],
    appeals: ["結果がリストだけでなく地図上で表示されてわかりやすい"],
    links: {
      web: "https://carpool-five-beta.vercel.app/",
      slide: "https://canva.link/3qet9mjg0ks571r",
    },
    techStack: [],
  },
  {
    id: "schedule-fitter",
    title: "ScheduleFitter",
    catchphrase: "適当な予定を、衝突までその場で直せる。",
    description:
      "適当に書いた予定を、AIが構造化してカレンダーに入れ、衝突までその場で直せるカレンダーアプリ。",
    category: "Web",
    thumbnail: scheduleFitterImg.src,
    team: "空き時間ラボ",
    authors: [
      { name: "そら", grade: "3年" },
      { name: "そば", grade: "2年" },
      { name: "ゆうか", grade: "1年" },
    ],
    period: "2026年7月〜10月",
    motivation: "予定のダブルブッキングをAIを利用して解決したいと考えたため。",
    highlights: [
      "テキスト・画像・音声のマルチモーダル入力を1つの確認フローに統一し、衝突時は「どっちを優先するか」をすぐ選べるUIにした",
      "Geminiの提案をそのまま登録せず、確認・修正してから保存する設計",
    ],
    appeals: [
      "「入力の手間」と「予定の衝突」を一気に解決できる",
      "フロント（React）とバック（PHP）を分け、Dockerで再現しやすい構成",
      "実利用を意識した確認・削除・衝突解決まで実装済み",
    ],
    links: {},
    techStack: ["React", "PHP", "Docker", "Gemini"],
  },
  {
    id: "atomemo",
    title: "あとめも",
    catchphrase: "終わったあとに、ふりかえる次のTodoにつながる",
    description:
      "タスクを完了した時にそのタスクの振り返りを入力できるモバイルTODOアプリです！「Dayモード」にてカレンダーアプリと同様、今後の予定(タスク)を入力でき、そのタスクが完了したと同時にそのタスクについての振り返りを保存できます。保存した振り返りは「振り返りモード」で完了したタスクと一緒に一覧で見ることができ、前回の反省を次に活かすことができます。",
    category: "App",
    thumbnail: atomemoImg.src,
    team: "さまあず",
    authors: [
      { name: "さほの", grade: "2年" },
      { name: "みさと", grade: "2年" },
      { name: "あやな", grade: "1年" },
      { name: "まこと", grade: "1年" },
    ],
    links: {},
    techStack: [],
  },
  {
    id: "tokiwa",
    title: "Tokiwagi UI",
    catchphrase: "変わる毎日に、変わらない使いやすさを。",
    description:
      "Tokiwagi UIは、予定やタスクを通じて人と人の時間、今日と明日をつなぐ「TokiWa Calendar」のために開発されたデザインシステムです。「『とき』を繋ぎ、共に続く『わ』を。」というフィロソフィーを土台に、季節を越えて緑を保つ「ときわぎ（常盤木）」のように、日々の暮らしの中で永く使い続けられる体験を目指しています。",
    category: "Game",
    thumbnail: tokiwaImg.src,
    authors: [
      { name: "ひかり", grade: "3年" },
      { name: "おおにし", grade: "3年" },
      { name: "Itoh", grade: "3年" },
      { name: "はやと", grade: "3年" },
    ],
    links: {
      web: "https://tokiwa-calendar.com/welcome",
    },
    techStack: ["Unity", "C#", "Aseprite"],
  },
];
