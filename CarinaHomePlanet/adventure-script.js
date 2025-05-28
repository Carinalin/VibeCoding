// Story data for CarinaHome Adventure
const STORY_DATA = {
    start: {
        title: "废弃营地：探险的起点",
        content: `你在一片废弃的探险营地中醒来，四周散落着破损的设备和遗留的日志碎片。空气中弥漫着淡淡的硫化物气味，远处传来低沉的轰鸣声。你是CarinaHome星球上的外来探险家，被神秘能量吸引而来，任务是揭开“皇冠”的秘密并稳定星球的能量。

日志碎片揭示了前人未完成的使命：寻找传说中的“皇冠”，它可能是稳定星球能量波动的关键。你必须决定从哪里开始你的探险之旅。`,
        status: {
            location: "废弃营地",
            health: "正常",
            resources: "基础装备"
        },
        choices: [
            {
                text: "前往水晶森林",
                description: "探索充满巨型水晶树和发光植被的梦幻区域，寻找线索和初始资源。",
                nextNode: "crystal_forest"
            },
            {
                text: "前往熔岩峡谷",
                description: "冒险进入炽热的岩浆流区域，可能会遇到危险但也有机会获取高级材料。",
                risk: "高温环境可能造成伤害",
                nextNode: "lava_canyon"
            }
        ]
    },

    crystal_forest: {
        title: "水晶森林：梦幻光影",
        content: `你进入了水晶森林，周围是高耸的巨型水晶树和发光植被，光影交错，宛如梦境。空气中弥漫着微弱的能量波动，你感到一种莫名的吸引力。

在森林深处，你遇到了一个年迈的当地居民，名叫艾尔达。她似乎知晓星球的历史和皇冠的秘密。艾尔达用怀疑的眼神打量着你，缓缓开口：“外来者，你为何闯入这片圣地？如果你想获得我的信任，证明你的价值吧。”`,
        status: {
            location: "水晶森林",
            health: "正常",
            resources: "基础装备"
        },
        choices: [
            {
                text: "接受任务：收集心语苔藓",
                description: "答应艾尔达的要求，前往森林深处收集稀有的心语苔藓，以赢得她的信任。",
                nextNode: "elda_task"
            },
            {
                text: "拒绝并独自探索",
                description: "婉拒艾尔达的任务，独自在水晶森林中寻找其他线索。",
                risk: "可能错过重要信息",
                nextNode: "forest_exploration"
            }
        ]
    },

    lava_canyon: {
        title: "熔岩峡谷：炽热之地",
        content: `你踏入了熔岩峡谷，脚下是炽热的岩浆流，空气中充满硫磺的气味。高温让你的行动变得艰难，但你注意到峡谷中散落着高温矿石，闪烁着诱人的光芒。

在峡谷的一个安全平台上，你遇到了一个名叫卡尔的探险家商人。他咧嘴一笑：“嘿，朋友，这里可不是随便逛的地方。想要点好东西？拿资源来换吧。”`,
        status: {
            location: "熔岩峡谷",
            health: "轻微不适",
            resources: "基础装备"
        },
        environment: ["dust-storm"],
        choices: [
            {
                text: "交易资源",
                description: "用你现有的资源与卡尔交易，获取稀有材料或信息。",
                nextNode: "kal_trade"
            },
            {
                text: "接受委托任务",
                description: "接受卡尔的高风险委托任务，前往峡谷深处收集特定矿石以换取奖励。",
                risk: "高风险任务，可能受伤",
                nextNode: "kal_task"
            }
        ]
    },

    elda_task: {
        title: "艾尔达的任务",
        content: `你接受了艾尔达的任务，深入水晶森林寻找心语苔藓。森林中的光灵和晶甲虫在你周围游荡，环境谜题让你有些迷失方向，但你最终找到了一片覆盖着发光苔藓的区域。

收集苔藓时，你感到一股微弱的能量波动，似乎与星球的秘密有关。你成功收集了足够的心语苔藓，返回艾尔达身边。艾尔达满意地点点头：“不错，外来者。你比我想象中更有能力。听好了，皇冠的秘密隐藏在古代遗迹中，去那里寻找答案吧。”`,
        status: {
            location: "水晶森林深处",
            health: "正常",
            resources: "基础装备，心语苔藓"
        },
        choices: [
            {
                text: "前往古代遗迹",
                description: "根据艾尔达的指引，前往古代遗迹寻找关于皇冠的线索。",
                nextNode: "ancient_ruins"
            }
        ]
    },

    forest_exploration: {
        title: "独自探索森林",
        content: `你婉拒了艾尔达的任务，决定独自在水晶森林中探索。你发现了一些发光植被和资源，但没有找到关于皇冠的直接线索。森林中的环境谜题让你有些迷失方向，浪费了一些时间。

最终，你意识到可能需要艾尔达的帮助才能推进你的任务。你可以选择返回找她，或者继续前往其他区域。`,
        status: {
            location: "水晶森林",
            health: "正常",
            resources: "基础装备，少量发光植被"
        },
        choices: [
            {
                text: "返回找艾尔达",
                description: "回到艾尔达身边，接受她的任务以获取更多信息。",
                nextNode: "elda_task"
            },
            {
                text: "前往熔岩峡谷",
                description: "离开水晶森林，前往熔岩峡谷寻找其他线索。",
                nextNode: "lava_canyon"
            }
        ]
    },

    kal_trade: {
        title: "与卡尔交易",
        content: `你决定与卡尔交易，用一些基础资源换取了一块稀有高温矿石和一条关于古代遗迹的信息。卡尔笑着说：“遗迹里有大秘密，朋友，但可不是随便能进去的。小心点吧。” 

交易完成后，你感到自己更强大了一些，但也意识到需要更多资源和信息来面对未来的挑战。`,
        status: {
            location: "熔岩峡谷",
            health: "轻微不适",
            resources: "基础装备，高温矿石"
        },
        choices: [
            {
                text: "前往古代遗迹",
                description: "根据卡尔的信息，前往古代遗迹寻找更多线索。",
                nextNode: "ancient_ruins"
            },
            {
                text: "继续在峡谷探索",
                description: "继续在熔岩峡谷中探索，寻找更多资源或机会。",
                nextNode: "canyon_exploration"
            }
        ]
    },

    kal_task: {
        title: "卡尔的委托",
        content: `你接受了卡尔的委托，前往熔岩峡谷深处收集一种特定的炽热矿石。高温环境让你感到不适，但你成功避开了火蜥蜴的攻击，收集到了所需的矿石。

返回后，卡尔满意地收下矿石，给你一块更高级的材料和一条信息：“听说古代遗迹里有通往女王宫殿的隐秘通路，但得小心机关。”`,
        status: {
            location: "熔岩峡谷深处",
            health: "中度疲劳",
            resources: "基础装备，高级材料"
        },
        choices: [
            {
                text: "前往古代遗迹",
                description: "根据卡尔的信息，前往古代遗迹寻找隐秘通路。",
                nextNode: "ancient_ruins"
            }
        ]
    },

    canyon_exploration: {
        title: "峡谷探索",
        content: `你继续在熔岩峡谷中探索，发现了一些额外的矿石资源，但也遭遇了一只熔岩巨蟹的攻击，勉强逃脱。高温环境持续影响着你的状态，你意识到需要尽快离开或找到庇护。

你注意到远处有一个通往生物发光洞穴的入口，可能是一个避难所。`,
        status: {
            location: "熔岩峡谷",
            health: "中度疲劳",
            resources: "基础装备，少量矿石"
        },
        choices: [
            {
                text: "前往生物发光洞穴",
                description: "前往洞穴入口，寻找避难所和新的探索机会。",
                nextNode: "bioluminescent_cave"
            },
            {
                text: "返回安全平台",
                description: "返回卡尔所在的安全平台，休息并重新计划。",
                nextNode: "kal_trade"
            }
        ]
    },

    ancient_ruins: {
        title: "古代遗迹：历史的回响",
        content: `你来到了古代遗迹，周围是破败的古老建筑群，布满了机关和谜题。空气中弥漫着历史的厚重感，你发现了一些关于皇冠起源的线索。

在一块石碑上，你读取到皇冠是星球能量的核心，女王Carina的行为是为了保护它，但也可能导致星球的不稳定。你还找到了一条通往女王宫殿的隐秘通路，但需要解开一个复杂的谜题才能进入。`,
        status: {
            location: "古代遗迹",
            health: "正常",
            resources: "基础装备，历史线索"
        },
        choices: [
            {
                text: "解谜进入隐秘通路",
                description: "花费时间和精力解开谜题，进入通往女王宫殿的隐秘通路。",
                nextNode: "hidden_path"
            },
            {
                text: "探索更多遗迹",
                description: "继续探索遗迹，寻找更多线索或资源。",
                nextNode: "ruins_exploration"
            }
        ]
    },

    bioluminescent_cave: {
        title: "生物发光洞穴：黑暗之光",
        content: `你进入了生物发光洞穴，周围是漆黑的地底环境，发光菌类和奇异生物散发出微弱的光芒。你听到回声在洞穴中回荡，感到一种不安。

在洞穴深处，你遇到了一群洞穴鱼人，它们用警惕的眼神注视着你。你可以选择与它们交流，尝试建立友好关系，或者保持距离以避免冲突。`,
        status: {
            location: "生物发光洞穴",
            health: "中度疲劳",
            resources: "基础装备"
        },
        environment: ["underground"],
        choices: [
            {
                text: "尝试交流",
                description: "与洞穴鱼人交流，尝试赢得它们的信任，可能获得指引或资源。",
                nextNode: "cave_fishman_ally"
            },
            {
                text: "保持距离",
                description: "避免与洞穴鱼人接触，独自探索洞穴其他区域。",
                risk: "可能错过盟友或资源",
                nextNode: "cave_exploration"
            }
        ]
    },

    hidden_path: {
        title: "隐秘通路：通往终点",
        content: `你成功解开了古代遗迹中的谜题，进入了一条隐秘通路。这条通路通往女王高原及宫殿，周围环境逐渐变得庄严而肃穆。

你意识到自己即将面对最终的挑战，必须做好准备。你可以选择直接前往宫殿，或者先搜寻通路中的资源以增强自己。`,
        status: {
            location: "隐秘通路",
            health: "正常",
            resources: "基础装备，历史线索"
        },
        choices: [
            {
                text: "直接前往宫殿",
                description: "直接前往女王宫殿，准备面对最终挑战。",
                nextNode: "queen_palace"
            },
            {
                text: "搜寻资源",
                description: "在通路中搜寻可能有用的资源或装备，以更好地准备面对女王。",
                nextNode: "path_resources"
            }
        ]
    },

    ruins_exploration: {
        title: "深入遗迹",
        content: `你继续探索古代遗迹，发现了一些额外的历史线索和一件古老信物，可能在面对女王时有用。你还遭遇了一只遗迹守卫，战斗中受了轻伤。

最终，你决定是时候进入隐秘通路，前往女王宫殿。`,
        status: {
            location: "古代遗迹深处",
            health: "轻微受伤",
            resources: "基础装备，历史线索，古老信物"
        },
        choices: [
            {
                text: "进入隐秘通路",
                description: "进入通往女王宫殿的隐秘通路，准备最终挑战。",
                nextNode: "hidden_path"
            }
        ]
    },

    cave_fishman_ally: {
        title: "洞穴盟友",
        content: `你成功与洞穴鱼人建立了友好关系，它们为你指引了一条通往女王高原的捷径，并提供了一些发光菌类作为资源。鱼人首领用低沉的声音说：“外来者，愿你带来平衡。我们会记住你的善意。” 

有了鱼人的帮助，你可以更快地接近最终目标。`,
        status: {
            location: "生物发光洞穴",
            health: "中度疲劳",
            resources: "基础装备，发光菌类"
        },
        choices: [
            {
                text: "走捷径前往女王高原",
                description: "利用鱼人指引的捷径，快速前往女王高原。",
                nextNode: "queen_plateau"
            }
        ]
    },

    cave_exploration: {
        title: "洞穴探索",
        content: `你选择避开洞穴鱼人，独自探索洞穴其他区域。你找到了一些发光菌类，但也遭遇了一只夜行蝙蝠的攻击，状态略有下降。

在洞穴深处，你发现了一条可能通往女王高原的捷径，但需要冒一些风险。`,
        status: {
            location: "生物发光洞穴深处",
            health: "中度受伤",
            resources: "基础装备，少量发光菌类"
        },
        choices: [
            {
                text: "冒险走捷径",
                description: "冒险通过不稳定的捷径，前往女王高原。",
                risk: "不稳定路径可能导致受伤",
                nextNode: "queen_plateau_risk"
            },
            {
                text: "返回地表",
                description: "返回地表，寻找其他路径前往女王宫殿。",
                nextNode: "start"
            }
        ]
    },

    path_resources: {
        title: "通路资源",
        content: `你在隐秘通路中搜寻，找到了一些有用的资源和一件皇家装备碎片，可能在面对女王时提供帮助。你的状态得到了提升，准备迎接最终挑战。`,
        status: {
            location: "隐秘通路",
            health: "正常",
            resources: "基础装备，历史线索，皇家装备碎片"
        },
        choices: [
            {
                text: "前往女王宫殿",
                description: "带着增强的装备和资源，前往女王宫殿面对最终挑战。",
                nextNode: "queen_palace"
            }
        ]
    },

    queen_plateau: {
        title: "女王高原：庄严之地",
        content: `你来到了女王高原，周围是庄严的平原和皇家守卫巡逻的区域。你看到宏伟的女王宫殿在前方，但首先必须面对皇家守卫队长莉拉。

莉拉手持长矛，目光锐利：“外来者，止步！女王不欢迎不速之客。证明你的意图，否则准备战斗！”`,
        status: {
            location: "女王高原",
            health: "中度疲劳",
            resources: "基础装备，发光菌类"
        },
        choices: [
            {
                text: "尝试说服莉拉",
                description: "用你收集到的线索和信物尝试说服莉拉，让你通过。",
                nextNode: "lyra_convince"
            },
            {
                text: "准备战斗",
                description: "与莉拉战斗，试图通过武力进入宫殿。",
                risk: "战斗可能导致严重受伤",
                nextNode: "lyra_battle"
            },
            {
                text: "尝试潜行",
                description: "寻找机会绕过莉拉，潜入宫殿。",
                risk: "潜行失败可能导致战斗",
                nextNode: "lyra_stealth"
            }
        ]
    },

    queen_plateau_risk: {
        title: "女王高原：冒险之路",
        content: `你冒险通过洞穴中的不稳定捷径，成功到达女王高原，但途中受了伤。周围是庄严的平原和皇家守卫巡逻的区域，你看到宏伟的女王宫殿在前方，但首先必须面对皇家守卫队长莉拉。

莉拉手持长矛，目光锐利：“外来者，止步！女王不欢迎不速之客。证明你的意图，否则准备战斗！”`,
        status: {
            location: "女王高原",
            health: "中度受伤",
            resources: "基础装备，少量发光菌类"
        },
        choices: [
            {
                text: "尝试说服莉拉",
                description: "用你收集到的线索和信物尝试说服莉拉，让你通过。",
                nextNode: "lyra_convince"
            },
            {
                text: "准备战斗",
                description: "与莉拉战斗，试图通过武力进入宫殿。",
                risk: "战斗可能导致严重受伤",
                nextNode: "lyra_battle"
            },
            {
                text: "尝试潜行",
                description: "寻找机会绕过莉拉，潜入宫殿。",
                risk: "潜行失败可能导致战斗",
                nextNode: "lyra_stealth"
            }
        ]
    },

    lyra_convince: {
        title: "说服莉拉",
        content: `你用收集到的历史线索和信物向莉拉证明了你的意图是为了星球的平衡。莉拉犹豫片刻，最终放下武器：“好吧，外来者。我相信你的诚意。女王在宫殿内等你，但小心，她的力量远超你的想象。” 

莉拉为你打开了通往宫殿的道路，并提供了一些内部信息。你得以和平进入宫殿。`,
        status: {
            location: "女王高原",
            health: "中度疲劳",
            resources: "基础装备，内部信息"
        },
        choices: [
            {
                text: "进入女王宫殿",
                description: "进入宫殿，准备与女王Carina进行最终互动。",
                nextNode: "queen_palace"
            }
        ]
    },

    lyra_battle: {
        title: "与莉拉战斗",
        content: `你与莉拉展开激烈战斗，她的力量和技巧让你陷入苦战。最终，你勉强击败了她，但自己也受了重伤。莉拉倒下时低语：“女王... 会为我复仇...” 

你获得了她的皇家装备，但状态非常糟糕。你拖着疲惫的身体进入宫殿。`,
        status: {
            location: "女王高原",
            health: "重伤",
            resources: "基础装备，皇家装备"
        },
        choices: [
            {
                text: "进入女王宫殿",
                description: "带着重伤进入宫殿，面对最终挑战。",
                nextNode: "queen_palace_injured"
            }
        ]
    },

    lyra_stealth: {
        title: "潜行绕过莉拉",
        content: `你找到机会绕过莉拉，成功潜入了宫殿外围。虽然没有被发现，但你也错过了与莉拉互动可能获得的信息或装备。你的状态保持不变，准备面对女王。`,
        status: {
            location: "女王宫殿外围",
            health: "中度疲劳",
            resources: "基础装备"
        },
        choices: [
            {
                text: "进入女王宫殿",
                description: "进入宫殿内部，准备与女王Carina进行最终互动。",
                nextNode: "queen_palace"
            }
        ]
    },

    queen_palace: {
        title: "女王宫殿：最终对决",
        content: `你进入了宏伟的女王宫殿，周围是华丽的装饰和强大的能量波动。女王Carina坐在王座上，头戴神秘的皇冠，目光冷峻地注视着你：“外来者，你为何闯入我的领域？是来挑战我的力量，还是寻求星球的平衡？” 

你感受到皇冠散发的能量波动，知道这是决定星球命运的时刻。你可以选择与女王对话，尝试和平解决，或直接挑战她的力量。`,
        status: {
            location: "女王宫殿",
            health: "中度疲劳",
            resources: "基础装备"
        },
        choices: [
            {
                text: "与女王对话",
                description: "尝试与女王Carina对话，用你的线索和信物说服她合作，共同稳定星球。",
                nextNode: "queen_dialogue"
            },
            {
                text: "挑战女王",
                description: "直接挑战女王Carina，试图通过战斗夺取皇冠的力量。",
                risk: "极高风险，女王力量强大",
                nextNode: "queen_battle"
            }
        ]
    },

    queen_palace_injured: {
        title: "女王宫殿：艰难的对决",
        content: `你拖着重伤的身体进入了宏伟的女王宫殿，周围是华丽的装饰和强大的能量波动。女王Carina坐在王座上，头戴神秘的皇冠，目光冷峻地注视着你：“外来者，你为何闯入我的领域？是来挑战我的力量，还是寻求星球的平衡？” 

你感受到皇冠散发的能量波动，知道这是决定星球命运的时刻。但你的重伤状态让你在面对女王时处于极大劣势。你可以选择与女王对话，尝试和平解决，或直接挑战她的力量。`,
        status: {
            location: "女王宫殿",
            health: "重伤",
            resources: "基础装备，皇家装备"
        },
        choices: [
            {
                text: "与女王对话",
                description: "尝试与女王Carina对话，用你的线索和信物说服她合作，共同稳定星球。",
                nextNode: "queen_dialogue_injured"
            },
            {
                text: "挑战女王",
                description: "直接挑战女王Carina，试图通过战斗夺取皇冠的力量。",
                risk: "极高风险，女王力量强大且你已重伤",
                nextNode: "queen_battle_defeat"
            }
        ]
    },

    queen_dialogue: {
        title: "与女王对话：和平之路",
        content: `你向女王Carina展示了你收集到的历史线索和信物，阐述了星球能量失衡的危机，请求她的合作。女王沉默片刻，最终点头：“外来者，你的智慧和诚意打动了我。皇冠的力量需要平衡，而非独占。让我们一起稳定星球吧。” 

通过和平合作，你与女王共同稳定了星球的能量波动，带来了和平与繁荣。你完成了使命，获得了胜利结局。`,
        status: {
            location: "女王宫殿",
            health: "中度疲劳",
            resources: "基础装备，星球和平"
        },
        ending: true,
        endingType: "victory_peace"
    },

    queen_dialogue_injured: {
        title: "与女王对话：艰难的和平",
        content: `尽管你身受重伤，你仍向女王Carina展示了你收集到的历史线索和信物，阐述了星球能量失衡的危机，请求她的合作。女王沉默片刻，最终点头：“外来者，你的毅力和诚意打动了我。皇冠的力量需要平衡，而非独占。让我们一起稳定星球吧。” 

通过和平合作，你与女王共同稳定了星球的能量波动，带来了和平与繁荣。尽管伤势严重，你完成了使命，获得了胜利结局。`,
        status: {
            location: "女王宫殿",
            health: "重伤",
            resources: "基础装备，星球和平"
        },
        ending: true,
        endingType: "victory_peace_injured"
    },

    queen_battle: {
        title: "挑战女王：力量征服",
        content: `你选择挑战女王Carina，试图通过战斗夺取皇冠的力量。战斗异常激烈，女王的力量远超你的想象，但凭借你的资源和策略，你最终击败了她。

你获得了皇冠的力量，稳定了星球的能量波动，但也付出了巨大代价。你完成了使命，获得了胜利结局，但星球的未来可能因力量的转移而充满不确定性。`,
        status: {
            location: "女王宫殿",
            health: "重伤",
            resources: "基础装备，皇冠力量"
        },
        ending: true,
        endingType: "victory_power"
    },

    queen_battle_defeat: {
        title: "挑战女王：失败的代价",
        content: `你选择挑战女王Carina，但身受重伤的你无法匹敌她的力量。战斗中，你被女王的能量波动彻底击败。女王冷冷地看着你倒下：“外来者，你的鲁莽让你付出了代价。星球的命运不属于你。” 

你的使命失败了，星球的能量波动继续失衡，你的故事在这里终结。`,
        status: {
            location: "女王宫殿",
            health: "致命伤",
            resources: "无"
        },
        ending: true,
        endingType: "defeat"
    }
};

// Game state
let currentNode = 'start';

// DOM elements
const storyContentEl = document.getElementById('story-content');
const choicesContainerEl = document.getElementById('choices-container');
const currentLocationEl = document.getElementById('current-location');
const currentStatusEl = document.getElementById('current-status');
const currentResourcesEl = document.getElementById('current-resources');
const restartBtn = document.getElementById('restart-btn');
const dustStormEl = document.getElementById('dust-storm');
const undergroundGlowEl = document.getElementById('underground-glow');

// Initialize the game
function initGame() {
    renderStoryNode(STORY_DATA[currentNode]);
    restartBtn.addEventListener('click', restartGame);
}

// Render a story node
function renderStoryNode(node) {
    // Clear previous content
    storyContentEl.innerHTML = '';
    choicesContainerEl.innerHTML = '';
    
    // Render title and content
    const titleEl = document.createElement('h3');
    titleEl.className = 'text-2xl font-bold text-cyan-300 mb-4';
    titleEl.textContent = node.title;
    storyContentEl.appendChild(titleEl);
    
    const contentEl = document.createElement('p');
    contentEl.className = 'text-gray-300 leading-relaxed mb-6';
    contentEl.textContent = node.content;
    storyContentEl.appendChild(contentEl);
    
    // Update status
    currentLocationEl.textContent = node.status.location;
    currentStatusEl.textContent = node.status.health;
    currentStatusEl.className = node.status.health.includes('正常') ? 'text-green-400' : 
                                node.status.health.includes('轻微') ? 'text-yellow-400' : 
                                'text-red-400';
    currentResourcesEl.textContent = node.status.resources;
    
    // Render choices
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'w-full text-left bg-slate-700/50 hover:bg-slate-600/80 rounded-xl p-4 transition-colors border border-slate-600/50';
            choiceBtn.innerHTML = `
                <div class="flex items-center space-x-3">
                    <span class="text-white font-bold w-6 h-6 flex items-center justify-center bg-slate-600 rounded-full">${String.fromCharCode(65 + index)}</span>
                    <span class="text-white font-semibold">${choice.text}</span>
                </div>
                <p class="text-gray-400 text-sm mt-1">${choice.description}</p>
                ${choice.risk ? `<p class="text-red-400 text-xs mt-1">风险: ${choice.risk}</p>` : ''}
            `;
            choiceBtn.addEventListener('click', () => {
                currentNode = choice.nextNode;
                renderStoryNode(STORY_DATA[currentNode]);
            });
            choicesContainerEl.appendChild(choiceBtn);
        });
    }
    
    // Handle environmental effects
    if (node.environment) {
        if (node.environment.includes('dust-storm')) {
            dustStormEl.style.opacity = '1';
            undergroundGlowEl.style.opacity = '0';
        } else if (node.environment.includes('underground')) {
            dustStormEl.style.opacity = '0';
            undergroundGlowEl.style.opacity = '1';
        } else {
            dustStormEl.style.opacity = '0';
            undergroundGlowEl.style.opacity = '0';
        }
    } else {
        dustStormEl.style.opacity = '0';
        undergroundGlowEl.style.opacity = '0';
    }
    
    // Handle ending
    if (node.ending) {
        restartBtn.classList.remove('hidden');
        if (node.endingType.includes('victory')) {
            storyContentEl.innerHTML += `<p class="text-green-400 font-bold mt-4">胜利结局！你的使命已完成。</p>`;
        } else {
            storyContentEl.innerHTML += `<p class="text-red-400 font-bold mt-4">失败结局！你的使命失败了。</p>`;
        }
    } else {
        restartBtn.classList.add('hidden');
    }
}

// Restart the game
function restartGame() {
    currentNode = 'start';
    renderStoryNode(STORY_DATA[currentNode]);
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);
