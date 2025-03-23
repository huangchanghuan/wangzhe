// 英雄数据
const heroData = [
    {
        id: 1,
        name: "鲁班七号",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg",
        role: "marksman",
        roleName: "射手",
        winRate: 52.8,
        pickRate: 13.5,
        banRate: 18.2,
        popularity: 95
    },
    {
        id: 2,
        name: "安琪拉",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg",
        role: "mage",
        roleName: "法师",
        winRate: 50.3,
        pickRate: 12.1,
        banRate: 5.8,
        popularity: 92
    },
    {
        id: 3,
        name: "孙悟空",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
        role: "assassin",
        roleName: "刺客",
        winRate: 49.7,
        pickRate: 10.8,
        banRate: 15.3,
        popularity: 90
    },
    {
        id: 4,
        name: "亚瑟",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg",
        role: "warrior",
        roleName: "战士",
        winRate: 51.2,
        pickRate: 9.5,
        banRate: 2.1,
        popularity: 88
    },
    {
        id: 5,
        name: "甄姬",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg",
        role: "mage",
        roleName: "法师",
        winRate: 48.9,
        pickRate: 8.7,
        banRate: 4.5,
        popularity: 85
    },
    {
        id: 6,
        name: "庄周",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg",
        role: "support",
        roleName: "辅助",
        winRate: 50.8,
        pickRate: 7.9,
        banRate: 1.2,
        popularity: 83
    },
    {
        id: 7,
        name: "吕布",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg",
        role: "warrior",
        roleName: "战士",
        winRate: 49.2,
        pickRate: 8.3,
        banRate: 6.7,
        popularity: 82
    },
    {
        id: 8,
        name: "妲己",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg",
        role: "mage",
        roleName: "法师",
        winRate: 51.5,
        pickRate: 9.2,
        banRate: 12.4,
        popularity: 80
    },
    {
        id: 9,
        name: "铠",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg",
        role: "warrior",
        roleName: "战士",
        winRate: 48.5,
        pickRate: 7.6,
        banRate: 3.8,
        popularity: 78
    },
    {
        id: 10,
        name: "李元芳",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg",
        role: "marksman",
        roleName: "射手",
        winRate: 49.8,
        pickRate: 8.1,
        banRate: 2.5,
        popularity: 76
    },
    {
        id: 11,
        name: "张良",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg",
        role: "mage",
        roleName: "法师",
        winRate: 50.1,
        pickRate: 6.8,
        banRate: 1.9,
        popularity: 75
    },
    {
        id: 12,
        name: "牛魔",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg",
        role: "tank",
        roleName: "坦克",
        winRate: 51.7,
        pickRate: 7.2,
        banRate: 2.3,
        popularity: 74
    }
];

// 玩家数据
const playerData = [
    {
        id: 1,
        name: "荣耀王者",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/166/166-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2850,
        winRate: 68.5,
        server: "ios",
        favoriteHeroes: ["亚瑟", "鲁班七号", "孙悟空"]
    },
    {
        id: 2,
        name: "最强王者",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/142/142-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2780,
        winRate: 65.2,
        server: "android",
        favoriteHeroes: ["安琪拉", "妲己", "甄姬"]
    },
    {
        id: 3,
        name: "无敌刺客",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/167/167-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2720,
        winRate: 63.8,
        server: "ios",
        favoriteHeroes: ["孙悟空", "李白", "韩信"]
    },
    {
        id: 4,
        name: "射手天花板",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/112/112-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2690,
        winRate: 62.5,
        server: "android",
        favoriteHeroes: ["鲁班七号", "后羿", "马可波罗"]
    },
    {
        id: 5,
        name: "法师大师",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/127/127-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2650,
        winRate: 61.9,
        server: "ios",
        favoriteHeroes: ["甄姬", "安琪拉", "妲己"]
    },
    {
        id: 6,
        name: "辅助之光",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/113/113-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2620,
        winRate: 60.7,
        server: "android",
        favoriteHeroes: ["庄周", "牛魔", "蔡文姬"]
    },
    {
        id: 7,
        name: "战士一哥",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/123/123-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2590,
        winRate: 59.8,
        server: "ios",
        favoriteHeroes: ["吕布", "铠", "花木兰"]
    },
    {
        id: 8,
        name: "坦克担当",
        avatar: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/168/168-bigskin-1.jpg",
        rank: "荣耀王者",
        power: 2560,
        winRate: 58.5,
        server: "android",
        favoriteHeroes: ["牛魔", "张飞", "廉颇"]
    }
];

// 战队数据
const teamData = [
    {
        id: 1,
        name: "KPL冠军队",
        logo: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/166/166-bigskin-1.jpg",
        members: 50,
        avgPower: 2500,
        honors: "KPL春季赛冠军, KPL秋季赛亚军"
    },
    {
        id: 2,
        name: "荣耀战队",
        logo: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/142/142-bigskin-1.jpg",
        members: 48,
        avgPower: 2450,
        honors: "KPL秋季赛冠军, 世界冠军杯亚军"
    },
    {
        id: 3,
        name: "王者之师",
        logo: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/167/167-bigskin-1.jpg",
        members: 45,
        avgPower: 2400,
        honors: "KPL春季赛亚军, 挑战者杯冠军"
    },
    {
        id: 4,
        name: "无敌战队",
        logo: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/112/112-bigskin-1.jpg",
        members: 42,
        avgPower: 2350,
        honors: "挑战者杯亚军, 城市赛冠军"
    },
    {
        id: 5,
        name: "电竞先锋",
        logo: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/127/127-bigskin-1.jpg",
        members: 40,
        avgPower: 2300,
        honors: "城市赛亚军, 高校联赛冠军"
    }
];