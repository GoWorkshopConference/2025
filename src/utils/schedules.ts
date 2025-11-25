// スケジュールデータ
const scheduleItems: ScheduleItem[] = [
  {
    startTime: "10:00",
    endTime: "10:30",
    title: "オープニング",
    fullspan: true,
  },

  // ワークショップ
  /// 午前の部
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "大スペース1",
    title:
      "低レベルコンテナランタイム自作講座 ～コンテナ技術の地盤を理解する～",
    href: "/workshops/03_diy_container",
  },
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "大スペース2",
    title: "Gopher のためのチームビルディングするインプロワークショップ",
    href: "/workshops/08_team_building_improvisation",
  },
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "中スペース1",
    title: "TinyGo Keeb Tour at GWC",
    href: "/workshops/06_tinygo_keeb_tour",
  },
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "中スペース2",
    title: "はじめてのGo言語教室",
    href: "/workshops/04_begin_go",
  },
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "中スペース3",
    title: "Goカードゲームで遊ぼう",
    href: "/workshops/02_card_game",
  },
  {
    startTime: "10:30",
    endTime: "12:00",
    booth: "中スペース4",
    title: "並行処理スピードアップコンテスト",
    href: "/workshops/09_parallel_processing_speedup_contest",
  },

  /// 「はじめての Go 体験！そしてあなたのキーキャップがおしゃれになる！」のみ変則的なスケジュール
  {
    startTime: "14:00",
    endTime: "15:00",
    booth: "中スペース1",
    title: "はじめての Go 体験！そしてあなたのキーキャップがおしゃれになる！",
    href: "/workshops/07_go_experience_keycap",
  },
  {
    startTime: "15:45",
    endTime: "16:45",
    booth: "中スペース1",
    title: "はじめての Go 体験！そしてあなたのキーキャップがおしゃれになる！",
    href: "/workshops/07_go_experience_keycap",
  },

  /// 午後の部
  {
    startTime: "15:45",
    endTime: "17:45",
    booth: "大スペース1",
    title: "動かして理解する適材適所のプロファイリング",
    href: "/workshops/01_profiling",
  },
  {
    startTime: "15:45",
    endTime: "17:45",
    booth: "大スペース2",
    title: "Gopher のための「自由な話し合い」ワークショップ",
    href: "/workshops/01_ost",
  },
  {
    startTime: "15:45",
    endTime: "17:45",
    booth: "中スペース1",
    title: "Gopherくん基板を作ってTinyGoで遊ぼう",
    href: "/workshops/05_gopher_board",
  },
  {
    startTime: "15:45",
    endTime: "17:45",
    booth: "中スペース2",
    title: "Go Doc Comments 完全理解ハンズオン",
    href: "/workshops/11_go_doc_comments",
  },
  {
    startTime: "15:45",
    endTime: "17:45",
    booth: "中スペース3",
    title: "調整中",
  },

  // ブースコンテンツ
  /*
  {
    startTime: "14:00",
    endTime: "15:30",
    booth: "ブースコンテンツ1",
    title: "ブースコンテンツ",
  },
  {
    startTime: "14:00",
    endTime: "15:30",
    booth: "ブースコンテンツ2",
    title: "ブースコンテンツ",
  },
  {
    startTime: "14:00",
    endTime: "15:30",
    booth: "ブースコンテンツ3",
    title: "ブースコンテンツ",
  },
  {
    startTime: "14:00",
    endTime: "15:30",
    booth: "ブースコンテンツ4",
    title: "ブースコンテンツ",
  },
  */

  // 各種企画
  /// ブースA
  {
    startTime: "12:30",
    endTime: "14:00",
    booth: "ブースA",
    title: "シャッフルランチ",
  },
  /// ブースB
  {
    startTime: "10:30",
    endTime: "17:45",
    booth: "ブースB",
    title: "ジェスチャーゲーム",
  },
  /// ブースC
  { startTime: "10:30", endTime: "14:00", booth: "ブースC", title: "Ebiten" },
  { startTime: "14:00", endTime: "15:30", booth: "ブースC", title: "即席LT" },
  { startTime: "15:30", endTime: "17:45", booth: "ブースC", title: "Ebiten" },

  // クロージングなど
  {
    startTime: "17:45",
    endTime: "18:00",
    title: "クロージング",
    fullspan: true,
  },
];

export type ScheduleItem =
  | {
      startTime: (typeof timeSlots)[number];
      endTime: (typeof timeSlots)[number];
      booth: (typeof booths)[number];
      title: string;
      href?: string;
    }
  | {
      fullspan: true;
      startTime: (typeof timeSlots)[number];
      endTime: (typeof timeSlots)[number];
      title: string;
    };

// ブース
const booths = [
  "大スペース1",
  "大スペース2",
  "中スペース1",
  "中スペース2",
  "中スペース3",
  "中スペース4",
  /*
  "ブースコンテンツ1",
  "ブースコンテンツ2",
  "ブースコンテンツ3",
  "ブースコンテンツ4",
  */
  "ブースA",
  "ブースB",
  "ブースC",
] as const;

// 10:00から18:00までの15分間隔の時間スロット
const timeSlots = [
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
] as const;

export { scheduleItems, booths, timeSlots };
