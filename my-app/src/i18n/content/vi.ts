import type { SiteContent } from "../ui";

// Tiếng Việt — bản dịch đầy đủ từ nội dung gốc tiếng Anh (en.ts).
// Giữ nguyên cấu trúc khóa; chỉ dịch các giá trị văn bản.
export const vi: SiteContent = {
	meta: {
		indexTitle:
			"Cách tăng khả năng tập trung và sự chú ý — Trò chơi trí não miễn phí | attentivebrain",
		indexDescription:
			"Tìm hiểu cách tăng khả năng tập trung, sự chú ý và trí nhớ với một trò chơi trí não miễn phí. Xem các từ hiện ra, ghi nhớ trình tự, rồi nhớ lại — trò chơi tốt nhất để rèn luyện sự tập trung và cải thiện trí nhớ.",
		indexKeywords:
			"cách tăng khả năng tập trung, cách tăng sự chú ý, cách tăng khả năng tập trung và trí nhớ, trò chơi tốt nhất để tăng khả năng tập trung, cách cải thiện trí nhớ, trò chơi trí não, sự chú ý, rèn luyện tập trung, trò chơi trí nhớ, trò chơi tập trung",
		notFoundTitle: "Không tìm thấy trang (404) — attentivebrain",
		notFoundDescription:
			"Không tìm thấy trang bạn đang tìm. Hãy quay lại và rèn luyện sự tập trung của bạn.",
		errorTitle: "Đã xảy ra sự cố (500) — attentivebrain",
		errorDescription: "Đã xảy ra lỗi không mong muốn từ phía chúng tôi. Vui lòng thử lại sau giây lát.",
	},

	game: {
		eyebrow: "Trò chơi tập trung",
		titleLine1: "Ghi Nhớ Các Từ",
		titleLine2: "Đo Lường Sự Tập Trung",
		intro:
			"Một từ mới xuất hiện theo nhịp bạn chọn. Hãy giữ chúng theo đúng thứ tự trong đầu. Khi đồng hồ kết thúc,",
		introRecallTail: "hãy nhớ lại trình tự.",
		chooseDuration: "Chọn thời gian bạn muốn duy trì sự chú ý",
		presets: {
			s10: "10 giây",
			s20: "20 giây",
			s30: "30 giây",
			m1: "1 phút",
			m3: "3 phút",
			m5: "5 phút",
		},
		customTime: "Hoặc đặt thời gian tùy chỉnh",
		unitHours: "giờ",
		unitMin: "phút",
		unitSec: "giây",
		paceLabel: "Tần suất một từ mới xuất hiện",
		durationTooShort: "Thời gian ghi nhớ phải ít nhất {n} giây",
		durationTooLong: "Thời gian ghi nhớ không được vượt quá 12 giờ",
		paceOutOfRange: "Nhịp phải nằm trong khoảng từ 1 giây đến 3 phút",
		begin: "Bắt đầu",

		wordSingular: "từ",
		wordPlural: "từ",
		endEarly: "Kết thúc sớm & nhớ lại ngay",

		recallEyebrow: "Nhớ lại",
		recallHeading: "Chạm vào các từ theo thứ tự chúng đã xuất hiện.",
		leftToRecall: "còn {clock} để nhớ lại",
		chosenSoFar: "Trình tự đã chọn đến nay · {n} trên {m}",
		tapWordsYouSaw: "Chạm vào các từ bạn đã thấy",

		resultEyebrow: "Kết quả của bạn",
		attentionSpan: "Sự chú ý",
		attentionHint: "thời gian bạn duy trì sự tập trung",
		focus: "Tập trung",
		focusDetail: "{span} trên {total} {wordUnit} đúng thứ tự",
		theSequence: "Trình tự",
		playAgain: "Chơi lại",
		changeDuration: "Đổi thời lượng",
		youTapped: 'Bạn đã chạm "{word}"',
	},

	errors: {
		notFoundEyebrow: "Lỗi 404",
		notFoundHeading: "Trang này đã lạc mất.",
		notFoundLead:
			"Liên kết bị hỏng hoặc trang đã được chuyển đi. Điều đó xảy ra với cả những người giỏi nhất — ngay cả khi tập trung hoàn hảo.",
		backToGame: "Quay lại trò chơi",
		errorEyebrow: "Lỗi 500",
		errorHeading: "Có gì đó hỏng từ phía chúng tôi.",
		errorLead:
			"Lần này là lỗi của chúng tôi, không phải của bạn. Trang đã gặp một lỗi không mong muốn — hãy chờ một chút rồi thử lại.",
		tryAgain: "Thử lại",
	},

	header: {
		account: "Tài khoản",
		leaderboard: "Bảng xếp hạng",
		language: "Ngôn ngữ",
		toggleTheme: "Chuyển chế độ tối",
		editName: "Chỉnh sửa tên",
		displayName: "Tên hiển thị",
		save: "Lưu",
		bestScore: "Điểm cao nhất",
		loginToTrack: "Đăng nhập để theo dõi thành tích tốt nhất của bạn.",
		changePhoto: "Đổi ảnh",
		uploading: "Đang tải lên…",
		login: "Đăng nhập",
		logout: "Đăng xuất",
		anonymous: "Ẩn danh",
		worldRanking: "Xếp hạng thế giới",
		rankedBy: "Theo số từ nhớ tối đa, sự chú ý, thời gian nhớ lại",
		loading: "Đang tải…",
		noScores: "Chưa có điểm nào. Hãy là người đầu tiên.",
		players: "{n} người chơi",
		showMore: "Xem thêm",
		loginToCompete: "Đăng nhập để thi đấu",
		finishToClaim: "Hoàn thành một vòng để giành vị trí của bạn.",
		yourRank: "Bạn đứng thứ {rank} trên {total}.",
		yourRankMetrics: "Bạn đứng thứ {rank} trên {total} · {metrics}",
		yourWorldRanking: "Xếp hạng thế giới của bạn",
		boardNotSetUp: "Bảng xếp hạng chưa được thiết lập.",
		wordsUnit: "từ",
	},

	footer: {
		home: "Trang chủ",
		about: "Về chúng tôi",
		contact: "Liên hệ",
		privacy: "Chính sách bảo mật",
		terms: "Điều khoản & điều kiện",
		tagline: "attentivebrain.com — rèn luyện sự chú ý của bạn, từng trình tự một.",
		rights: "© {year} attentivebrain. Bảo lưu mọi quyền.",
	},

	landing: {
		heading: "Cách tăng khả năng tập trung và sự chú ý",
		intro:
			"attentivebrain là một trò chơi trí não miễn phí được tạo ra để trả lời một trong những câu hỏi phổ biến nhất mà mọi người đặt ra ngày nay: <strong>cách tăng khả năng tập trung</strong> trong một thế giới được thiết kế để gây xao nhãng. Thay vì lại thêm một bài viết đầy lời khuyên, nó mang đến cho bạn một cách đo lường được để rèn luyện và theo dõi sự tập trung — mỗi lần một phiên ngắn.",
		sections: [
			{
				h: "Trò chơi tốt nhất để tăng khả năng tập trung",
				body: "Luật chơi rất đơn giản, và đó chính là lý do nó hiệu quả. Một từ thường ngày mới xuất hiện theo nhịp bạn chọn. Nhiệm vụ duy nhất của bạn là giữ trình tự trong đầu, theo đúng thứ tự, cho đến khi đồng hồ kết thúc. Sau đó bạn nhớ lại. Vòng lặp duy nhất đó — xem, ghi nhớ, nhớ lại — là một bài tập chú ý có chủ đích, và hóa ra nó là <strong>trò chơi tốt nhất để tăng khả năng tập trung</strong> chính vì nó loại bỏ tất cả những thứ khác. Không có mánh tính điểm, không có phần thưởng nhấp nháy, không có gì kéo sự chú ý của bạn ra khỏi nhiệm vụ. Chỉ có bạn và các từ. Hầu hết mọi người đều ngạc nhiên trước việc tâm trí mình muốn lang thang nhanh đến thế nào, và nó trở nên vững vàng hơn nhiều ra sao khi luyện tập.",
			},
			{
				h: "Cách tăng khả năng tập trung và sự chú ý",
				body: "Sự chú ý có thể rèn luyện được. Giống như một cơ bắp, <strong>sự chú ý</strong> của bạn đáp lại nỗ lực có chủ đích, lặp đi lặp lại — và nó teo lại khi không bao giờ được thử thách. attentivebrain cho phép bạn bắt đầu với khoảng ghi nhớ mười giây và dần kéo dài đến vài phút hoặc thậm chí vài giờ khi bạn tiến bộ. Bằng cách tăng thời lượng từng chút một, bạn đang luyện tập chính xác <strong>cách tăng khả năng tập trung và sự chú ý</strong> theo một cách cụ thể và trung thực: đồng hồ không nói dối. Trò chơi báo cáo sự chú ý thực sự của bạn dưới dạng khoảng thời gian bạn thật sự duy trì sự tập trung, nên tiến bộ là điều bạn có thể thấy chứ không phải đoán mò.",
			},
			{
				h: "Cách tăng khả năng tập trung và trí nhớ cùng lúc",
				body: "Sự tập trung và trí nhớ là hai mặt của cùng một đồng xu — bạn không thể nhớ điều mà bạn chưa từng thật sự chú ý tới. Vì trò chơi yêu cầu bạn nhớ lại trình tự theo đúng thứ tự, nó rèn luyện trí nhớ làm việc và sự tập trung trong cùng một hơi thở. Nếu bạn đã tìm kiếm <strong>cách tăng khả năng tập trung và trí nhớ</strong> mà không cần thẻ ghi nhớ khô khan hay gói đăng ký, thì đây là một lựa chọn thực sự thú vị. Mỗi vòng là một bài kiểm tra nhỏ, độc lập về <strong>cách cải thiện trí nhớ</strong> dưới một chút áp lực thời gian, đó là kiểu luyện tập chuyển hóa được vào các việc thường ngày như đọc, học và duy trì một cuộc trò chuyện mà không mất mạch.",
			},
			{
				h: "Một trò chơi trí não không thừa thãi",
				body: "Rất nhiều ứng dụng hứa hẹn một phiên bản thông minh hơn của bạn. attentivebrain là một <strong>trò chơi trí não</strong> tối giản có chủ đích: nó chạy miễn phí trên trình duyệt của bạn, không cần tải về và tôn trọng thời gian của bạn. Chọn thời gian bạn muốn tập trung và tần suất một từ mới xuất hiện, rồi bắt đầu. Khi đồng hồ kết thúc, hãy dựng lại trình tự từ một danh sách sạch sẽ, sắp xếp theo bảng chữ cái để thử thách vẫn nằm ở trí nhớ và thứ tự — chứ không phải ở việc đi tìm một từ. Bạn nhận được hai chỉ số rõ ràng: sự chú ý của bạn (bạn duy trì tập trung được bao lâu) và điểm tập trung của bạn (phần trăm trình tự bạn dựng lại đúng).",
			},
			{
				h: "Xây dựng thói quen",
				body: "Câu trả lời trung thực cho <strong>cách tăng khả năng tập trung</strong> là sự đều đặn. Vài phút có chủ đích mỗi ngày hơn hẳn một buổi marathon thỉnh thoảng. Hãy chơi một vòng nhanh giữa các công việc, đẩy thời lượng xa thêm một chút mỗi tuần, và xem các con số của bạn leo lên bảng xếp hạng. Dù bạn là một học sinh đang ôn thi, một người đi làm đang vật lộn với hộp thư ồn ào, hay đơn giản là người muốn một đầu óc sắc bén hơn, đây là một nghi thức nhỏ mỗi ngày mang lại hiệu quả. Hãy bắt đầu vòng đầu tiên ở phía trên — chỉ mất mười giây để biết sự chú ý của bạn đang ở đâu hôm nay.",
			},
		],
		faqHeading: "Câu hỏi thường gặp",
		faqs: [
			{
				q: "Làm thế nào để tôi tăng khả năng tập trung?",
				a: "<p>Cách đáng tin cậy nhất để <strong>tăng khả năng tập trung</strong> là luyện tập ngắn, có chủ đích, lặp lại thường xuyên. attentivebrain cho bạn một nhiệm vụ duy nhất — xem một trình tự các từ hiện ra, giữ chúng theo đúng thứ tự, và nhớ lại khi đồng hồ kết thúc. Vài phút mỗi ngày rèn luyện sự chú ý của bạn nhiều hơn hẳn việc đọc thêm một danh sách lời khuyên.</p>",
			},
			{
				q: "Làm sao để tôi tăng khả năng tập trung và sự chú ý?",
				a: "<p>Hãy coi <strong>sự chú ý</strong> của bạn như một cơ bắp và thử thách nó nhiều hơn một chút sau mỗi phiên. Bắt đầu với khoảng ghi nhớ mười giây và dần kéo dài đến vài phút khi bạn tiến bộ. Vì trò chơi báo cáo chính xác khoảng thời gian bạn thật sự tập trung, bạn có thể thấy sự chú ý của mình lớn lên thay vì phải đoán.</p>",
			},
			{
				q: "Một trò chơi có thể giúp tăng khả năng tập trung và trí nhớ không?",
				a: "<p>Có. <strong>Sự tập trung và trí nhớ</strong> gắn liền với nhau — bạn không thể nhớ điều mà bạn chưa từng thật sự chú ý tới. Mỗi vòng yêu cầu bạn nhớ lại một trình tự từ theo đúng thứ tự, điều này rèn luyện trí nhớ làm việc và sự tập trung trong cùng một bài tập, không cần thẻ ghi nhớ hay gói đăng ký.</p>",
			},
			{
				q: "Trò chơi nào tốt nhất để tăng khả năng tập trung?",
				a: "<p><strong>Trò chơi tốt nhất để tăng khả năng tập trung</strong> là trò loại bỏ mọi xao nhãng. attentivebrain không có mánh tính điểm, không có phần thưởng nhấp nháy, và không có gì tranh giành sự chú ý của bạn — chỉ có bạn, các từ và đồng hồ. Sự đơn giản có chủ đích đó chính là điều khiến nó hiệu quả.</p>",
			},
			{
				q: "Làm thế nào để tôi cải thiện trí nhớ?",
				a: "<p>Hãy luyện nhớ lại thông tin dưới một chút áp lực thời gian. Dựng lại trình tự từ một danh sách sạch sẽ, sắp xếp theo bảng chữ cái giữ cho thử thách nằm ở trí nhớ và thứ tự thay vì đi tìm một từ — đó là kiểu luyện tập chuyển hóa được vào việc học, đọc và những cuộc trò chuyện thường ngày. Đó là cách đơn giản nhất để <strong>cải thiện trí nhớ</strong> mà không cần những bài tập khô khan.</p>",
			},
			{
				q: "attentivebrain có phải là một trò chơi trí não tốt không?",
				a: "<p>attentivebrain là một <strong>trò chơi trí não</strong> tối giản có chủ đích, chạy miễn phí trên trình duyệt của bạn mà không cần tải về. Bạn chọn thời lượng phiên và nhịp xuất hiện của từ, rồi nhận hai chỉ số trung thực: sự chú ý của bạn (bạn duy trì tập trung được bao lâu) và điểm tập trung của bạn (bạn dựng lại đúng được bao nhiêu phần của trình tự).</p>",
			},
		],
	},
};
