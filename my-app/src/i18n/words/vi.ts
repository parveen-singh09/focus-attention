// Bộ từ thông dụng hàng ngày. Bản dịch của bộ từ tiếng Anh trong
// src/scripts/words.ts — cùng thứ tự và cùng danh mục. 1000 từ.
export const WORDS: readonly string[] = [
  // people & family
  "em bé", "đứa trẻ", "trẻ con", "cậu bé", "cô bé", "đàn ông", "phụ nữ", "mẹ", "cha", "chị gái",
  "anh trai", "chú", "dì", "anh em họ", "bạn bè", "hàng xóm", "giáo viên", "bác sĩ", "y tá", "tài xế",
  "nông dân", "đầu bếp", "thợ làm bánh", "phi công", "ca sĩ", "nghệ sĩ", "nhà văn", "cầu thủ", "công nhân", "học sinh",

  // body
  "đầu", "tóc", "khuôn mặt", "mắt", "tai", "mũi", "miệng", "môi", "răng", "lưỡi",
  "cổ", "vai", "cánh tay", "khuỷu tay", "bàn tay", "ngón tay", "ngón cái", "móng tay", "ngực", "lưng",
  "bụng", "chân", "đầu gối", "bàn chân", "ngón chân", "tim", "não", "xương", "da", "máu",

  // food & drink
  "táo", "chuối", "cam", "nho", "chanh", "anh đào", "đào", "dưa lưới", "quả mọng", "xoài",
  "bánh mì", "bơ", "phô mai", "trứng", "sữa", "gạo", "mì ống", "súp", "salad", "pizza",
  "bánh kẹp thịt", "bánh mì kẹp", "bánh ngọt", "bánh quy", "kẹo", "đường", "muối", "tiêu", "mật ong", "mứt",
  "thịt", "thịt gà", "cá", "thịt xông khói", "thịt bò", "khoai tây", "cà chua", "hành", "cà rốt", "đậu",
  "ngô", "đậu hà lan", "tỏi", "rau diếp", "dưa chuột", "nấm", "hạt", "hạt giống", "ô liu", "gia vị",
  "cà phê", "trà", "nước ép", "nước", "nước ngọt", "rượu vang", "bia", "kem", "sữa chua", "mì sợi",

  // animals
  "chó", "mèo", "chim", "ngựa", "bò", "lợn", "cừu", "dê", "vịt", "gà mái",
  "gà con", "thỏ", "chuột nhắt", "chuột cống", "cáo", "sói", "gấu", "sư tử", "hổ", "hươu",
  "khỉ", "voi", "hươu cao cổ", "ngựa vằn", "rắn", "ếch", "rùa", "thằn lằn", "nhện", "kiến",
  "ong", "ruồi", "bướm đêm", "sâu", "ốc sên", "cua", "cá mập", "cá voi", "cá heo", "cú",
  "đại bàng", "quạ", "bồ câu", "vẹt", "chim cánh cụt", "kangaroo", "lạc đà", "lừa", "sóc", "hà mã",

  // home & furniture
  "ngôi nhà", "phòng", "cửa", "cửa sổ", "tường", "sàn nhà", "mái nhà", "cầu thang", "nhà bếp", "phòng ngủ",
  "phòng tắm", "nhà để xe", "khu vườn", "sân", "hàng rào", "cổng", "bàn", "ghế", "ghế sofa", "giường",
  "gối", "chăn", "đèn", "đồng hồ", "gương", "kệ", "ngăn kéo", "tủ quần áo", "thảm", "rèm cửa",
  "bàn làm việc", "ghế dài", "ghế đẩu", "đi văng", "tủ", "xô", "giỏ", "hộp", "túi", "lọ",

  // kitchen & dishes
  "đĩa", "bát", "tách", "ly", "thìa", "nĩa", "dao", "nồi", "chảo", "ấm đun",
  "lò nướng", "bếp", "tủ lạnh", "bồn rửa", "khăn", "khăn ăn", "chai", "lon", "khay", "nắp",

  // clothing
  "áo sơ mi", "quần dài", "váy đầm", "váy", "áo khoác dài", "áo khoác", "áo len", "mũ", "mũ lưỡi trai", "khăn quàng",
  "găng tay", "tất", "giày", "ủng", "thắt lưng", "cà vạt", "nút áo", "túi áo", "khóa kéo", "quần đùi",
  "quần jean", "bộ vest", "áo choàng", "tạp dề", "nhẫn", "đồng hồ đeo tay", "kính mắt", "ví cầm tay", "ví tiền", "ô dù",

  // nature & weather
  "mặt trời", "mặt trăng", "ngôi sao", "bầu trời", "đám mây", "mưa", "tuyết", "gió", "bão", "sương mù",
  "băng", "lửa", "khói", "cây", "lá", "cành cây", "rễ", "hoa", "cỏ", "bụi cây",
  "hoa hồng", "cánh hoa", "rừng", "cánh đồng", "đồi", "núi", "thung lũng", "sông", "hồ", "đại dương",
  "biển", "bãi biển", "cát", "tảng đá", "đá", "bùn", "đất", "hang động", "đảo", "sa mạc",
  "cầu vồng", "sấm", "bóng", "buổi sáng", "ban đêm", "ban ngày", "mùa", "mùa hè", "mùa đông", "mùa thu",

  // school & office
  "sách", "trang", "giấy", "bút mực", "bút chì", "cục tẩy", "thước kẻ", "bút lông", "bút sáp", "vở",
  "lá thư", "từ", "con số", "câu chuyện", "bản đồ", "biểu đồ", "thẻ", "tem", "phong bì", "thư mục",
  "kéo", "keo dán", "băng dính", "kẹp giấy", "dập ghim", "bảng", "phấn", "màn hình", "bàn phím", "lịch",

  // tools & objects
  "búa", "đinh vít", "cưa", "khoan", "cờ lê", "thang", "dây thừng", "xích", "dây kim loại", "cọ",
  "chổi", "cây lau nhà", "xà phòng", "bọt biển", "lược", "dao cạo", "kim", "chỉ", "chìa khóa", "ổ khóa",
  "pin", "bánh xe", "động cơ", "máy bơm", "nam châm", "lò xo", "công tắc", "phích cắm", "ống", "móc",

  // transport
  "ô tô", "xe buýt", "xe tải", "tàu hỏa", "máy bay", "thuyền", "tàu thủy", "xe đạp", "xe tay ga", "taxi",
  "xe ngựa", "xe đẩy", "tàu điện ngầm", "máy kéo", "tên lửa", "trực thăng", "thuyền buồm", "ca nô", "phà", "xe van",

  // places
  "trường học", "cửa hàng", "tiệm", "chợ", "ngân hàng", "văn phòng", "bệnh viện", "thư viện", "bảo tàng", "công viên",
  "nhà thờ", "khách sạn", "nhà hàng", "nhà máy", "trang trại", "nhà ga", "sân bay", "cây cầu", "đường lớn", "phố",
  "thành phố", "thị trấn", "ngôi làng", "đất nước", "cung điện", "lâu đài", "sở thú", "bến cảng", "rạp hát", "sân vận động",

  // toys & play
  "quả bóng", "đồ chơi", "búp bê", "diều", "câu đố ghép", "trò chơi", "khối gỗ", "trống", "bóng bay", "viên bi",
  "xích đu", "cầu trượt", "rô bốt", "con rối", "còi", "yoyo", "xúc xắc", "con quay", "nhảy", "cuộc đua",

  // music & art
  "âm nhạc", "bài hát", "ghi ta", "đàn piano", "vĩ cầm", "sáo", "kèn trumpet", "chuông", "kèn sừng", "đàn hạc",
  "sơn vẽ", "màu sắc", "bức tranh", "ảnh chụp", "khung", "phim", "điệu nhảy", "sân khấu", "rạp xiếc", "chú hề",

  // misc everyday
  "tiền", "đồng xu", "đô la", "giá cả", "quà tặng", "nến", "que diêm", "lá cờ", "vé", "điện thoại",
  "máy ảnh", "đài radio", "đuốc", "đèn lồng", "la bàn", "mỏ neo", "ruy băng", "bong bóng", "lông vũ", "viên sỏi",
  "vỏ sò", "san hô", "vương miện", "kim cương", "kho báu", "huy chương", "cúp", "lều", "lửa trại", "xe trượt tuyết",
  "giày trượt", "mũ bảo hiểm", "ống hút", "bưu thiếp", "báo", "tạp chí", "móc khóa", "bàn chải đánh răng", "cốc", "thìa lớn",

  // more food
  "bánh mì nướng", "bánh quế", "bánh kếp", "bánh nướng nhỏ", "bánh vòng", "bánh quy xoắn", "bỏng ngô", "khoai chiên", "siro", "thạch",
  "đậu phộng", "nho khô", "mơ", "mận", "lê", "kiwi", "chanh xanh", "dừa", "dứa", "dâu tây",
  "việt quất", "bí ngô", "bắp cải", "cần tây", "rau bina", "củ cải", "dưa muối", "gừng", "bạc hà", "húng quế",
  "bột mì", "bột nhào", "nước sốt thịt", "nước sốt", "tương cà", "mù tạt", "giấm", "dầu ăn", "men", "yến mạch",

  // drinks
  "ca cao", "nước chanh", "sinh tố", "đồ uống lắc", "rượu pha", "rượu táo", "rượu whisky", "rượu brandy", "sâm panh", "sữa lắc",

  // actions
  "chạy", "đi bộ", "nhảy lò cò", "nhảy cách quãng", "bò", "leo trèo", "bơi", "lặn", "hét", "thì thầm",
  "cười", "mỉm cười", "ngủ", "thức dậy", "mơ", "ngồi", "đứng", "quỳ", "cúi", "vươn vai",
  "ném", "bắt", "đá", "vỗ tay", "vẫy tay", "chỉ trỏ", "giữ", "rót", "khuấy", "thái lát",
  "băm", "gọt vỏ", "nấu ăn", "chiên", "luộc", "rửa", "lau", "quét", "chà", "tráng",
  "gấp", "may", "đan", "đếm", "đánh vần", "xây dựng", "sửa chữa", "gõ cửa", "đổ đầy", "trồng",
  "đào", "cho ăn", "cưỡi", "chèo", "xoay", "lăn", "nảy", "tan chảy", "đóng băng", "tỏa sáng",
  "chớp mắt", "nhìn chằm chằm", "lắng nghe", "ngửi", "nếm", "chạm", "học", "dạy", "chia sẻ", "mua",
  "bán", "tiết kiệm", "giấu", "đuổi theo", "đi theo", "dẫn dắt", "chào hỏi", "ôm", "nháy mắt",

  // colors
  "đỏ", "xanh dương", "xanh lá", "vàng", "tím", "hồng", "vàng kim", "bạc",

  // weather
  "gió nhẹ", "sương giá", "mưa đá", "sương mỏng", "sương", "ánh nắng", "tia sét", "mưa phùn", "vũng nước", "cột băng",
  "bình minh", "hoàng hôn", "đường chân trời", "sao chổi", "hành tinh", "thiên thạch", "thiên hà", "nhật thực", "thủy triều", "ánh trăng",

  // time
  "giây", "phút", "giờ", "tuần", "tháng", "năm", "hôm nay", "ngày mai", "buổi trưa", "nửa đêm",
  "rạng đông", "chạng vạng", "cuối tuần", "ngày lễ", "sinh nhật",

  // jobs
  "luật sư", "thẩm phán", "người lính", "thủy thủ", "thuyền trưởng", "thị trưởng", "thư ký", "thu ngân", "phục vụ bàn", "lao công",
  "thợ sửa ống nước", "thợ xây", "thợ sơn", "thợ cắt tóc", "thợ may", "người bán thịt", "thợ săn", "thợ mỏ", "lính gác", "nhà khoa học",
  "kỹ sư", "diễn viên", "nhà thơ", "tác giả", "phóng viên", "chủ ngân hàng", "người làm vườn", "thợ máy", "thợ mộc", "người giúp việc",

  // sports
  "bóng đá", "quần vợt", "gôn", "khúc côn cầu", "bóng chày", "cricket", "bóng bầu dục", "quyền anh", "trượt tuyết", "lướt sóng",
  "bowling", "phi tiêu", "cờ vua", "vợt", "bàn thắng", "áo đấu", "đường chạy", "sân đấu", "sân băng", "đội",

  // school
  "lớp học", "bài học", "bài tập về nhà", "bài kiểm tra", "kỳ thi", "điểm số", "môn học", "toán học", "khoa học", "lịch sử",
  "tủ khóa", "ba lô", "sách giáo khoa", "quả địa cầu", "máy tính cầm tay", "bảng đen", "giờ ra chơi", "bằng tốt nghiệp", "bài giảng", "câu hỏi nhanh",

  // places
  "rừng rậm", "đồng cỏ", "thảo nguyên", "hẻm núi", "vách đá", "đường hầm", "tháp", "nhà tranh", "lán", "nhà kho",
  "chuồng ngựa", "cối xay", "ngọn hải đăng", "bến tàu", "cầu tàu", "cảng", "trung tâm thương mại", "tiệm bánh", "hiệu thuốc", "quán cà phê",
  "quán ăn", "rạp chiếu phim", "phòng trưng bày", "đấu trường", "đền thờ", "nhà tù", "tòa án", "đại sứ quán", "nghĩa trang", "sân chơi",

  // body more
  "trán", "má", "cằm", "hàm", "lông mày", "lông mi", "cổ tay", "mắt cá chân", "gót chân", "lòng bàn tay",
  "cột sống", "xương sườn", "phổi", "gan", "thận", "cơ bắp", "dây thần kinh", "tĩnh mạch", "cổ họng", "hông",

  // household
  "máy hút bụi", "khăn lau bụi", "đồ hốt rác", "móc treo", "đồ giặt", "bột giặt", "thuốc tẩy", "tấm thảm chùi", "thảm trải", "rèm sáo",
  "đệm ghế", "chăn bông", "nệm", "tủ áo lớn", "tủ ngăn kéo", "bàn đầu giường", "kệ sách", "lò sưởi", "ống khói", "tay nắm cửa",
  "chuông cửa", "lỗ khóa", "vòi nước", "ống thoát", "ổ cắm", "bộ điều nhiệt", "máy sưởi", "quạt", "bình hoa", "áp phích",

  // tech
  "máy tính xách tay", "máy tính bảng", "màn hình", "máy in", "máy quét", "loa", "tai nghe", "bộ sạc", "dây cáp", "bộ định tuyến",
  "modem", "điều khiển từ xa", "tay cầm chơi game", "cần điều khiển", "webcam", "micrô", "tai nghe nhét tai", "máy chơi game", "bộ chuyển đổi", "ăng ten",

  // nature more
  "tảng đá lớn", "suối", "lạch nhỏ", "ao", "thác nước", "đầm lầy", "vùng đầm", "cồn cát", "sông băng", "núi lửa",
  "miệng núi lửa", "rạn san hô", "rong biển", "rêu", "dương xỉ", "dây leo", "cây thường xuân", "xương rồng", "cây sồi", "cây thông",
  "cây phong", "cây liễu", "cây bạch dương", "tre", "quả sồi", "quả thông", "chùm hoa", "gai", "thân cây",

  // insects & sea
  "bướm", "bọ cánh cứng", "châu chấu", "bọ rùa", "chuồn chuồn", "sâu bướm", "ong bắp cày", "ong vò vẽ", "bọ chét", "ve",
  "sên trần", "giun đất", "rết", "bọ cạp", "sứa", "sao biển", "bạch tuộc", "mực ống", "tôm hùm", "tôm",
  "nghêu", "hàu", "cá ngựa", "cá đuối", "lươn", "cá tuế", "cá hồi vân", "cá hồi", "cá ngừ",

  // birds
  "chim cổ đỏ", "chim sẻ", "chim sẻ ức vàng", "chim hồng y", "chim gõ kiến", "chim ruồi", "mòng biển", "bồ nông", "hồng hạc", "công",
  "gà tây", "gà trống", "ngỗng", "thiên nga", "cò", "diệc", "chim ưng", "diều hâu", "kền kền", "quạ lớn",

  // animals more
  "cừu con", "bê", "ngựa con", "chó con", "mèo con", "thú con", "lợn con", "ngựa lùn", "la", "trâu",
  "bò rừng bizon", "nai sừng tấm", "linh dương", "linh dương gazen", "báo săn", "báo đốm", "báo đen", "báo mỹ", "gấu trúc", "gấu túi",
  "lười", "rái cá", "hải ly", "gấu mèo", "chồn hôi", "lửng", "nhím", "chuột chũi", "dơi", "chồn",
  "chồn sương", "chuột hamster", "chuột nhảy", "sóc chuột", "nhím đuôi dài", "thú armadillo", "hải mã", "hải cẩu", "cá sấu", "cá sấu mõm tù",

  // clothing more
  "áo hoodie", "áo blouse", "áo gi lê", "áo len cài", "áo dạ hội", "đồ ngủ", "dép lê", "xăng đan", "giày thể thao", "găng tay liền",
  "bịt tai", "khăn rằn", "vòng cổ", "vòng tay", "bông tai", "trâm cài", "dây giày", "cổ áo", "khuy măng sét", "áo mưa",

  // misc objects
  "đèn pin", "hộp diêm", "vali", "cặp tài liệu", "túi xách tay", "túi nhỏ", "vòng chìa khóa", "ống nhòm", "kính viễn vọng", "kính hiển vi",
  "nhiệt kế", "đồng hồ bấm giờ", "đồng hồ cát", "phễu", "ghế bậc thang", "hộp dụng cụ", "xe cút kít", "xẻng", "cào", "cuốc",
];
