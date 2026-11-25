// ============================================================
//  src/data/birthdayData.js
//  Toàn bộ nội dung cá nhân tập trung tại đây.
//  Chỉnh sửa file này để thay tên, ngày tháng, lời nhắn,
//  đường dẫn ảnh, v.v. mà không cần đụng vào code.
// ============================================================

// ── THÔNG TIN CHUNG ─────────────────────────────────────────
export const siteConfig = {
  /** Tên người được chúc mừng */
  name: "TUYẾT NHI",
  /** Tiêu đề hiển thị trên thanh header */
  headerTitle: "SINH NHẬT: KHU VỰC 25.11",
  /** Nhãn trạng thái hệ thống */
  systemStatus: "princess.elsa_14 // system",
  /** Câu trích dẫn footer */
  footerQuote: '"Chúc sinh nhật vui vẻ, luôn là phiên bản rực rỡ nhất của chính mình"',
};

// ── TRANG 00: HUB (MỞ ĐẦU) ──────────────────────────────────
export const hubData = {
  /** Ảnh bìa hero — đặt file tại public/images/hero-banner.png */
  heroBannerImage: "./images/hero-banner.png",
  heroBannerAlt: "Nền vũ trụ sâu thẳm với tinh vân lấp lánh",

  /** Các dòng chạy trong khung terminal (typing effect) */
  terminalLines: [
    "> HỆ THỐNG PRINCESS.ELSA_14 // ĐANG KHỞI ĐỘNG...",
    "> KẾT NỐI TỚI KHU VỰC_25.11...",
    "> CHÀO MỪNG, TUYẾT NHI!🎂",
    "> CẢM ƠN VÌ ĐÃ Ở ĐÂY...",
  ],

  /** Câu trích dẫn thơ trong terminal */
  poetryQuote:
    '"Giữa vũ trụ rộng lớn này, thật may mắn vì chúng ta đã tìm thấy nhau"',
  poetryFooter: "PHÁT TỪ ĐÀI QUAN SÁT KHÔNG GIAN",

  /** Thẻ chọn phòng */
  rooms: [
    {
      id: "archive",
      tag: "PHÒNG 01 // KHO_LƯU_TRỮ",
      title: "LƯU TRỮ KHOẢNH KHẮC",
      subtitle: '"Nơi cất giữ những khoảnh khắc đẹp và khó quên cùng nhau."',
      statusLabel: "PHÒNG ĐANG MỞ",
      enterLabel: "Vào phòng →",
      actionLabel: "[KHÁM PHÁ]",
      colorAccent: "secondary",
      bannerImage: "./images/bannerluugiukk.jpg",
    },
    {
      id: "wishes",
      tag: "PHÒNG 02 // LỜI_CHÚC ",
      title: "LỜI CHÚC",
      subtitle: '"Những dòng nhắn gửi yêu thương dành riêng cho ngày sinh nhật bạn."',
      statusLabel: "PHÒNG ĐANG MỞ",
      enterLabel: "Vào phòng →",
      actionLabel: "[KHÁM PHÁ]",
      colorAccent: "tertiary",
      bannerImage: "./images/bannerloichuc.jpg",
    },
  ],
};

// ── TRANG 01: LƯU TRỮ KHOẢNH KHẮC ──────────────────────────
export const archiveData = {
  pageTitle: "LƯU TRỮ KHOẢNH KHẮC",
  pageSubtitle: '"Mỗi bức ảnh là một mảnh ghép ký ức lưu lại."',

  /** Ảnh bìa trang Lưu trữ — public/images/bannerluugiukk.heic (cần convert sang jpg) */
  bannerImage: "./images/bannerluugiukk.jpg",
  bannerImageAlt: "Bìa trang lưu trữ khoảnh khắc",

  /** Danh sách ảnh memory — 22 ảnh, đặt tại public/images/ */
  memories: [
    {
      id: "FILE_001",
      file: "FILE_001",
      date: "26/08/2025",
      sector: "KHỞI ĐẦU",
      orbitYear: "NĂM QUỸ ĐẠO 20",
      coords: "VĨ ĐỘ: 45.109 // MÃ: 01",
      title: "Khoảnh Khắc 1",
      description: "Đi quân sự nè, bữa đó cũng là sinh nhật tao",
      image: "./images/memory-1.jpg",
      imageAlt: "Ảnh khoảnh khắc 1",
      audioLabel: "▶ ÂM THANH",
      photoLabel: "[XEM ẢNH]",
      accentColor: "primary",
    },
    {
      id: "FILE_002",
      file: "FILE_002",
      date: "17/10/2025",
      sector: "CUỘC PHIÊU LƯU",
      orbitYear: "NĂM QUỸ ĐẠO 23",
      coords: "VĨ ĐỘ: 36.778 // MÃ: 02",
      title: "Khoảnh Khắc 2",
      description: "Đi làm mà mắc ngủ",
      image: "./images/memory-2.JPG",
      imageAlt: "Ảnh khoảnh khắc 2",
      audioLabel: "♫ DANH SÁCH NHẠC",
      photoLabel: "[XEM ẢNH]",
      accentColor: "secondary",
    },
    {
      id: "FILE_003",
      file: "FILE_003",
      date: "19/10/2025",
      sector: "THÁNH ĐỊA",
      orbitYear: "NĂM QUỸ ĐẠO 25",
      coords: "VĨ ĐỘ: 40.712 // MÃ: 03",
      title: "Khoảnh Khắc 3",
      description: "Đi làm mà như đi ở đợ á, bắt lau nhà",
      image: "./images/memory-3.jpg",
      imageAlt: "Ảnh khoảnh khắc 3",
      audioLabel: "▶ VIDEO",
      photoLabel: "[XEM ẢNH]",
      accentColor: "tertiary",
    },
    {
      id: "FILE_004", file: "FILE_004", date: "22/10/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 04",
      title: "Khoảnh Khắc 4", description: "Lau nhà cho má đi, má cắt xoài cho ăn",
      image: "./images/memory-4.jpg", imageAlt: "Ảnh 4",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_005", file: "FILE_005", date: "05/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 05",
      title: "Khoảnh Khắc 5", description: "Ngủ mọi lúc mọi nơi, đi làm bài nhóm cũng ngủ",
      image: "./images/memory-5.jpg", imageAlt: "Ảnh 5",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_006", file: "FILE_006", date: "09/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 06",
      title: "Khoảnh Khắc 6", description: "Mày hỏi tao mua bàn chải đánh răng không",
      image: "./images/memory-6.JPG", imageAlt: "Ảnh 6",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_007", file: "FILE_007", date: "15/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 07",
      title: "Khoảnh Khắc 7", description: "Đi tập thể dục ở công viên",
      image: "./images/memory-7.JPG", imageAlt: "Ảnh 7",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_008", file: "FILE_008", date: "16/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 08",
      title: "Khoảnh Khắc 8", description: "Mày đi ăn trộm đúng không",
      image: "./images/memory-8.jpg", imageAlt: "Ảnh 8",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_009", file: "FILE_009", date: "20/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 09",
      title: "Khoảnh Khắc 9", description: "Rồi biết đẹp gái rồi, khổ quá",
      image: "./images/memory-9.jpg", imageAlt: "Ảnh 9",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_010", file: "FILE_010", date: "26/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 10",
      title: "Khoảnh Khắc 10", description: "Nay làm sinh nhật trễ cho mày nè, bất ngờ chưa",
      image: "./images/memory-10.jpg", imageAlt: "Ảnh 10",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_011", file: "FILE_011", date: "30/11/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 11",
      title: "Khoảnh Khắc 11", description: "Về quê mày chơi nè, mới sáng sớm quét sân rồi siêngg quá",
      image: "./images/memory-11.JPG", imageAlt: "Ảnh 11",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_012", file: "FILE_012", date: "12/12/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 12",
      title: "Khoảnh Khắc 12", description: "Nhìn khổ ghê chưa, như đi lụm rác á",
      image: "./images/memory-12.jpg", imageAlt: "Ảnh 12",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_013", file: "FILE_013", date: "12/12/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 13",
      title: "Khoảnh Khắc 13", description: "Nay được xuống phố chơi, nhìn hơi hai lúa ha",
      image: "./images/memory-13.jpg", imageAlt: "Ảnh 13",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_014", file: "FILE_014", date: "16/12/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 14",
      title: "Khoảnh Khắc 14", description: "Qua trọ ngta chơi mà làm điên làm khùng, phiền thiệt á chớ",
      image: "./images/memory-14.JPG", imageAlt: "Ảnh 14",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_015", file: "FILE_015", date: "20/12/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 15",
      title: "Khoảnh Khắc 15", description: "Đi hát karaoke, nhìn mà ngại dùm á",
      image: "./images/memory-15.JPG", imageAlt: "Ảnh 15",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_016", file: "FILE_016", date: "20/12/2025", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 16",
      title: "Khoảnh Khắc 16", description: "Ngựa ghê hôm, giống má mỳ",
      image: "./images/memory-16.JPEG", imageAlt: "Ảnh 16",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_017", file: "FILE_017", date: "07/01/2026", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 17",
      title: "Khoảnh Khắc 17", description: "Hello mấy cưng, trong nhà muỗi quá chị ra hóng gió miếng",
      image: "./images/memory-17.JPG", imageAlt: "Ảnh 17",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_018", file: "FILE_018", date: "09/01/2026", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 18",
      title: "Khoảnh Khắc 18", description: "Thấy chưa sơ hở là mua đồ, sao mà giàu nỗi",
      image: "./images/memory-18.jpg", imageAlt: "Ảnh 18",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_019", file: "FILE_019", date: "23/01/2026", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 19",
      title: "Khoảnh Khắc 19", description: "Đi thi bằng lái xe, mà sẵn vô bán bánh mì luôn",
      image: "./images/memory-19.jpg", imageAlt: "Ảnh 19",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
    {
      id: "FILE_020", file: "FILE_020", date: "13/04/2026", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 20",
      title: "Khoảnh Khắc 20", description: "Xàm dễ sợ, zậy mà có kỷ niệm",
      image: "./images/memory-21.jpg", imageAlt: "Ảnh 20",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "secondary",
    },
    {
      id: "FILE_021", file: "FILE_021", date: "13/04/2026", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỲ ĐẠO", coords: "MÃ: 21",
      title: "Khoảnh Khắc 21", description: "Xấu mà chụp quài",
      image: "./images/memory-22.jpg", imageAlt: "Ảnh 21",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "tertiary",
    },
    {
      id: "FILE_022", file: "FILE_022", date: "", sector: "KỶ NIỆM",
      orbitYear: "NĂM QUỸ ĐẠO", coords: "MÃ: 22",
      title: "Khoảnh Khắc 22", description: "Nghèo rồi, quyết tâm kiếm tiền tới 12h đêm",
      image: "./images/memory-20.jpg", imageAlt: "Ảnh 22",
      audioLabel: "▶", photoLabel: "[XEM ẢNH]", accentColor: "primary",
    },
  ],
};

// ── TRANG 02: LỜI CHÚC ───────────────────────────────────────
export const wishesData = {
  pageTitle: "LỜI CHÚC",
  pageSubtitle: '"Mỗi dòng chữ dưới đây là một chút quan tâm nhỏ dành cho bạn."',

  /** Ảnh bìa trang Lời chúc — public/images/bannerloichuc.heic (cần convert sang jpg) */
  bannerImage: "./images/bannerloichuc.jpg",
  bannerImageAlt: "Bìa trang lời chúc",

  channelLabel: "KÊNH LIÊN LẠC",
  sectionTitle: "Để Lại Một Suy Nghĩ Trong Quỹ Đạo",
  sectionDesc:
    "Dù là lời cảm ơn chân thành, một ký ức chung không thể quên, hay lời chúc sinh nhật riêng tư khi chương 25 bắt đầu — mọi lời gửi đến đây đều được mã hóa và lưu giữ trong viên nang kỹ thuật số này.",

  /** Nội dung bức thư */
  letter: {
    salutation: "Mừng sinh nhật 19 nha quỷ nhỏ!",
    paragraphs: [
      "Chơi với nhau mới có hơn một năm mấy thôi mà không hiểu sao tao coi mày như người nhà luôn rồi. Cảm ơn vì luôn hiểu tao, biết là đôi khi mày cũng hay bực mình, khó chịu vì tao, nhưng may cái là giận chút xíu rồi lại đâu vào đấy.🤣 ",
      "Tao hay nói “con Nhi mà tốt bụng cái gì”, giỡn thôi chứ chưa có đứa bạn nào tốt với tao như mày đâu. Mong con đường phía trước của mày luôn suôn sẻ và rực rỡ, xứng đáng với những điều tốt bụng mà mày luôn dành cho tao.",
      "Tuổi mới chúc mày học giỏi hơn, trưởng thành hơn, luôn vui vẻ, xinh đẹp, xài tiền tiết kiệm lại, bớt cằn nhằn khi tao đi chơi lại và quan trọng nhất là đừng có nghỉ chơi với tao nha. Đừng có hoài nghi bản thân, ai cũng có một điểm mạnh riêng mà, cố lên. Nhớ phải thành công với ước mơ của mình nhá."
    ],
    closing: "Háp bi bớt đây, TUYẾT NHYYY!🎂",
    signature: "— Từ Khánh Băng",
    signatureCoord: "princess.elsa_14 // system",
  },
};
