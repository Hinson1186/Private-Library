import { Book, CategoryDef } from '../types';
import { createBook, createSeries } from '../utils/bookFactory';

/**
 * 這裡是您的「永久資料庫」。
 * 此檔案由網頁自動生成，請將內容貼上至 data/initialData.ts
 */

export const initialCategories: CategoryDef[] = [
  {
    "id": "24aad161-b7cd-4f9f-9dff-cad573159424",
    "name": "輕小說",
    "children": [
      {
        "id": "novel-cat-sao",
        "name": "刀劍神域",
        "children": []
      },
      {
        "id": "novel-cat-sao-p",
        "name": "刀劍神域 Progressive",
        "children": []
      },
      {
        "id": "bf9a5344-49ec-485c-9e1d-03c3f88dbe62",
        "name": "關於我在無意間被隔壁的天使變成廢柴這件事",
        "children": []
      },
      {
        "id": "novel-cat-season",
        "name": "春夏秋冬代行者",
        "children": []
      },
      {
        "id": "novel-cat-shadow",
        "name": "我想成為影之強者！",
        "children": []
      },
      {
        "id": "novel-cat-fiancee",
        "name": "我的不起眼未婚妻在家有夠可愛",
        "children": []
      },
      {
        "id": "novel-cat-accel",
        "name": "加速世界",
        "children": []
      },
      {
        "id": "novel-cat-haibara",
        "name": "灰原同學重返過去，開啟所向無敵的第二輪青春遊戲",
        "children": []
      },
      {
        "id": "novel-cat-youzitsu",
        "name": "歡迎來到實力至上主義的教室",
        "children": []
      },
      {
        "id": "novel-cat-lord",
        "name": "我是星際國家的惡德領主！",
        "children": []
      },
      {
        "id": "novel-cat-knight",
        "name": "我是星際國家的英雄騎士！",
        "children": []
      },
      {
        "id": "novel-cat-brave",
        "name": "勇者症候群",
        "children": []
      },
      {
        "id": "novel-cat-sister",
        "name": "其實是繼妹。",
        "children": []
      },
      {
        "id": "novel-cat-backup",
        "name": "我當備胎女友也沒關係。",
        "children": []
      },
      {
        "id": "novel-cat-nosister",
        "name": "妹妹是不能當女友的，可是……",
        "children": []
      },
      {
        "id": "novel-cat-reincarnation",
        "name": "你以為區區轉生就逃得了嗎，哥哥？",
        "children": []
      },
      {
        "id": "silent-witch-cat-001",
        "name": "沉默魔女的秘密",
        "children": []
      },
      {
        "id": "kings-proposal-cat-001",
        "name": "王者的求婚",
        "children": []
      },
      {
        "id": "saijo-shitsuji-cat-001",
        "name": "才女的侍從",
        "children": []
      },
      {
        "id": "imo-uza-cat-001",
        "name": "朋友的妹妹只纏著我",
        "children": []
      },
      {
        "id": "ngnl-cat-001",
        "name": "遊戲人生",
        "children": []
      },
      {
        "id": "elaina-cat-001",
        "name": "魔女之旅",
        "children": []
      },
      {
        "id": "date-a-live-cat-001",
        "name": "約會大作戰",
        "children": []
      },
      {
        "id": "mushoku-cat-001",
        "name": "無職轉生",
        "children": []
      },
      {
        "id": "86-cat-001",
        "name": "86不存在的戰區",
        "children": []
      },
      {
        "id": "13e1e44e-d222-4cd9-bf6b-f7f91835dc54",
        "name": "散本",
        "children": []
      }
    ]
  },
  {
    "id": "84ca7f1e-fa93-4f2d-a670-68dbfca56564",
    "name": "漫畫",
    "children": [
      {
        "id": "manga-cat-opium",
        "name": "滿州鴉片小隊",
        "children": []
      },
      {
        "id": "manga-cat-smile",
        "name": "笑魘",
        "children": []
      },
      {
        "id": "manga-cat-slave",
        "name": "魔都精兵的奴隸",
        "children": []
      },
      {
        "id": "manga-cat-summer",
        "name": "光逝去的夏天",
        "children": []
      },
      {
        "id": "manga-cat-25d",
        "name": "2.5次元的誘惑",
        "children": []
      },
      {
        "id": "manga-cat-abyss-m",
        "name": "來自深淵",
        "children": []
      },
      {
        "id": "0d2176ec-22e2-4c1f-bdc7-8b0520f116a0",
        "name": "薰香花朵凛然綻放",
        "children": []
      },
      {
        "id": "9a3b2c1d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
        "name": "咒術迴戰",
        "children": []
      },
      {
        "id": "rent-a-girlfriend-id-001",
        "name": "出租女友",
        "children": []
      },
      {
        "id": "kick-love-cat-001",
        "name": "不踹不踩不成愛",
        "children": []
      },
      {
        "id": "fuufu-cat-001",
        "name": "夫婦以上，戀人未滿",
        "children": []
      },
      {
        "id": "black-cat-witch-cat-001",
        "name": "黑貓與魔女的教室",
        "children": []
      },
      {
        "id": "boys-abyss-cat-001",
        "name": "少年的深淵",
        "children": []
      },
      {
        "id": "edens-zero-cat-001",
        "name": "伊甸星原",
        "children": []
      },
      {
        "id": "amagami-cat-001",
        "name": "結緣甘神神社",
        "children": []
      },
      {
        "id": "kagura-cat-001",
        "name": "神樂鉢",
        "children": []
      },
      {
        "id": "midnight-heart-cat-001",
        "name": "午夜的傾心旋律",
        "children": []
      },
      {
        "id": "frieren-cat-001",
        "name": "葬送的芙莉蓮",
        "children": []
      },
      {
        "id": "c001d13c-c3e3-494a-9027-28f69922bda1",
        "name": "おとなしそうな男子のとんでもない秘密を知ってしまった",
        "children": []
      },
      {
        "id": "1853d3d1-0f08-4a52-95c1-d07cb53644e0",
        "name": "気になってる人が男じゃなかった",
        "children": []
      },
      {
        "id": "manga-cat-kindaichi",
        "name": "金田一少年事件簿R",
        "children": []
      },
      {
        "id": "manga-cat-cuckoo",
        "name": "杜鵑婚約",
        "children": []
      },
      {
        "id": "manga-cat-akebi",
        "name": "明日同學的水手服",
        "children": []
      },
      {
        "id": "manga-cat-goddess",
        "name": "女神咖啡廳",
        "children": []
      },
      {
        "id": "manga-cat-nagatoro",
        "name": "不要欺負我，長瀞同學",
        "children": []
      },
      {
        "id": "manga-cat-kubo",
        "name": "久保同學不放過我",
        "children": []
      },
      {
        "id": "manga-cat-senpai-boy",
        "name": "學姐是男孩",
        "children": []
      },
      {
        "id": "manga-cat-kakegurui",
        "name": "狂賭之淵",
        "children": []
      },
      {
        "id": "manga-cat-fairy-100",
        "name": "妖精的尾巴 百年任務",
        "children": []
      },
      {
        "id": "manga-cat-eternity",
        "name": "致不滅的你",
        "children": []
      },
      {
        "id": "manga-cat-chainsaw",
        "name": "鏈鋸人",
        "children": []
      },
      {
        "id": "manga-cat-ender",
        "name": "終之退魔師",
        "children": []
      },
      {
        "id": "manga-cat-vigilante",
        "name": "非專業私刑",
        "children": []
      },
      {
        "id": "manga-cat-she-beautiful",
        "name": "she is beautiful",
        "children": []
      },
      {
        "id": "manga-cat-shangrila",
        "name": "香格里拉",
        "children": []
      }
    ]
  }
];

export const initialBooks: Book[] = [
  // --- 單本或未整理書籍 ---
  createBook(
    "通往夏天的隧道，再見的出口",
    "八目迷",
    "散本",
    "9ae9b3ba-2f5b-4ca3-9b0c-d2671040ab05",
    "https://www.tongli.com.tw/ComicImages/Images/NJ0039/NJ0039001/NJ0039001.jpg"
  ),
  createBook(
    "春夏秋冬代行者 春之舞 上",
    "曉佳奈",
    "春夏秋冬代行者",
    "season-spring-1",
    "https://www.tongli.com.tw/ComicImages/Images/NB0028/NB0028001A/NB0028001A.jpg"
  ),
  createBook(
    "春夏秋冬代行者 春之舞 下",
    "曉佳奈",
    "春夏秋冬代行者",
    "season-spring-2",
    "https://www.tongli.com.tw/ComicImages/Images/NB0028/NB0028002A/NB0028002A.jpg"
  ),
  createBook(
    "春夏秋冬代行者 曉之射手",
    "曉佳奈",
    "春夏秋冬代行者",
    "season-archer",
    "https://www.tongli.com.tw/ComicImages/Images/NB0033/NB0033001A/NB0033001A.jpg"
  ),
  createBook(
    "春夏秋冬代行者 夏之舞 上",
    "曉佳奈",
    "春夏秋冬代行者",
    "season-summer-1",
    "https://www.tongli.com.tw/ComicImages/Images/NB0030/NB0030001A/NB0030001A.jpg"
  ),
  createBook(
    "春夏秋冬代行者 夏之舞 下",
    "曉佳奈",
    "春夏秋冬代行者",
    "season-summer-2",
    "https://www.tongli.com.tw/ComicImages/Images/NB0030/NB0030002A/NB0030002A.jpg"
  ),
  createBook(
    "おとなしそうな男子のとんでもない秘密を知ってしまった 2",
    "カシバ",
    "おとなしそうな男子のとんでもない秘密を知ってしまった",
    "d1fea1dc-7805-4920-ac47-5a2a33f7b410",
    "https://m.media-amazon.com/images/I/81U5rVy1bxL._SY425_.jpg"
  ),
  createBook(
    "我想成為影之強者！ 2",
    "逢澤大介",
    "我想成為影之強者！",
    "eminence-shadow-2"
  ),
  createBook(
    "我的不起眼未婚妻在家有夠可愛 4",
    "三河ごーすと",
    "我的不起眼未婚妻在家有夠可愛",
    "jimokawa-4"
  ),
  createBook(
    "非專業私刑 1",
    "CRG/金圭森",
    "非專業私刑",
    "vigilante-1"
  ),
  createBook(
    "she is beautiful 1",
    "江坂純/凸ノ高秀",
    "she is beautiful",
    "she-beautiful-1"
  ),
  createBook(
    "香格里拉 1",
    "硬梨菜/不二涼介",
    "香格里拉",
    "shangrila-1"
  ),

  // --- 系列書籍 ---

  ...createSeries({
    title: "刀劍神域",
    author: "川原礫",
    category: "刀劍神域",
    idBase: "sao",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  }),

  ...createSeries({
    title: "刀劍神域 Progressive",
    author: "川原礫",
    category: "刀劍神域 Progressive",
    idBase: "sao-p",
    volumes: [1, 2, 3, 4, 5, 6],
  }),

  ...createSeries({
    title: "關於我在無意間被隔壁的天使變成廢柴這件事",
    author: "佐伯さん",
    category: "關於我在無意間被隔壁的天使變成廢柴這件事",
    idBase: "angel-next-door",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/NY0018/NY0018001/NY0018001.jpg"
    },
  }),

  ...createSeries({
    title: "我是星際國家的英雄騎士！",
    author: "三嶋與夢",
    category: "我是星際國家的英雄騎士！",
    idBase: "heroic-knight",
    volumes: [1, 2, 3, 4],
  }),

  ...createSeries({
    title: "加速世界",
    author: "川原礫",
    category: "加速世界",
    idBase: "accel-world",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/664005fde0514b0010f087b0/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66400817e1961f001398b4e2/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6640048fb7445e00100b4753/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/664003b2074b1200220b3f66/800x.webp?source_format=jpg",
      5: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6640022781d8f50013cc31bb/800x.webp?source_format=jpg",
      6: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6640011ce0514b0019f0870a/800x.webp?source_format=jpg",
      7: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663fff54493ce80019b8c446/800x.webp?source_format=jpg",
      8: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663ffe45e1961f001f98b2ba/800x.webp?source_format=jpg",
      9: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663ffc7821eacc002209d8b6/800x.webp?source_format=jpg",
      11: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663fecb7b64daf001648094c/800x.webp?source_format=jpg",
      12: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663fe897b5118f0016586408/800x.webp?source_format=jpg",
      13: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663fe06bca0478001345b711/800x.webp?source_format=jpg",
      14: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/663fdd066595b5001f8272ab/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "灰原同學重返過去，開啟所向無敵的第二輪青春遊戲",
    author: "雨宮和希",
    category: "灰原同學重返過去，開啟所向無敵的第二輪青春遊戲",
    idBase: "haibara-youth",
    volumes: [1, 2, 8],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/ND0125/ND0125001A/ND0125001A.jpg"
    },
  }),

  ...createSeries({
    title: "歡迎來到實力至上主義的教室",
    author: "衣笠彰梧",
    category: "歡迎來到實力至上主義的教室",
    idBase: "classroom-elite",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  }),

  ...createSeries({
    title: "我是星際國家的惡德領主！",
    author: "三嶋與夢",
    category: "我是星際國家的惡德領主！",
    idBase: "evil-lord",
    volumes: [2, 3, 4, 5],
  }),

  ...createSeries({
    title: "勇者症候群",
    author: "彩峰舞人",
    category: "勇者症候群",
    idBase: "brave-syndrome",
    volumes: [1, 2],
  }),

  ...createSeries({
    title: "其實是繼妹。",
    author: "鏡遊",
    category: "其實是繼妹。",
    idBase: "actually-stepsister",
    volumes: [1, 2, 3, 4],
  }),

  ...createSeries({
    title: "我當備胎女友也沒關係。",
    author: "西条陽",
    category: "我當備胎女友也沒關係。",
    idBase: "fallback-gf",
    volumes: [1, 2, 3, 4],
  }),

  ...createSeries({
    title: "妹妹是不能當女友的，可是……",
    author: "三河ごーすと",
    category: "妹妹是不能當女友的，可是……",
    idBase: "sister-not-gf",
    volumes: [1, 2],
  }),

  ...createSeries({
    title: "你以為區區轉生就逃得了嗎，哥哥？",
    author: "紙城境介",
    category: "你以為區區轉生就逃得了嗎，哥哥？",
    idBase: "reincarnation-escape",
    volumes: [1, 2, 3],
  }),

  ...createSeries({
    title: "遊戲人生",
    author: "榎宮祐",
    category: "遊戲人生",
    idBase: "ngnl",
    volumes: [1, 2, 3, 4, 5, 6, 10],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065001/NA0065001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065002/NA0065002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065003/NA0065003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065004/NA0065004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065005/NA0065005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065006/NA0065006.jpg",
      10: "https://www.tongli.com.tw/ComicImages/Images/NA0065/NA0065010/NA0065010.jpg"
    },
  }),

  ...createSeries({
    title: "魔女之旅",
    author: "白石定規",
    category: "魔女之旅",
    idBase: "elaina",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    covers: {
      1: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115701.jpg",
      2: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115702.jpg",
      3: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115703.jpg",
      4: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115704.jpg",
      5: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115705.jpg",
      6: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115706.jpg",
      7: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115707.jpg",
      8: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115708.jpg",
      9: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115709.jpg",
      10: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115710.jpg",
      11: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115711.jpg",
      12: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115712.jpg",
      13: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115713.jpg",
      14: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115714.jpg",
      15: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_40115715.jpg"
    },
  }),

  ...createSeries({
    title: "約會大作戰",
    author: "橘公司",
    category: "約會大作戰",
    idBase: "date-a-live",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdeefff542f0010afd4be/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdee625e608001f779686/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fde6e36c9a600228ba21f/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdc4e3f6608000d1e551d/800x.webp?source_format=jpg",
      5: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdbf926e99d0010eb3fa4/800x.webp?source_format=jpg",
      6: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdbc127c4530016fb839e/800x.webp?source_format=jpg",
      7: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdb715c22c3000df1519b/800x.webp?source_format=jpg",
      8: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdb39fded9d001cafb3ae/800x.webp?source_format=jpg",
      9: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdafaca76280010555660/800x.webp?source_format=jpg",
      10: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fdab9cd880d0019a6350c/800x.webp?source_format=jpg",
      11: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fda665640c00016796f50/800x.webp?source_format=jpg",
      12: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fda1cd313900010dd8415/800x.webp?source_format=jpg",
      13: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fd9dd36c9a600168ba129/800x.webp?source_format=jpg",
      14: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fd9864ff629001634b8f6/800x.webp?source_format=jpg",
      15: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/665fd9548b49600016dfb5b0/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "無職轉生",
    author: "理不尽な孫の手",
    category: "無職轉生",
    idBase: "mushoku",
    volumes: [1, 2, 26],
  }),

  ...createSeries({
    title: "86不存在的戰區",
    author: "安里アサト",
    category: "86不存在的戰區",
    idBase: "86",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c24bffbc51c935e14fd4/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c21d2a1bb3001fef7c46/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c1e98179f8000d93002b/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c1bce10d700022a657c8/800x.webp?source_format=jpg",
      5: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c1853f660800191f62ea/800x.webp?source_format=jpg",
      6: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c15abc93ff001038fd64/800x.webp?source_format=jpg",
      7: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c1285c867d001981ba60/800x.webp?source_format=jpg",
      8: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c0bacef4db002281ea5b/800x.webp?source_format=jpg",
      9: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c065ca7628001f565afe/800x.webp?source_format=jpg",
      10: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6662c00efc3d7d000d784da1/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "気になってる人が男じゃなかった",
    author: "新井 すみこ",
    category: "気になってる人が男じゃなかった",
    idBase: "green-tea",
    volumes: [1, 2],
    covers: {
      1: "https://m.media-amazon.com/images/I/81Vz14AaG4L._SY425_.jpg",
      2: "https://m.media-amazon.com/images/I/91nk8m3muJL._SY425_.jpg"
    },
  }),

  ...createSeries({
    title: "咒術迴戰",
    author: "芥見下々",
    category: "咒術迴戰",
    idBase: "jujutsu",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116001A/JC1116001AS.jpg",
      2: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/upload/product/o/2681761107009/ec1763803.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116003/JC1116003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116004/JC1116004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116005/JC1116005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116006/JC1116006.jpg",
      7: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116007/JC1116007.jpg",
      8: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116008/JC1116008.jpg",
      9: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116009/JC1116009.jpg",
      10: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116010/JC1116010.jpg",
      11: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116011/JC1116011.jpg",
      12: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116012/JC1116012.jpg",
      13: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116013/JC1116013.jpg",
      14: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116014/JC1116014.jpg",
      15: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116015/JC1116015.jpg",
      16: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116016/JC1116016.jpg",
      17: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116017/JC1116017.jpg",
      18: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116018/JC1116018.jpg",
      19: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116019/JC1116019.jpg",
      20: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116020/JC1116020.jpg",
      21: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116021/JC1116021.jpg",
      22: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116022/JC1116022.jpg",
      23: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116023/JC1116023.jpg",
      24: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116024/JC1116024.jpg",
      25: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116025/JC1116025.jpg",
      26: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116026/JC1116026.jpg",
      27: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116027/JC1116027.jpg",
      28: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116028/JC1116028.jpg",
      29: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116029/JC1116029.jpg",
      30: "https://www.tongli.com.tw/ComicImages/Images/JC1116/JC1116030/JC1116030.jpg"
    },
  }),

  ...createSeries({
    title: "不踹不踩不成愛",
    author: "壱屋すみ",
    category: "不踹不踩不成愛",
    idBase: "kick-love",
    volumes: [1, 2, 3, 4],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/67f73aeab7d253000cc2dc86/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/67f73aea17aec30011b27f43/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/67f73aea851df9000efb9858/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/67f73aeb81c977000ebb5715/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "夫婦以上，戀人未滿",
    author: "金丸祐基",
    category: "夫婦以上，戀人未滿",
    idBase: "fuufu",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b09227fc220022982503/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b092f597a900105eca71/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b0920075c40013e72c3c/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b09205bc766ff61358e5/800x.webp?source_format=jpg",
      5: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b092d28abc000db5aad4/800x.webp?source_format=jpg",
      6: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b092f378ef001f47a3e3/800x.webp?source_format=jpg",
      7: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b0934940014e778e7726/800x.webp?source_format=jpg",
      8: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b09284a646000dd8d764/800x.webp?source_format=jpg",
      9: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0b092b1c3e00022c4b8f7/800x.webp?source_format=jpg",
      10: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66a0ae49536b09ca9cc5c433/800x.webp?source_format=jpg",
      11: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/680ee1c1b3cc9d000dcb4e07/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "黑貓與魔女的教室",
    author: "金田陽介",
    category: "黑貓與魔女的教室",
    idBase: "black-cat",
    volumes: [1, 2, 3, 4, 5, 6],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749001A/KD1749001A.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749002A/KD1749002A.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749003A/KD1749003A.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749004/KD1749004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749005/KD1749005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/KD1749/KD1749006/KD1749006.jpg"
    },
  }),

  ...createSeries({
    title: "沉默魔女的秘密",
    author: "依空まつり",
    category: "沉默魔女的秘密",
    idBase: "silent-witch",
    volumes: [1, 2, 3, 4, 5, 6],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1a1b9c78b0016ecd18c/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1a23fab53000d627355/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1a21cd78d000d912a14/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1a188a36e001c59a9f9/800x.webp?source_format=jpg",
      5: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1a116a9f7001927e526/800x.webp?source_format=jpg",
      6: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/6699e1373cb5290016a57ebf/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "王者的求婚",
    author: "橘公司",
    category: "王者的求婚",
    idBase: "kings-prop",
    volumes: [1, 2],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66403c469b88f10022fee1d0/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/664028eac851b60013fff368/800x.webp?source_format=jpg"
    },
  }),

  ...createSeries({
    title: "才女的侍從",
    author: "坂石遊",
    category: "才女的侍從",
    idBase: "saijo",
    volumes: [1, 2, 3, 4],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/ND0117/ND0117001A/ND0117001A.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/ND0117/ND0117002B/ND0117002B.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/ND0117/ND0117003A/ND0117003A.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/ND0117/ND0117004B/ND0117004B.jpg"
    },
  }),

  ...createSeries({
    title: "朋友的妹妹只纏著我",
    author: "三河ごーすと",
    category: "朋友的妹妹只纏著我",
    idBase: "imo-uza",
    volumes: [2, 3, 4],
    covers: {
      2: "https://www.tongli.com.tw/ComicImages/Images/NY0016/NY0016002/NY0016002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/NY0016/NY0016003/NY0016003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/NY0016/NY0016004/NY0016004.jpg"
    },
  }),

  ...createSeries({
    title: "狂賭之淵",
    author: "河本焰/尚村透",
    category: "狂賭之淵",
    idBase: "kakegurui",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  }),

  ...createSeries({
    title: "妖精的尾巴 百年任務",
    author: "真島浩/上田敦夫",
    category: "妖精的尾巴 百年任務",
    idBase: "fairy-tail-100",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  }),

  ...createSeries({
    title: "致不滅的你",
    author: "大今良時",
    category: "致不滅的你",
    idBase: "eternity",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  }),

  ...createSeries({
    title: "鏈鋸人",
    author: "藤本樹",
    category: "鏈鋸人",
    idBase: "chainsaw",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  }),

  ...createSeries({
    title: "終之退魔師",
    author: "四谷啓太郎",
    category: "終之退魔師",
    idBase: "ender-geister",
    volumes: [1, 2, 3],
  }),

  ...createSeries({
    title: "金田一少年事件簿R",
    author: "天樹征丸/佐藤文也",
    category: "金田一少年事件簿R",
    idBase: "kindaichi-r",
    volumes: [1, 2, 3, 4, 5, 6, 7],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494001/KD0494001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494002/KD0494002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494003/KD0494003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494004/KD0494004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494005/KD0494005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494006/KD0494006.jpg",
      7: "https://www.tongli.com.tw/ComicImages/Images/KD0494/KD0494007/KD0494007.jpg"
    },
  }),

  ...createSeries({
    title: "杜鵑婚約",
    author: "吉河美希",
    category: "杜鵑婚約",
    idBase: "cuckoo",
    volumes: [1, 2],
  }),

  ...createSeries({
    title: "明日同學的水手服",
    author: "博",
    category: "明日同學的水手服",
    idBase: "akebi",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8],
  }),

  ...createSeries({
    title: "女神咖啡廳",
    author: "瀨尾公治",
    category: "女神咖啡廳",
    idBase: "goddess-cafe",
    volumes: [1, 2, 3, 4, 5],
  }),

  ...createSeries({
    title: "不要欺負我，長瀞同學",
    author: "Nanashi",
    category: "不要欺負我，長瀞同學",
    idBase: "nagatoro",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  }),

  ...createSeries({
    title: "久保同學不放過我",
    author: "雪森寧寧",
    category: "久保同學不放過我",
    idBase: "kubo",
    volumes: [1, 2, 3],
  }),

  ...createSeries({
    title: "學姐是男孩",
    author: "ぽむ",
    category: "學姐是男孩",
    idBase: "senpai-boy",
    volumes: [1, 2],
  }),

  ...createSeries({
    title: "出租女友",
    author: "宮島禮吏",
    category: "出租女友",
    idBase: "rent-gf",
    volumes: [1, 2, 3, 4, 5, 6, 10, 11, 22, 23, 24, 25, 26, 27, 28],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552001/KD1552001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552002/KD1552002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552003/KD1552003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552004/KD1552004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552005/KD1552005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552006/KD1552006.jpg",
      10: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552010/KD1552010.jpg",
      11: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552011/KD1552011.jpg",
      22: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552022/KD1552022.jpg",
      23: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552023/KD1552023.jpg",
      24: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552024/KD1552024.jpg",
      25: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552025/KD1552025.jpg",
      26: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552026/KD1552026.jpg",
      27: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552027/KD1552027.jpg",
      28: "https://www.tongli.com.tw/ComicImages/Images/KD1552/KD1552028/KD1552028.jpg"
    },
  }),

  ...createSeries({
    title: "神樂鉢",
    author: "外薗健",
    category: "神樂鉢",
    idBase: "kagura",
    volumes: [1, 2, 3, 4, 5, 6],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/JC1343/JC1343001/JC1343001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/JC1343/JC1343002/JC1343002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/JC1343/JC1343003/JC1343003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/JC1343/JC1343004/JC1343004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/JC1343/JC1343005/JC1343005.jpg"
    },
  }),

  ...createSeries({
    title: "午夜的傾心旋律",
    author: "五十嵐正邦",
    category: "午夜的傾心旋律",
    idBase: "midnight",
    volumes: [1, 2, 3, 4, 5, 6],
    covers: {
      1: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10536446/0/638811730968200000?v=1",
      2: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10661989/0/638823809979470000?v=1",
      3: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10793138/0/638840312429970000?v=1",
      4: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10937888/0/638876559761470000?v=1"
    },
  }),

  ...createSeries({
    title: "來自深淵",
    author: "土筆章人",
    category: "來自深淵",
    idBase: "abyss-manga",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    covers: {
      1: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245901.jpg",
      2: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245902.jpg",
      3: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245903.jpg",
      4: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245904.jpg",
      5: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245905(1).jpg",
      6: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245906.jpg",
      7: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245907.jpg",
      8: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245908.jpg",
      9: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245909.jpg",
      10: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245910.jpg",
      11: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245911.jpg",
      12: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10245912.jpg"
    },
  }),

  ...createSeries({
    title: "2.5次元的誘惑",
    author: "橋本悠",
    category: "2.5次元的誘惑",
    idBase: "ririsa",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    covers: {
      1: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518901.jpg",
      2: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518902.jpg",
      3: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518903.jpg",
      4: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518904.jpg",
      5: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518905.jpg",
      6: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518906.jpg",
      7: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518907.jpg",
      8: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518908.jpg",
      9: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518909.jpg",
      10: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518910.jpg",
      11: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518911.jpg",
      12: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518912.jpg",
      13: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518913.jpg",
      14: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518914.jpg",
      15: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518915.jpg",
      16: "https://www.ching-win.com.tw//upload_files/fonlego-rwd/prodpic/D_10518916.jpg"
    },
  }),

  ...createSeries({
    title: "結緣甘神神社",
    author: "內藤Marcey",
    category: "結緣甘神神社",
    idBase: "amagami",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706001/KD1706001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706002/KD1706002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706003/KD1706003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706004/KD1706004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706005/KD1706005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706006/KD1706006.jpg",
      7: "https://www.tongli.com.tw/ComicImages/Images/KD1706/KD1706007/KD1706007.jpg"
    },
  }),

  ...createSeries({
    title: "滿州鴉片小隊",
    author: "門馬司/鹿子",
    category: "滿州鴉片小隊",
    idBase: "manchuria-opium",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    covers: {
      1: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10239614/0/638681233541600000?v=1",
      2: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10239615/0/638681233556700000?v=1",
      3: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10239616/0/638681233558470000?v=1",
      4: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10410254/0/638744319591730000?v=1",
      5: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10410255/0/638744319588400000?v=1",
      6: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10410256/0/638744319590270000?v=1",
      7: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10561721/0/638890464257570000?v=1",
      8: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10606679/0/638905868173870000?v=1",
      9: "https://img.91app.com/webapi/imagesV3/Original/SalePage/10606681/0/638905868175330000?v=1"
    },
  }),

  ...createSeries({
    title: "薰香花朵凛然綻放",
    author: "三香見SAKA",
    category: "薰香花朵凛然綻放",
    idBase: "kaoru-hana",
    volumes: [1, 7, 8],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD1735/KD1735001/KD1735001.jpg"
    },
  }),

  ...createSeries({
    title: "葬送的芙莉蓮",
    author: "山田鐘人/阿部司",
    category: "葬送的芙莉蓮",
    idBase: "frieren",
    volumes: [1, 2, 3, 4, 5, 6, 12, 14],
  }),

  ...createSeries({
    title: "伊甸星原",
    author: "真島浩",
    category: "伊甸星原",
    idBase: "edens",
    volumes: [1, 2, 3, 4, 5],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/KD1514/KD1514001/KD1514001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/KD1514/KD1514002/KD1514002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/KD1514/KD1514003/KD1514003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/KD1514/KD1514004/KD1514004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/KD1514/KD1514005/KD1514005.jpg"
    },
  }),

  ...createSeries({
    title: "少年的深淵",
    author: "峰浪律",
    category: "少年的深淵",
    idBase: "abyss",
    volumes: [1, 2, 5, 6, 7, 10, 12, 14, 15],
    covers: {
      1: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/upload/product/o/2682167885003/20220503034152155143.jpg",
      2: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/upload/product/o/2682184595008/20220609030837646522.jpg",
      5: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/upload/product/o/2682358981002/20230325033658421785.jpg",
      6: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/eslite_2023062720230627101407/10520906.jpg",
      7: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/eslite_2023080820230808104215/10520907.jpg",
      10: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/vendor171263335669720240409112918/mainCoverImage1_1241500.jpg",
      12: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/vendor173700138829720250116122310/mainCoverImage1_1382785.jpg",
      14: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/vendor175153491546220250703172840/mainCoverImage1_1470325.jpg",
      15: "https://s2.eslite.com/unsafe/fit-in/x900/s.eslite.com/b2b/vendor/vendor175759217760320250911200300/mainCoverImage1_1519185.jpg"
    },
  }),

  ...createSeries({
    title: "笑魘",
    author: "根本安巳",
    category: "笑魘",
    idBase: "smile-manga",
    volumes: [1, 2, 3, 4, 5],
  }),

  ...createSeries({
    title: "魔都精兵的奴隸",
    author: "タカヒロ/竹村洋平",
    category: "魔都精兵的奴隸",
    idBase: "matoi",
    volumes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    covers: {
      1: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152001/JC1152001.jpg",
      2: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152002/JC1152002.jpg",
      3: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152003/JC1152003.jpg",
      4: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152004/JC1152004.jpg",
      5: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152005/JC1152005.jpg",
      6: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152006/JC1152006.jpg",
      7: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152007/JC1152007.jpg",
      8: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152008/JC1152008.jpg",
      9: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152009/JC1152009.jpg",
      10: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152010/JC1152010.jpg",
      11: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152011/JC1152011.jpg",
      12: "https://www.tongli.com.tw/ComicImages/Images/JC1152/JC1152012/JC1152012.jpg"
    },
  }),

  ...createSeries({
    title: "光逝去的夏天",
    author: "モクモクれん",
    category: "光逝去的夏天",
    idBase: "hikaru",
    volumes: [1, 2, 3, 4, 6],
    covers: {
      1: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66555b5c82b9fd002271422e/800x.webp?source_format=jpg",
      2: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66555b62724233001caf79ac/800x.webp?source_format=jpg",
      3: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66555b6ae9a87100194368d3/800x.webp?source_format=jpg",
      4: "https://shoplineimg.com/655b0f3c9b81d900188b35f1/66e0f8fb0971c60013815922/800x.webp?source_format=jpg"
    },
  })
];
