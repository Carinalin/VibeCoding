// 人教版小学英语课程数据库
// 从三年级上册到六年级下册，共40节课

export const lessons = [
  // 三年级上册 Unit 1
  {
    id: 1,
    title: "文具用品",
    description: "学习常用文具的英文表达",
    emoji: "✏️",
    requiredPoints: 0,
    vocabulary: [
      { word: "ruler", emoji: "📏", meaning: "尺子" },
      { word: "pencil", emoji: "✏️", meaning: "铅笔" },
      { word: "eraser", emoji: "🧹", meaning: "橡皮" },
      { word: "crayon", emoji: "🖍️", meaning: "蜡笔" },
      { word: "bag", emoji: "🎒", meaning: "书包" },
      { word: "pen", emoji: "🖊️", meaning: "钢笔" }
    ],
    sentences: [
      { english: "I have a ruler", chinese: "我有一把尺子" },
      { english: "This is my pencil", chinese: "这是我的铅笔" },
      { english: "Show me your bag", chinese: "给我看看你的书包" }
    ]
  },
  
  // 三年级上册 Unit 2
  {
    id: 2,
    title: "颜色世界",
    description: "认识各种颜色的英文名称",
    emoji: "🎨",
    requiredPoints: 60,
    vocabulary: [
      { word: "red", emoji: "🔴", meaning: "红色" },
      { word: "green", emoji: "🟢", meaning: "绿色" },
      { word: "yellow", emoji: "🟡", meaning: "黄色" },
      { word: "blue", emoji: "🔵", meaning: "蓝色" },
      { word: "black", emoji: "⚫", meaning: "黑色" },
      { word: "white", emoji: "⚪", meaning: "白色" }
    ],
    sentences: [
      { english: "I like red", chinese: "我喜欢红色" },
      { english: "The sky is blue", chinese: "天空是蓝色的" },
      { english: "My bag is green", chinese: "我的书包是绿色的" }
    ]
  },
  
  // 三年级上册 Unit 3
  {
    id: 3,
    title: "身体部位",
    description: "学习身体各部位的英文名称",
    emoji: "👤",
    requiredPoints: 120,
    vocabulary: [
      { word: "face", emoji: "😊", meaning: "脸" },
      { word: "ear", emoji: "👂", meaning: "耳朵" },
      { word: "eye", emoji: "👁️", meaning: "眼睛" },
      { word: "nose", emoji: "👃", meaning: "鼻子" },
      { word: "mouth", emoji: "👄", meaning: "嘴" },
      { word: "hand", emoji: "✋", meaning: "手" }
    ],
    sentences: [
      { english: "Touch your nose", chinese: "摸摸你的鼻子" },
      { english: "Close your eyes", chinese: "闭上你的眼睛" },
      { english: "Open your mouth", chinese: "张开你的嘴" }
    ]
  },
  
  // 三年级上册 Unit 4
  {
    id: 4,
    title: "动物朋友",
    description: "认识常见动物的英文名称",
    emoji: "🐼",
    requiredPoints: 180,
    vocabulary: [
      { word: "duck", emoji: "🦆", meaning: "鸭子" },
      { word: "pig", emoji: "🐷", meaning: "猪" },
      { word: "cat", emoji: "🐱", meaning: "猫" },
      { word: "dog", emoji: "🐶", meaning: "狗" },
      { word: "elephant", emoji: "🐘", meaning: "大象" },
      { word: "monkey", emoji: "🐵", meaning: "猴子" }
    ],
    sentences: [
      { english: "I have a dog", chinese: "我有一只狗" },
      { english: "Look at the elephant", chinese: "看那只大象" },
      { english: "The monkey is funny", chinese: "猴子很滑稽" }
    ]
  },
  
  // 三年级上册 Unit 5
  {
    id: 5,
    title: "美味食物",
    description: "学习常见食物的英文表达",
    emoji: "🍞",
    requiredPoints: 240,
    vocabulary: [
      { word: "bread", emoji: "🍞", meaning: "面包" },
      { word: "juice", emoji: "🧃", meaning: "果汁" },
      { word: "egg", emoji: "🥚", meaning: "鸡蛋" },
      { word: "milk", emoji: "🥛", meaning: "牛奶" },
      { word: "water", emoji: "💧", meaning: "水" },
      { word: "cake", emoji: "🍰", meaning: "蛋糕" }
    ],
    sentences: [
      { english: "I like bread", chinese: "我喜欢面包" },
      { english: "Have some juice", chinese: "喝点果汁" },
      { english: "Can I have some water", chinese: "我能喝点水吗" }
    ]
  },
  
  // 三年级上册 Unit 6
  {
    id: 6,
    title: "数字1-10",
    description: "学习数字1到10的英文表达",
    emoji: "🔢",
    requiredPoints: 300,
    vocabulary: [
      { word: "one", emoji: "1️⃣", meaning: "一" },
      { word: "two", emoji: "2️⃣", meaning: "二" },
      { word: "three", emoji: "3️⃣", meaning: "三" },
      { word: "four", emoji: "4️⃣", meaning: "四" },
      { word: "five", emoji: "5️⃣", meaning: "五" },
      { word: "six", emoji: "6️⃣", meaning: "六" }
    ],
    sentences: [
      { english: "I have two books", chinese: "我有两本书" },
      { english: "Show me five", chinese: "给我看五个" },
      { english: "I am six years old", chinese: "我六岁了" }
    ]
  },
  
  // 三年级下册 Unit 1
  {
    id: 7,
    title: "国家名称",
    description: "学习常见国家的英文名称",
    emoji: "🌍",
    requiredPoints: 360,
    vocabulary: [
      { word: "UK", emoji: "🇬🇧", meaning: "英国" },
      { word: "Canada", emoji: "🇨🇦", meaning: "加拿大" },
      { word: "USA", emoji: "🇺🇸", meaning: "美国" },
      { word: "China", emoji: "🇨🇳", meaning: "中国" },
      { word: "student", emoji: "👨‍🎓", meaning: "学生" },
      { word: "teacher", emoji: "👨‍🏫", meaning: "教师" }
    ],
    sentences: [
      { english: "I am from China", chinese: "我来自中国" },
      { english: "She is a teacher", chinese: "她是一名教师" },
      { english: "He is a student", chinese: "他是一名学生" }
    ]
  },
  
  // 三年级下册 Unit 2
  {
    id: 8,
    title: "家庭成员",
    description: "学习家庭成员的英文称呼",
    emoji: "👨‍👩‍👧‍👦",
    requiredPoints: 420,
    vocabulary: [
      { word: "father", emoji: "👨", meaning: "爸爸" },
      { word: "mother", emoji: "👩", meaning: "妈妈" },
      { word: "sister", emoji: "👧", meaning: "姐妹" },
      { word: "brother", emoji: "👦", meaning: "兄弟" },
      { word: "grandmother", emoji: "👵", meaning: "外祖母" },
      { word: "grandfather", emoji: "👴", meaning: "外祖父" }
    ],
    sentences: [
      { english: "This is my father", chinese: "这是我的爸爸" },
      { english: "I love my mother", chinese: "我爱我的妈妈" },
      { english: "I have a sister", chinese: "我有一个姐姐" }
    ]
  },
  
  // 三年级下册 Unit 3
  {
    id: 9,
    title: "形容词",
    description: "学习描述事物的形容词",
    emoji: "📏",
    requiredPoints: 480,
    vocabulary: [
      { word: "thin", emoji: "🥢", meaning: "瘦的" },
      { word: "fat", emoji: "🐘", meaning: "胖的" },
      { word: "tall", emoji: "🦒", meaning: "高的" },
      { word: "short", emoji: "🐭", meaning: "矮的" },
      { word: "long", emoji: "🐍", meaning: "长的" },
      { word: "small", emoji: "🐜", meaning: "小的" }
    ],
    sentences: [
      { english: "He is tall", chinese: "他很高" },
      { english: "The elephant is big", chinese: "大象很大" },
      { english: "The mouse is small", chinese: "老鼠很小" }
    ]
  },
  
  // 三年级下册 Unit 4
  {
    id: 10,
    title: "位置介词",
    description: "学习表示位置的介词",
    emoji: "📍",
    requiredPoints: 540,
    vocabulary: [
      { word: "on", emoji: "🔝", meaning: "在...上" },
      { word: "in", emoji: "📦", meaning: "在...里" },
      { word: "under", emoji: "⬇️", meaning: "在...下面" },
      { word: "chair", emoji: "🪑", meaning: "椅子" },
      { word: "desk", emoji: "🪑", meaning: "书桌" },
      { word: "ball", emoji: "⚽", meaning: "球" }
    ],
    sentences: [
      { english: "The book is on the desk", chinese: "书在桌子上" },
      { english: "The ball is under the chair", chinese: "球在椅子下面" },
      { english: "The cat is in the box", chinese: "猫在盒子里" }
    ]
  },
  
  // 三年级下册 Unit 5
  {
    id: 11,
    title: "水果名称",
    description: "学习常见水果的英文名称",
    emoji: "🍎",
    requiredPoints: 600,
    vocabulary: [
      { word: "pear", emoji: "🍐", meaning: "梨" },
      { word: "apple", emoji: "🍎", meaning: "苹果" },
      { word: "orange", emoji: "🍊", meaning: "橙子" },
      { word: "banana", emoji: "🍌", meaning: "香蕉" },
      { word: "watermelon", emoji: "🍉", meaning: "西瓜" },
      { word: "strawberry", emoji: "🍓", meaning: "草莓" }
    ],
    sentences: [
      { english: "I like apples", chinese: "我喜欢苹果" },
      { english: "Do you like bananas", chinese: "你喜欢香蕉吗" },
      { english: "Have some watermelon", chinese: "吃点西瓜" }
    ]
  },
  
  // 三年级下册 Unit 6
  {
    id: 12,
    title: "数字11-20",
    description: "学习数字11到20的英文表达",
    emoji: "🔢",
    requiredPoints: 660,
    vocabulary: [
      { word: "eleven", emoji: "1️⃣1️⃣", meaning: "十一" },
      { word: "twelve", emoji: "1️⃣2️⃣", meaning: "十二" },
      { word: "thirteen", emoji: "1️⃣3️⃣", meaning: "十三" },
      { word: "fourteen", emoji: "1️⃣4️⃣", meaning: "十四" },
      { word: "fifteen", emoji: "1️⃣5️⃣", meaning: "十五" },
      { word: "twenty", emoji: "2️⃣0️⃣", meaning: "二十" }
    ],
    sentences: [
      { english: "I have eleven pencils", chinese: "我有十一支铅笔" },
      { english: "She is twelve years old", chinese: "她十二岁了" },
      { english: "I see twenty birds", chinese: "我看到二十只鸟" }
    ]
  },
  
  // 四年级上册 Unit 1
  {
    id: 13,
    title: "教室物品",
    description: "学习教室里的物品名称",
    emoji: "🏫",
    requiredPoints: 720,
    vocabulary: [
      { word: "classroom", emoji: "🏫", meaning: "教室" },
      { word: "window", emoji: "🪟", meaning: "窗户" },
      { word: "blackboard", emoji: "⬛", meaning: "黑板" },
      { word: "light", emoji: "💡", meaning: "灯" },
      { word: "door", emoji: "🚪", meaning: "门" },
      { word: "computer", emoji: "💻", meaning: "计算机" }
    ],
    sentences: [
      { english: "Open the door", chinese: "打开门" },
      { english: "Turn on the light", chinese: "打开灯" },
      { english: "Clean the blackboard", chinese: "擦黑板" }
    ]
  },
  
  // 四年级上册 Unit 2
  {
    id: 14,
    title: "学习用品",
    description: "学习学习用品的英文名称",
    emoji: "🎒",
    requiredPoints: 780,
    vocabulary: [
      { word: "schoolbag", emoji: "🎒", meaning: "书包" },
      { word: "storybook", emoji: "📖", meaning: "故事书" },
      { word: "candy", emoji: "🍬", meaning: "糖果" },
      { word: "notebook", emoji: "📓", meaning: "笔记本" },
      { word: "toy", emoji: "🧸", meaning: "玩具" },
      { word: "key", emoji: "🔑", meaning: "钥匙" }
    ],
    sentences: [
      { english: "I have a new schoolbag", chinese: "我有一个新书包" },
      { english: "Put your notebook in your desk", chinese: "把你的笔记本放在桌子里" },
      { english: "I lost my key", chinese: "我丢了我的钥匙" }
    ]
  },
  
  // 四年级上册 Unit 3
  {
    id: 15,
    title: "外貌特征",
    description: "学习描述外貌的形容词",
    emoji: "👥",
    requiredPoints: 840,
    vocabulary: [
      { word: "strong", emoji: "💪", meaning: "强壮的" },
      { word: "friendly", emoji: "😊", meaning: "友好的" },
      { word: "quiet", emoji: "🤫", meaning: "安静的" },
      { word: "hair", emoji: "💇", meaning: "头发" },
      { word: "glasses", emoji: "👓", meaning: "眼镜" },
      { word: "hat", emoji: "🎩", meaning: "帽子" }
    ],
    sentences: [
      { english: "He is strong", chinese: "他很强壮" },
      { english: "She has long hair", chinese: "她有长头发" },
      { english: "He wears glasses", chinese: "他戴眼镜" }
    ]
  },
  
  // 四年级上册 Unit 4
  {
    id: 16,
    title: "房间名称",
    description: "学习房间的英文名称",
    emoji: "🏠",
    requiredPoints: 900,
    vocabulary: [
      { word: "bedroom", emoji: "🛏️", meaning: "卧室" },
      { word: "living room", emoji: "🛋️", meaning: "客厅" },
      { word: "study", emoji: "📚", meaning: "书房" },
      { word: "kitchen", emoji: "🍳", meaning: "厨房" },
      { word: "bathroom", emoji: "🚿", meaning: "卫生间" },
      { word: "bed", emoji: "🛏️", meaning: "床" }
    ],
    sentences: [
      { english: "Go to the living room", chinese: "去客厅" },
      { english: "Is she in the kitchen", chinese: "她在厨房吗" },
      { english: "I have a nice bedroom", chinese: "我有一个漂亮的卧室" }
    ]
  },
  
  // 四年级上册 Unit 5
  {
    id: 17,
    title: "食物饮料",
    description: "学习食物和饮料的英文名称",
    emoji: "🍜",
    requiredPoints: 960,
    vocabulary: [
      { word: "beef", emoji: "🥩", meaning: "牛肉" },
      { word: "chicken", emoji: "🍗", meaning: "鸡肉" },
      { word: "noodles", emoji: "🍜", meaning: "面条" },
      { word: "soup", emoji: "🍲", meaning: "汤" },
      { word: "vegetable", emoji: "🥬", meaning: "蔬菜" },
      { word: "bowl", emoji: "🥣", meaning: "碗" }
    ],
    sentences: [
      { english: "I like chicken", chinese: "我喜欢鸡肉" },
      { english: "Pass me the bowl", chinese: "把碗递给我" },
      { english: "Have some soup", chinese: "喝点汤" }
    ]
  },
  
  // 四年级上册 Unit 6
  {
    id: 18,
    title: "职业名称",
    description: "学习常见职业的英文名称",
    emoji: "👨‍⚕️",
    requiredPoints: 1020,
    vocabulary: [
      { word: "parents", emoji: "👨‍👩‍👧", meaning: "父母" },
      { word: "uncle", emoji: "👨", meaning: "叔叔" },
      { word: "aunt", emoji: "👩", meaning: "姑姑" },
      { word: "doctor", emoji: "👨‍⚕️", meaning: "医生" },
      { word: "cook", emoji: "👨‍🍳", meaning: "厨师" },
      { word: "driver", emoji: "👨‍✈️", meaning: "司机" }
    ],
    sentences: [
      { english: "My father is a doctor", chinese: "我爸爸是医生" },
      { english: "My uncle is a driver", chinese: "我叔叔是司机" },
      { english: "She is a cook", chinese: "她是厨师" }
    ]
  },
  
  // 四年级下册 Unit 1
  {
    id: 19,
    title: "学校场所",
    description: "学习学校里的场所名称",
    emoji: "🏫",
    requiredPoints: 1080,
    vocabulary: [
      { word: "library", emoji: "📚", meaning: "图书馆" },
      { word: "playground", emoji: "🏃", meaning: "操场" },
      { word: "computer room", emoji: "💻", meaning: "计算机房" },
      { word: "art room", emoji: "🎨", meaning: "美术教室" },
      { word: "music room", emoji: "🎵", meaning: "音乐教室" },
      { word: "class", emoji: "👨‍🎓", meaning: "班级" }
    ],
    sentences: [
      { english: "Where is the library", chinese: "图书馆在哪里" },
      { english: "Go to the playground", chinese: "去操场" },
      { english: "This is our music room", chinese: "这是我们的音乐教室" }
    ]
  },
  
  // 四年级下册 Unit 2
  {
    id: 20,
    title: "时间表达",
    description: "学习时间和日常活动的表达",
    emoji: "⏰",
    requiredPoints: 1140,
    vocabulary: [
      { word: "breakfast", emoji: "🍳", meaning: "早餐" },
      { word: "lunch", emoji: "🍱", meaning: "午餐" },
      { word: "dinner", emoji: "🍽️", meaning: "晚餐" },
      { word: "get up", emoji: "⏰", meaning: "起床" },
      { word: "go to school", emoji: "🏫", meaning: "去上学" },
      { word: "go home", emoji: "🏠", meaning: "回家" }
    ],
    sentences: [
      { english: "It's time for breakfast", chinese: "该吃早餐了" },
      { english: "Time to go to school", chinese: "该去上学了" },
      { english: "Let's go home", chinese: "我们回家吧" }
    ]
  },
  
  // 四年级下册 Unit 3
  {
    id: 21,
    title: "天气状况",
    description: "学习天气的英文表达",
    emoji: "🌤️",
    requiredPoints: 1200,
    vocabulary: [
      { word: "cold", emoji: "🥶", meaning: "寒冷的" },
      { word: "cool", emoji: "😌", meaning: "凉爽的" },
      { word: "warm", emoji: "☀️", meaning: "温暖的" },
      { word: "hot", emoji: "🥵", meaning: "炎热的" },
      { word: "sunny", emoji: "☀️", meaning: "晴朗的" },
      { word: "rainy", emoji: "🌧️", meaning: "多雨的" }
    ],
    sentences: [
      { english: "It's cold today", chinese: "今天很冷" },
      { english: "It's sunny in Beijing", chinese: "北京天气晴朗" },
      { english: "Is it rainy", chinese: "下雨了吗" }
    ]
  },
  
  // 四年级下册 Unit 4
  {
    id: 22,
    title: "农场动物",
    description: "学习农场动物的英文名称",
    emoji: "🐄",
    requiredPoints: 1260,
    vocabulary: [
      { word: "tomato", emoji: "🍅", meaning: "西红柿" },
      { word: "potato", emoji: "🥔", meaning: "土豆" },
      { word: "carrot", emoji: "🥕", meaning: "胡萝卜" },
      { word: "horse", emoji: "🐴", meaning: "马" },
      { word: "cow", emoji: "🐄", meaning: "奶牛" },
      { word: "sheep", emoji: "🐑", meaning: "绵羊" }
    ],
    sentences: [
      { english: "I like tomatoes", chinese: "我喜欢西红柿" },
      { english: "Look at the horses", chinese: "看那些马" },
      { english: "How many sheep", chinese: "有多少只羊" }
    ]
  },
  
  // 四年级下册 Unit 5
  {
    id: 23,
    title: "服装名称",
    description: "学习服装的英文名称",
    emoji: "👔",
    requiredPoints: 1320,
    vocabulary: [
      { word: "clothes", emoji: "👔", meaning: "衣服" },
      { word: "pants", emoji: "👖", meaning: "裤子" },
      { word: "hat", emoji: "🎩", meaning: "帽子" },
      { word: "dress", emoji: "👗", meaning: "连衣裙" },
      { word: "skirt", emoji: "👗", meaning: "女裙" },
      { word: "coat", emoji: "🧥", meaning: "外衣" }
    ],
    sentences: [
      { english: "I like this dress", chinese: "我喜欢这条连衣裙" },
      { english: "Whose coat is this", chinese: "这是谁的外衣" },
      { english: "These are my pants", chinese: "这些是我的裤子" }
    ]
  },
  
  // 四年级下册 Unit 6
  {
    id: 24,
    title: "购物用语",
    description: "学习购物时的常用表达",
    emoji: "🛍️",
    requiredPoints: 1380,
    vocabulary: [
      { word: "glove", emoji: "🧤", meaning: "手套" },
      { word: "scarf", emoji: "🧣", meaning: "围巾" },
      { word: "umbrella", emoji: "☂️", meaning: "雨伞" },
      { word: "sunglasses", emoji: "🕶️", meaning: "太阳镜" },
      { word: "pretty", emoji: "✨", meaning: "美观的" },
      { word: "cheap", emoji: "💰", meaning: "便宜的" }
    ],
    sentences: [
      { english: "How much is this scarf", chinese: "这条围巾多少钱" },
      { english: "It's too expensive", chinese: "太贵了" },
      { english: "I'll take it", chinese: "我买了" }
    ]
  },
  
  // 五年级上册 Unit 1
  {
    id: 25,
    title: "性格特征",
    description: "学习描述性格的形容词",
    emoji: "😊",
    requiredPoints: 1440,
    vocabulary: [
      { word: "old", emoji: "👴", meaning: "年老的" },
      { word: "young", emoji: "👶", meaning: "年轻的" },
      { word: "funny", emoji: "😄", meaning: "滑稽的" },
      { word: "kind", emoji: "😊", meaning: "和蔼的" },
      { word: "strict", emoji: "😠", meaning: "严格的" },
      { word: "polite", emoji: "🙏", meaning: "有礼貌的" }
    ],
    sentences: [
      { english: "My teacher is kind", chinese: "我的老师很和蔼" },
      { english: "He is very funny", chinese: "他很滑稽" },
      { english: "She is polite", chinese: "她很有礼貌" }
    ]
  },
  
  // 五年级上册 Unit 2
  {
    id: 26,
    title: "星期和活动",
    description: "学习星期和日常活动的表达",
    emoji: "📅",
    requiredPoints: 1500,
    vocabulary: [
      { word: "Monday", emoji: "📅", meaning: "星期一" },
      { word: "Tuesday", emoji: "📅", meaning: "星期二" },
      { word: "Wednesday", emoji: "📅", meaning: "星期三" },
      { word: "Thursday", emoji: "📅", meaning: "星期四" },
      { word: "Friday", emoji: "📅", meaning: "星期五" },
      { word: "Saturday", emoji: "📅", meaning: "星期六" }
    ],
    sentences: [
      { english: "What do you have on Mondays", chinese: "你星期一有什么课" },
      { english: "I have music on Fridays", chinese: "我星期五有音乐课" },
      { english: "I often read books on the weekend", chinese: "我经常在周末读书" }
    ]
  },
  
  // 五年级上册 Unit 3
  {
    id: 27,
    title: "食物偏好",
    description: "学习食物和饮料的表达",
    emoji: "🍔",
    requiredPoints: 1560,
    vocabulary: [
      { word: "sandwich", emoji: "🥪", meaning: "三明治" },
      { word: "salad", emoji: "🥗", meaning: "沙拉" },
      { word: "hamburger", emoji: "🍔", meaning: "汉堡包" },
      { word: "ice cream", emoji: "🍦", meaning: "冰淇淋" },
      { word: "tea", emoji: "🍵", meaning: "茶" },
      { word: "fresh", emoji: "🌿", meaning: "新鲜的" }
    ],
    sentences: [
      { english: "What would you like to eat", chinese: "你想吃什么" },
      { english: "I'd like a sandwich", chinese: "我想要一个三明治" },
      { english: "The salad is fresh", chinese: "沙拉很新鲜" }
    ]
  },
  
  // 五年级上册 Unit 4
  {
    id: 28,
    title: "才艺技能",
    description: "学习才艺和技能的表达",
    emoji: "🎭",
    requiredPoints: 1620,
    vocabulary: [
      { word: "sing", emoji: "🎤", meaning: "唱歌" },
      { word: "dance", emoji: "💃", meaning: "跳舞" },
      { word: "draw", emoji: "🎨", meaning: "画画" },
      { word: "cook", emoji: "👨‍🍳", meaning: "烹饪" },
      { word: "swim", emoji: "🏊", meaning: "游泳" },
      { word: "play basketball", emoji: "🏀", meaning: "打篮球" }
    ],
    sentences: [
      { english: "What can you do", chinese: "你会做什么" },
      { english: "I can sing English songs", chinese: "我会唱英文歌" },
      { english: "Can you dance", chinese: "你会跳舞吗" }
    ]
  },
  
  // 五年级上册 Unit 5
  {
    id: 29,
    title: "房间物品",
    description: "学习房间里的物品名称",
    emoji: "🏠",
    requiredPoints: 1680,
    vocabulary: [
      { word: "clock", emoji: "⏰", meaning: "时钟" },
      { word: "plant", emoji: "🪴", meaning: "植物" },
      { word: "bottle", emoji: "🍼", meaning: "瓶子" },
      { word: "bike", emoji: "🚲", meaning: "自行车" },
      { word: "photo", emoji: "📷", meaning: "照片" },
      { word: "above", emoji: "⬆️", meaning: "在...上面" }
    ],
    sentences: [
      { english: "There is a clock on the wall", chinese: "墙上有一个时钟" },
      { english: "The photo is above the bed", chinese: "照片在床的上方" },
      { english: "I have a plant in my room", chinese: "我房间里有一株植物" }
    ]
  },
  
  // 五年级上册 Unit 6
  {
    id: 30,
    title: "自然景观",
    description: "学习自然景观的英文名称",
    emoji: "🏞️",
    requiredPoints: 1740,
    vocabulary: [
      { word: "forest", emoji: "🌲", meaning: "森林" },
      { word: "river", emoji: "🏞️", meaning: "河流" },
      { word: "lake", emoji: "🏞️", meaning: "湖泊" },
      { word: "mountain", emoji: "⛰️", meaning: "高山" },
      { word: "hill", emoji: "⛰️", meaning: "小山" },
      { word: "tree", emoji: "🌳", meaning: "树" }
    ],
    sentences: [
      { english: "Is there a river in the park", chinese: "公园里有河吗" },
      { english: "There are many trees in the forest", chinese: "森林里有很多树" },
      { english: "The lake is beautiful", chinese: "湖很美" }
    ]
  },
  
  // 六年级上册 Unit 1
  {
    id: 31,
    title: "地点场所",
    description: "学习地点和场所的英文名称",
    emoji: "🏢",
    requiredPoints: 1800,
    vocabulary: [
      { word: "science", emoji: "🔬", meaning: "科学" },
      { word: "museum", emoji: "🏛️", meaning: "博物馆" },
      { word: "post office", emoji: "📮", meaning: "邮局" },
      { word: "bookstore", emoji: "📚", meaning: "书店" },
      { word: "cinema", emoji: "🎬", meaning: "电影院" },
      { word: "hospital", emoji: "🏥", meaning: "医院" }
    ],
    sentences: [
      { english: "Where is the museum", chinese: "博物馆在哪里" },
      { english: "It's near the post office", chinese: "它在邮局附近" },
      { english: "How can I get to the cinema", chinese: "我怎么去电影院" }
    ]
  },
  
  // 六年级上册 Unit 2
  {
    id: 32,
    title: "交通方式",
    description: "学习交通工具和交通方式的表达",
    emoji: "🚌",
    requiredPoints: 1860,
    vocabulary: [
      { word: "on foot", emoji: "🚶", meaning: "步行" },
      { word: "by bus", emoji: "🚌", meaning: "乘公交车" },
      { word: "by plane", emoji: "✈️", meaning: "乘飞机" },
      { word: "by taxi", emoji: "🚕", meaning: "乘出租车" },
      { word: "by ship", emoji: "🚢", meaning: "乘船" },
      { word: "by subway", emoji: "🚇", meaning: "乘地铁" }
    ],
    sentences: [
      { english: "How do you go to school", chinese: "你怎么去上学" },
      { english: "I go to school by bus", chinese: "我乘公交车去上学" },
      { english: "Let's go by taxi", chinese: "我们坐出租车去吧" }
    ]
  },
  
  // 六年级上册 Unit 3
  {
    id: 33,
    title: "周末计划",
    description: "学习计划和活动的表达",
    emoji: "📝",
    requiredPoints: 1920,
    vocabulary: [
      { word: "visit", emoji: "👋", meaning: "拜访" },
      { word: "film", emoji: "🎬", meaning: "电影" },
      { word: "trip", emoji: "✈️", meaning: "旅行" },
      { word: "supermarket", emoji: "🛒", meaning: "超市" },
      { word: "evening", emoji: "🌆", meaning: "晚上" },
      { word: "tomorrow", emoji: "📅", meaning: "明天" }
    ],
    sentences: [
      { english: "What are you going to do", chinese: "你打算做什么" },
      { english: "I'm going to visit my grandparents", chinese: "我打算去看望我的祖父母" },
      { english: "We're going to see a film", chinese: "我们打算去看电影" }
    ]
  },
  
  // 六年级上册 Unit 4
  {
    id: 34,
    title: "兴趣爱好",
    description: "学习兴趣爱好的表达",
    emoji: "🎨",
    requiredPoints: 1980,
    vocabulary: [
      { word: "studies", emoji: "📚", meaning: "学习" },
      { word: "puzzle", emoji: "🧩", meaning: "谜题" },
      { word: "hiking", emoji: "🥾", meaning: "远足" },
      { word: "pen pal", emoji: "✉️", meaning: "笔友" },
      { word: "hobby", emoji: "🎯", meaning: "爱好" },
      { word: "idea", emoji: "💡", meaning: "主意" }
    ],
    sentences: [
      { english: "What are your hobbies", chinese: "你的爱好是什么" },
      { english: "I like reading stories", chinese: "我喜欢读故事" },
      { english: "He likes doing word puzzles", chinese: "他喜欢做字谜" }
    ]
  },
  
  // 六年级上册 Unit 5
  {
    id: 35,
    title: "职业理想",
    description: "学习职业的英文名称",
    emoji: "👨‍💼",
    requiredPoints: 2040,
    vocabulary: [
      { word: "factory", emoji: "🏭", meaning: "工厂" },
      { word: "worker", emoji: "👷", meaning: "工人" },
      { word: "postman", emoji: "📮", meaning: "邮递员" },
      { word: "businessman", emoji: "👨‍💼", meaning: "商人" },
      { word: "police officer", emoji: "👮", meaning: "警察" },
      { word: "fisherman", emoji: "🎣", meaning: "渔夫" }
    ],
    sentences: [
      { english: "What does he do", chinese: "他是做什么的" },
      { english: "He is a businessman", chinese: "他是商人" },
      { english: "Where does she work", chinese: "她在哪里工作" }
    ]
  },
  
  // 六年级上册 Unit 6
  {
    id: 36,
    title: "情绪感受",
    description: "学习情绪和感受的表达",
    emoji: "😊",
    requiredPoints: 2100,
    vocabulary: [
      { word: "happy", emoji: "😊", meaning: "高兴的" },
      { word: "sad", emoji: "😢", meaning: "难过的" },
      { word: "angry", emoji: "😠", meaning: "生气的" },
      { word: "afraid", emoji: "😨", meaning: "害怕的" },
      { word: "worried", emoji: "😟", meaning: "担心的" },
      { word: "ill", emoji: "🤒", meaning: "生病的" }
    ],
    sentences: [
      { english: "How do you feel", chinese: "你感觉怎么样" },
      { english: "I'm happy", chinese: "我很高兴" },
      { english: "Don't be worried", chinese: "别担心" }
    ]
  },
  
  // 六年级下册 Unit 1
  {
    id: 37,
    title: "比较级",
    description: "学习形容词比较级的表达",
    emoji: "📊",
    requiredPoints: 2160,
    vocabulary: [
      { word: "younger", emoji: "👶", meaning: "更年轻的" },
      { word: "older", emoji: "👴", meaning: "更年长的" },
      { word: "taller", emoji: "📏", meaning: "更高的" },
      { word: "shorter", emoji: "📏", meaning: "更矮的" },
      { word: "longer", emoji: "📏", meaning: "更长的" },
      { word: "stronger", emoji: "💪", meaning: "更强壮的" }
    ],
    sentences: [
      { english: "I'm taller than you", chinese: "我比你高" },
      { english: "You're older than me", chinese: "你比我大" },
      { english: "My hair is longer than yours", chinese: "我的头发比你的长" }
    ]
  },
  
  // 六年级下册 Unit 2
  {
    id: 38,
    title: "过去活动",
    description: "学习过去时态的表达",
    emoji: "⏰",
    requiredPoints: 2220,
    vocabulary: [
      { word: "cleaned", emoji: "🧹", meaning: "打扫了" },
      { word: "washed", emoji: "🧼", meaning: "洗了" },
      { word: "stayed", emoji: "🏠", meaning: "待在" },
      { word: "watched", emoji: "📺", meaning: "看了" },
      { word: "had", emoji: "😊", meaning: "有" },
      { word: "saw", emoji: "👀", meaning: "看见了" }
    ],
    sentences: [
      { english: "What did you do last weekend", chinese: "你上周末做了什么" },
      { english: "I cleaned my room", chinese: "我打扫了我的房间" },
      { english: "I watched TV", chinese: "我看了电视" }
    ]
  },
  
  // 六年级下册 Unit 3
  {
    id: 39,
    title: "假期活动",
    description: "学习假期活动的表达",
    emoji: "✈️",
    requiredPoints: 2280,
    vocabulary: [
      { word: "went", emoji: "🚶", meaning: "去了" },
      { word: "camp", emoji: "⛺", meaning: "露营" },
      { word: "fishing", emoji: "🎣", meaning: "钓鱼" },
      { word: "rode", emoji: "🚴", meaning: "骑" },
      { word: "hurt", emoji: "🤕", meaning: "受伤" },
      { word: "ate", emoji: "🍽️", meaning: "吃了" }
    ],
    sentences: [
      { english: "Where did you go", chinese: "你去哪里了" },
      { english: "I went camping", chinese: "我去露营了" },
      { english: "I rode a bike", chinese: "我骑自行车了" }
    ]
  },
  
  // 六年级下册 Unit 4
  {
    id: 40,
    title: "学校变化",
    description: "学习描述变化的表达",
    emoji: "🏫",
    requiredPoints: 2340,
    vocabulary: [
      { word: "dining hall", emoji: "🍽️", meaning: "餐厅" },
      { word: "grass", emoji: "🌱", meaning: "草地" },
      { word: "gym", emoji: "🏋️", meaning: "体育馆" },
      { word: "ago", emoji: "⏰", meaning: "以前" },
      { word: "cycling", emoji: "🚴", meaning: "骑自行车运动" },
      { word: "ice-skate", emoji: "⛸️", meaning: "滑冰" }
    ],
    sentences: [
      { english: "There was no gym in my school", chinese: "我的学校以前没有体育馆" },
      { english: "Now there is a new dining hall", chinese: "现在有一个新餐厅" },
      { english: "I didn't like winter before", chinese: "我以前不喜欢冬天" }
    ]
  }
];

// 等级系统 - 适配40节课程
export const levels = [
  { id: 1, name: "初学者", emoji: "🌱", minPoints: 0, maxPoints: 499 },
  { id: 2, name: "进步者", emoji: "🌿", minPoints: 500, maxPoints: 1499 },
  { id: 3, name: "学习者", emoji: "🌳", minPoints: 1500, maxPoints: 2999 },
  { id: 4, name: "优秀者", emoji: "⭐", minPoints: 3000, maxPoints: 4999 },
  { id: 5, name: "精通者", emoji: "🏆", minPoints: 5000, maxPoints: 7499 },
  { id: 6, name: "大师", emoji: "👑", minPoints: 7500, maxPoints: Infinity }
];

// 成就系统 - 适配40节课程
export const achievements = [
  { id: 1, name: "词汇新手", emoji: "📖", description: "练习50个单词", requirement: 50, type: "vocabulary" },
  { id: 2, name: "词汇达人", emoji: "📚", description: "练习120个单词", requirement: 120, type: "vocabulary" },
  { id: 3, name: "词汇大师", emoji: "📕", description: "练习240个单词（40课×6个词）", requirement: 240, type: "vocabulary" },
  { id: 4, name: "句型新手", emoji: "✏️", description: "练习30个句型", requirement: 30, type: "sentence" },
  { id: 5, name: "句型专家", emoji: "✍️", description: "练习60个句型", requirement: 60, type: "sentence" },
  { id: 6, name: "句型大师", emoji: "📝", description: "练习120个句型（40课×3个句）", requirement: 120, type: "sentence" },
  { id: 7, name: "听力新手", emoji: "👂", description: "完成50次听音练习", requirement: 50, type: "listening" },
  { id: 8, name: "听力高手", emoji: "🎧", description: "完成120次听音练习", requirement: 120, type: "listening" },
  { id: 9, name: "听力大师", emoji: "🎵", description: "完成240次听音练习", requirement: 240, type: "listening" },
  { id: 10, name: "坚持不懈", emoji: "💪", description: "连续学习7天", requirement: 7, type: "streak" },
  { id: 11, name: "积分新星", emoji: "🌟", description: "累计获得1000积分", requirement: 1000, type: "points" },
  { id: 12, name: "积分大户", emoji: "💰", description: "累计获得3000积分", requirement: 3000, type: "points" },
  { id: 13, name: "积分大师", emoji: "💎", description: "累计获得5000积分", requirement: 5000, type: "points" },
  { id: 14, name: "课程入门", emoji: "📚", description: "完成10节课程", requirement: 10, type: "courses" },
  { id: 15, name: "课程进阶", emoji: "📖", description: "完成20节课程", requirement: 20, type: "courses" },
  { id: 16, name: "全能学霸", emoji: "🎓", description: "完成40节课程", requirement: 40, type: "courses" }
];



// 辅助函数：根据积分获取等级
export const getLevelByPoints = (points) => {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (points >= levels[i].minPoints) {
      return { level: levels[i].id, ...levels[i] }
    }
  }
  return { level: 1, ...levels[0] }
}

// 辅助函数：获取可用课程
// 获取可用课程 - 基于游戏完成状态
export const getAvailableLessons = (completedGames) => {
  // 第一课总是解锁的
  const available = [lessons[0]]
  
  // 检查每一课是否完成了所有三个游戏
  for (let i = 0; i < lessons.length - 1; i++) {
    const lessonId = lessons[i].id
    const games = completedGames[lessonId]
    
    // 如果前一课的所有三个游戏都完成了，解锁下一课
    if (games && games.matching && games.sentence && games.listening) {
      available.push(lessons[i + 1])
    } else {
      // 如果前一课未完成，后面的课程都不解锁
      break
    }
  }
  
  return available
}

