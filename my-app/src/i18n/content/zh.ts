import type { SiteContent } from "../ui";

// 简体中文 — 对英文规范内容（en.ts）的完整翻译。
// 保持完全相同的键结构；仅翻译文本值。
export const zh: SiteContent = {
	meta: {
		indexTitle:
			"如何提升专注力与注意力时长 — 免费大脑训练游戏 | attentivebrain",
		indexDescription:
			"通过一款免费的大脑训练游戏，学习如何提升专注力、注意力时长和记忆力。看着单词依次出现，记住整个序列，然后回忆出来 — 训练专注、改善记忆的最佳游戏。",
		indexKeywords:
			"如何提升专注力, 如何提升专注力和注意力时长, 如何提升专注力和记忆力, 提升专注力的最佳游戏, 如何改善记忆力, 大脑训练游戏, 注意力时长, 专注力训练, 记忆游戏, 注意力游戏",
		notFoundTitle: "页面未找到（404）— attentivebrain",
		notFoundDescription:
			"找不到你要访问的页面。返回首页，去训练你的专注力吧。",
		errorTitle: "出错了（500）— attentivebrain",
		errorDescription: "我们这边发生了意外错误。请稍后再试一次。",
	},

	game: {
		eyebrow: "专注力游戏",
		titleLine1: "记住这些单词",
		titleLine2: "测量你的专注力",
		intro:
			"新单词会按你选择的节奏出现。在脑海中按顺序记住它们。当计时结束时，",
		introRecallTail: "回忆出整个序列。",
		chooseDuration: "选择你要保持专注的时长",
		presets: {
			s10: "10 秒",
			s20: "20 秒",
			s30: "30 秒",
			m1: "1 分钟",
			m3: "3 分钟",
			m5: "5 分钟",
		},
		customTime: "或设置自定义时长",
		unitHours: "小时",
		unitMin: "分钟",
		unitSec: "秒",
		paceLabel: "新单词出现的频率",
		durationTooShort: "保持时长至少为 {n} 秒",
		durationTooLong: "保持时长不能超过 12 小时",
		paceOutOfRange: "节奏必须介于 1 秒和 3 分钟之间",
		begin: "开始",

		wordSingular: "个单词",
		wordPlural: "个单词",
		endEarly: "提前结束并立即回忆",

		recallEyebrow: "回忆",
		recallHeading: "按单词出现的顺序点击它们。",
		leftToRecall: "还剩 {clock} 用于回忆",
		chosenSoFar: "目前已选序列 · {m} 个中的第 {n} 个",
		tapWordsYouSaw: "点击你看到的单词",

		resultEyebrow: "你的结果",
		attentionSpan: "注意力时长",
		attentionHint: "你保持专注的时间",
		focus: "专注度",
		focusDetail: "{total} {wordUnit}中有 {span} 个顺序正确",
		theSequence: "完整序列",
		playAgain: "再玩一次",
		changeDuration: "更改时长",
		youTapped: "你点击了“{word}”",
	},

	errors: {
		notFoundEyebrow: "错误 404",
		notFoundHeading: "这个页面走丢了。",
		notFoundLead:
			"链接已失效，或页面已被移动。这种事谁都会遇到 — 即使专注力再好也一样。",
		backToGame: "返回游戏",
		errorEyebrow: "错误 500",
		errorHeading: "我们这边出了点问题。",
		errorLead:
			"这次是我们的问题，不是你的。页面遇到了意外错误 — 请稍候片刻再试一次。",
		tryAgain: "重试",
	},

	header: {
		account: "账户",
		leaderboard: "排行榜",
		language: "语言",
		toggleTheme: "切换深色主题",
		editName: "编辑名称",
		displayName: "显示名称",
		save: "保存",
		bestScore: "最佳成绩",
		loginToTrack: "登录以记录你的最佳成绩。",
		changePhoto: "更换头像",
		uploading: "上传中…",
		login: "登录",
		logout: "退出登录",
		anonymous: "匿名",
		worldRanking: "世界排名",
		rankedBy: "按最多回忆单词数、注意力时长、回忆用时排名",
		loading: "加载中…",
		noScores: "暂无成绩。来抢第一名吧。",
		players: "{n} 名玩家",
		showMore: "显示更多",
		loginToCompete: "登录以参与竞争",
		finishToClaim: "完成一轮即可抢占你的名次。",
		yourRank: "你排在第 {rank} 名，共 {total} 名。",
		yourRankMetrics: "你排在第 {rank} 名，共 {total} 名 · {metrics}",
		yourWorldRanking: "你的世界排名",
		boardNotSetUp: "排行榜尚未设置。",
		wordsUnit: "词",
	},

	footer: {
		home: "首页",
		about: "关于我们",
		contact: "联系我们",
		privacy: "隐私政策",
		terms: "条款与条件",
		tagline: "attentivebrain.com — 训练你的注意力时长，一次一个序列。",
		rights: "© {year} attentivebrain。保留所有权利。",
	},

	landing: {
		heading: "如何提升专注力与注意力时长",
		intro:
			"attentivebrain 是一款免费的大脑训练游戏，旨在回答当今人们最常提出的问题之一：在一个为分心而设计的世界里，<strong>如何提升专注力</strong>。它不是又一篇满是建议的文章，而是给你一种可量化的方式来训练并追踪你的专注力 — 每次只需一段短短的练习。",
		sections: [
			{
				h: "提升专注力的最佳游戏",
				body: "规则很简单，而这正是它有效的原因。一个新的日常单词会按你选择的节奏出现。你唯一的任务，就是在脑海中按顺序记住整个序列，直到计时结束。然后回忆出来。这个单一的循环 — 观看、记住、回忆 — 是一项专注力训练，而它之所以成为<strong>提升专注力的最佳游戏</strong>，恰恰是因为它排除了其他一切。没有花哨的计分把戏，没有闪烁的奖励，没有任何东西把你的注意力从任务上夺走。只有你和这些单词。大多数人都惊讶于自己的思绪多快就想要游走，又惊讶于练习后它能变得多么稳定。",
			},
			{
				h: "如何提升专注力和注意力时长",
				body: "注意力是可以训练的。就像肌肉一样，你的<strong>注意力时长</strong>会对有意识、反复的努力做出回应 — 而当它从未受到挑战时便会萎缩。attentivebrain 让你从十秒的保持开始，随着进步逐渐延长到几分钟甚至几小时。通过一点一点地增加时长，你正是在以一种具体而诚实的方式练习<strong>如何提升专注力和注意力时长</strong>：计时器不会说谎。游戏将你真实的注意力时长报告为你实际保持专注的那段时间，因此进步是你看得见的，而不是凭空猜测的。",
			},
			{
				h: "如何同时提升专注力和记忆力",
				body: "专注力和记忆力是同一枚硬币的两面 — 你无法记住自己从未真正留意过的东西。由于游戏要求你按正确的顺序回忆序列，它在同一口气里同时训练工作记忆和专注力。如果你一直在寻找<strong>如何提升专注力和记忆力</strong>，又不想用枯燥的记忆卡片或付费订阅，那么这是一个真正令人愉快的替代选择。每一轮都是在轻微时间压力下对<strong>如何改善记忆力</strong>的一次小而独立的考验，而这种练习正是能够迁移到阅读、学习以及在交谈中不丢失思路等日常任务中的那一类。",
			},
			{
				h: "一款毫无废料的大脑训练游戏",
				body: "许多应用都承诺让你变得更聪明。attentivebrain 是一款刻意保持极简的<strong>大脑训练游戏</strong>：它在你的浏览器中免费运行，无需下载，并尊重你的时间。选择你想专注多久、以及新单词多久出现一次，然后开始。当计时结束时，从一份干净、按字母顺序排列的列表中重建序列，让挑战始终落在记忆和顺序上 — 而不是落在四处搜寻某个单词上。你会得到两个清晰的指标：你的注意力时长（你保持专注了多久）和你的专注度得分（你正确重建序列的百分比）。",
			},
			{
				h: "养成习惯",
				body: "关于<strong>如何提升专注力</strong>，诚实的答案是坚持。每天几分钟用心的练习胜过偶尔一次的马拉松式训练。在任务之间玩上一轮，每周把你的时长再推进一点，看着你的数字在排行榜上攀升。无论你是备考的学生、与嘈杂收件箱搏斗的职场人士，还是只是想让头脑更敏锐的人，这都是一个会有回报的小小每日仪式。在上方开始你的第一轮吧 — 只需十秒，就能知道你今天的<strong>注意力时长</strong>处于什么水平。",
			},
		],
		faqHeading: "常见问题",
		faqs: [
			{
				q: "我该如何提升专注力？",
				a: "<p>最可靠的<strong>提升专注力</strong>方式，是短暂、有意识且经常重复的练习。attentivebrain 只给你一个任务 — 看着一连串单词出现，按顺序记住它们，并在计时结束时回忆出来。每天几分钟对注意力的训练，远胜于再读一份建议清单。</p>",
			},
			{
				q: "我该如何提升专注力和注意力时长？",
				a: "<p>把你的<strong>注意力时长</strong>当作肌肉来对待，每次练习都多挑战它一点。从十秒的保持开始，随着进步逐渐延长到几分钟。由于游戏会报告你实际专注的确切时长，你可以看着自己的注意力时长不断增长，而不是凭空猜测。</p>",
			},
			{
				q: "游戏能帮助提升专注力和记忆力吗？",
				a: "<p>可以。<strong>专注力和记忆力</strong>是相互关联的 — 你无法记住自己从未真正留意过的东西。每一轮都要求你按正确顺序回忆一组单词序列，从而在同一项练习中同时训练工作记忆和专注力，无需记忆卡片，也无需付费订阅。</p>",
			},
			{
				q: "提升专注力的最佳游戏是什么？",
				a: "<p><strong>提升专注力的最佳游戏</strong>，就是那个排除一切干扰的游戏。attentivebrain 没有计分把戏，没有闪烁的奖励，也没有任何东西争夺你的注意力 — 只有你、单词和计时器。正是这种刻意的极简，让它真正有效。</p>",
			},
			{
				q: "我该如何改善我的记忆力？",
				a: "<p>练习在轻微时间压力下回忆信息。从一份干净、按字母顺序排列的列表中重建序列，让挑战落在记忆和顺序上，而不是搜寻某个单词 — 这正是能够迁移到学习、阅读和日常交谈中的那种练习。这就是不靠枯燥操练来<strong>改善记忆力</strong>的最简单方式。</p>",
			},
			{
				q: "attentivebrain 是一款好的大脑训练游戏吗？",
				a: "<p>attentivebrain 是一款刻意保持极简的<strong>大脑训练游戏</strong>，在你的浏览器中免费运行，无需下载。你可以选择练习时长和单词节奏，然后获得两个诚实的指标：你的注意力时长（你保持专注了多久）和你的专注度得分（你正确重建了多少序列）。</p>",
			},
		],
	},
};
