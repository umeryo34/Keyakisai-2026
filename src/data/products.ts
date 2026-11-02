import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "campus-link",
    title: "CampusLink",
    catchphrase: "学内イベントが、ひとつのタイムラインに集まる。",
    description:
      "サークル勧誘、講義告知、欅祭の企画までをカード形式で流せる学内イベントボードです。カテゴリと開催日で絞り込み、気になる企画はブックマークして当日の動線にできます。",
    category: "Web",
    tableId: "A",
    thumbnail: "/thumbnails/campus-link.svg",
    authors: [
      { name: "佐藤 陽菜", grade: "3年", sns: "https://github.com/peachtech" },
      { name: "林 拓海", grade: "2年" },
    ],
    links: {
      web: "https://peachtech.jp",
      github: "https://github.com/peachtech",
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    boothExperience: "実際のタイムラインを触って、お気に入り企画の保存まで体験できます。",
  },
  {
    id: "keyaki-pass",
    title: "Keyaki Pass",
    catchphrase: "行列のストレスを、スマホのパス1枚に。",
    description:
      "模擬店や企画の整理券をQRパスとして発行するモバイルアプリです。待ち人数の可視化とリマインド通知で、学園祭当日の「今行くべき場所」がわかります。",
    category: "App",
    tableId: "B",
    thumbnail: "/thumbnails/keyaki-pass.svg",
    authors: [{ name: "高橋 蓮", grade: "3年", sns: "https://x.com" }],
    links: {
      appStore: "https://apps.apple.com",
      googlePlay: "https://play.google.com",
      github: "https://github.com/peachtech",
    },
    techStack: ["React Native", "Expo", "TypeScript", "Firebase"],
    boothExperience: "デモ端末でパス発行からチェックインまでの流れを体験できます。",
  },
  {
    id: "pixel-orchard",
    title: "Pixel Orchard",
    catchphrase: "落ちてくる果実を、反射神経で収穫せよ。",
    description:
      "欅の実をモチーフにしたカジュアルアクションゲームです。コンボと天候ギミックでスコアが伸び、学園祭限定のランキングにその場で登録できます。",
    category: "Game",
    tableId: "C",
    thumbnail: "/thumbnails/pixel-orchard.svg",
    authors: [
      { name: "伊藤 美咲", grade: "2年" },
      { name: "中村 蒼", grade: "1年" },
    ],
    links: {
      web: "https://peachtech.jp",
      demoVideo: "https://www.youtube.com",
      github: "https://github.com/peachtech",
    },
    techStack: ["Unity", "C#", "Aseprite"],
    boothExperience: "コントローラーを手にとって、その場でハイスコアに挑戦できます。",
  },
  {
    id: "plant-sense",
    title: "PlantSense",
    catchphrase: "教室の空気と、鉢植えの声を可視化する。",
    description:
      "温湿度・照度・土壌水分をセンサーで取得し、Webダッシュボードへリアルタイム表示するIoT作品です。閾値を超えるとLEDが色を変えて「今の教室の状態」を教えてくれます。",
    category: "Hardware",
    tableId: "D",
    thumbnail: "/thumbnails/plant-sense.svg",
    authors: [
      { name: "山本 結衣", grade: "4年", sns: "https://github.com/peachtech" },
      { name: "加藤 大輝", grade: "3年" },
    ],
    links: {
      web: "https://peachtech.jp",
      github: "https://github.com/peachtech",
    },
    techStack: ["ESP32", "MicroPython", "MQTT", "Next.js"],
    boothExperience: "センサーに息を吹きかけたり、土を触ったりして、数値が動く様子を確認できます。",
  },
  {
    id: "poster-studio",
    title: "Poster Studio",
    catchphrase: "欅祭の世界観を、30秒でポスターに。",
    description:
      "PeachTechのカラーシステムとタイポグラフィを組み込んだポスタージェネレーターです。キャッチコピーを入れるだけで、SNS用と印刷用の書き出しができます。",
    category: "Design",
    tableId: "E",
    thumbnail: "/thumbnails/poster-studio.svg",
    authors: [{ name: "小林 彩", grade: "2年", sns: "https://www.instagram.com" }],
    links: {
      web: "https://peachtech.jp",
      github: "https://github.com/peachtech",
    },
    techStack: ["Figma", "Illustrator", "p5.js"],
    boothExperience: "好きな言葉を入れて、オリジナルポスターをその場で生成できます。",
  },
  {
    id: "peach-radio",
    title: "Peach Radio",
    catchphrase: "展示教室から、学園祭の音を配信する。",
    description:
      "ブースの実況、ミニDJ、来場者リクエストをミックスして配信するWebラジオです。キューシートとチャットが同じ画面に並び、非エンジニアでも回せる設計にしています。",
    category: "Web",
    tableId: "A",
    thumbnail: "/thumbnails/peach-radio.svg",
    authors: [{ name: "鈴木 悠", grade: "1年" }],
    links: {
      web: "https://peachtech.jp",
      github: "https://github.com/peachtech",
      demoVideo: "https://www.youtube.com",
    },
    techStack: ["Next.js", "Web Audio API", "Vercel"],
    boothExperience: "ヘッドフォンをつけて、ブースからのミニライブ配信を聴けます。",
  },
];

export function getProductsByTable(tableId: Product["tableId"]) {
  return products.filter((product) => product.tableId === tableId);
}
