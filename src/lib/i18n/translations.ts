export type Language = "id" | "ko";

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      curriculum: "Kurikulum",
      partners: "Institusi Mitra",
      contact: "Kontak",
    },
    hero: {
      title:
        "Pendidikan Bahasa Korea Berbasis AI yang Disesuaikan dengan Jurusan untuk Transfer yang Sukses",
      subtitle:
        "Menyediakan layanan pembelajaran bahasa Korea online yang terintegrasi dengan program diploma di perguruan tinggi vokasi Indonesia, mempersiapkan mahasiswa untuk transfer ke universitas Korea.",
      cta: "Ke LMS",
    },
    features: {
      title: "Roadmap Kurikulum 4 Semester",
      paragraph:
        "Program pembelajaran bahasa Korea bertahap dari dasar hingga praktik dan pencapaian hasil.",
      semesterLabel: "SEMESTER",
      stepLabel: "TAHAP",
      items: [
        {
          title: "Membangun Dasar Hangeul",
          paragraph:
            "Mulai dari konsonan dan vokal Hangeul hingga pengucapan dan struktur kalimat dasar. Membangun fondasi yang kuat melalui percakapan dasar serta latihan mendengarkan dan membaca.",
        },
        {
          title: "Persiapan TOPIK II",
          paragraph:
            "Latihan intensif mendengarkan dan membaca sesuai struktur ujian. Mencapai level 3 TOPIK II dengan memahami strategi penyelesaian soal berdasarkan tipe soal yang sering keluar.",
        },
        {
          title: "TOPIK II Lanjutan",
          paragraph:
            "Berlatih menulis jawaban di level 4 TOPIK II. Mengembangkan kemampuan menulis logis berbasis soal simulasi praktis yang dihasilkan oleh AI.",
        },
        {
          title: "Bahasa Korea Adaptasi Jurusan",
          paragraph:
            "Mempelajari kosakata dan ekspresi penting yang dibutuhkan dalam kehidupan kuliah. Memperkuat kemampuan menulis sesuai jurusan melalui layanan bimbingan esai AI untuk meningkatkan adaptasi perkuliahan.",
        },
      ],
    },
    about: {
      title: "Dari Dasar hingga Jurusan dengan Bahan Ajar yang Dikembangkan Sendiri",
      paragraph:
        "Menghubungkan tahapan belajar dari bahasa Korea dasar hingga persiapan TOPIK dan adaptasi jurusan menggunakan bahan ajar dan catatan pembahasan yang dikembangkan secara mandiri.",
      imageAlt: "Pratinjau Bahan Ajar",
      cards: [
        {
          badge: "Bahan Ajar Dasar ①",
          category: "Dasar",
          title: "Ganada Korea 1",
          description:
            "Menyusun prinsip konsonan, vokal, dan 받침 (konsonan akhir) serta menguasai membaca dan berbicara dasar melalui pola percakapan yang ringkas.",
        },
        {
          badge: "Bahan Ajar Dasar ②",
          category: "Dasar",
          title: "Ganada Korea 2",
          description:
            "Membangun struktur kalimat dasar dan pola kalimat penting, serta memperkuat dasar mendengarkan dan membaca untuk melanjutkan ke persiapan TOPIK II.",
        },
        {
          badge: "Bahan Ajar Pendamping",
          category: "Kosakata",
          title: "Buku Kosakata Inti",
          description:
            "Memilih kosakata penting sehari-hari dan akademik berdasarkan frekuensi kemunculan, disusun berbasis contoh kalimat untuk langsung memperluas penggunaan kata dalam kalimat.",
        },
        {
          badge: "TOPIK II",
          category: "Tambahan",
          title: "Catatan Pembahasan TOPIK II",
          description:
            "Menyusun inti tipe soal dari bahan ajar eksternal dalam bahasa Indonesia, mencakup rutinitas penyelesaian, titik perangkap, dan pengaturan waktu sekaligus.",
        },
        {
          badge: "TOPIK II",
          category: "Tambahan",
          title: "Buku Menulis TOPIK II",
          description:
            "Menyediakan templat struktur jawaban dan pengembangan paragraf berdasarkan tipe soal, serta menargetkan kemampuan menulis level 4 melalui contoh jawaban dan pengembangan ekspresi.",
        },
        {
          badge: "Adaptasi Jurusan",
          category: "Akademik",
          title: "Campus Bridge",
          description:
            "Melatih kosakata inti dan menulis akademik sesuai jurusan, serta menghubungkannya dengan praktik tugas kuliah seperti tugas, laporan, dan email.",
        },
      ],
    },
    pricing: {
      title: "Opsi Kursus",
      paragraph:
        "Kursus semester reguler dijalankan oleh universitas mitra, dan saat ini layanan hanya tersedia untuk peserta didik Indonesia.",
      entry: {
        badge: "ENTRY",
        packageName: "Dasar Bahasa Korea 1 Bulan",
        priceLabel: "IDR 99.000",
        subtitle:
          "Kursus pemula intensif selama 4 minggu untuk menguasai 'Ganadara', pengucapan, 받침, dan percakapan dasar",
        cta: "Mulai Sekarang",
        note: "Kursus pemula dapat diikuti langsung di situs ini.",
        features: [
          "Rangkuman cepat Hangeul, pengucapan, dan 받침",
          "Pola percakapan dasar & ekspresi penting",
          "Pembelajaran dengan Asisten AI",
          "Jalur Persiapan TOPIK II (level 3–4)",
          "Latihan Bahasa Korea Jurusan/Laporan",
        ],
      },
      semester: {
        badge: "SEMESTER",
        packageName: "Kursus Semester Reguler (Total 4 Semester)",
        priceLabel: "IDR 5.000.000",
        priceUnit: "/ semester",
        subtitle:
          "Kurikulum yang menghubungkan persiapan TOPIK II hingga bahasa Korea jurusan",
        cta: "Lihat Daftar Universitas Mitra",
        note: "Kursus reguler hanya tersedia di universitas mitra.",
        recommended: "Direkomendasikan",
        features: [
          "Seluruh kurikulum kursus pemula",
          "Latihan tipe mendengarkan, membaca, dan menulis",
          "Pembelajaran dengan Asisten AI",
          "Jalur Persiapan TOPIK II (level 3–4)",
          "Latihan Bahasa Korea Jurusan/Laporan",
        ],
      },
    },
    contact: {
      title: "Ajukan Konsultasi",
      description:
        "Tinggalkan informasi Anda di bawah ini dan kami akan segera menghubungi Anda melalui email.",
      form: {
        name: "Nama",
        namePlaceholder: "Masukkan nama Anda",
        email: "Email",
        emailPlaceholder: "Masukkan email Anda",
        target: "Universitas/Jurusan Target (Opsional)",
        targetPlaceholder: "Contoh: Universitas di Seoul / Bisnis",
        timeline: "Periode Aplikasi (Opsional)",
        timelinePlaceholder: "Contoh: Aplikasi September 2026",
        message: "Detail Pertanyaan",
        messagePlaceholder:
          "Ceritakan secara singkat situasi Anda (pendidikan/IPK/level bahasa Korea) dan hal yang ingin ditanyakan.",
        subject: "Email Ajukan Konsultasi",
        submit: "Kirim Konsultasi",
      },
    },
    footer: {
      tagline:
        "Menyediakan pendidikan bahasa Korea berbasis AI yang disesuaikan dengan jurusan untuk transfer yang sukses ke universitas Korea.",
      menuTitle: "Menu",
      policyTitle: "Kebijakan",
      terms: "Syarat & Ketentuan",
      privacy: "Kebijakan Privasi",
      refund: "Kebijakan Pengembalian Dana",
      contactTitle: "Kontak",
      emailLabel: "Email",
      copyright:
        "Pembajakan, reproduksi, dan distribusi tanpa izin dari materi pembelajaran, konten, dan seluruh materi di situs ini dilarang.",
    },
    breadcrumb: {
      home: "Beranda",
    },
    language: {
      id: "Bahasa",
      ko: "한국어",
    },
  },
  ko: {
    nav: {
      home: "Home",
      about: "회사 소개",
      curriculum: "커리큘럼",
      partners: "협약 기관",
      contact: "문의",
    },
    hero: {
      title: "국내 유일 성공적인 편입학을 위한 AI 기반 전공 맞춤 한국어 교육",
      subtitle:
        "인도네시아 전문대학의 학위과정과 연계하여 유학생의 한국 대학 편입학을 대비한 온라인 한국어 교육 서비스를 제공합니다.",
      cta: "LMS 바로가기",
    },
    features: {
      title: "4학기 커리큘럼 로드맵",
      paragraph:
        "기초부터 실전·성과까지 이어지는 단계형 한국어 교육 과정입니다.",
      semesterLabel: "SEMESTER",
      stepLabel: "STEP",
      items: [
        {
          title: "한글 기초 다지기",
          paragraph:
            "한글의 자음·모음부터 시작해 발음과 기초 문장 구조를 학습합니다. 기본 회화와 듣기·읽기 연습을 통해 탄탄한 기초를 다집니다.",
        },
        {
          title: "TOPIK II 대비",
          paragraph:
            "시험 구조에 맞춰 듣기·읽기를 집중 훈련합니다. 빈출 유형에 따른 문제풀이 전략을 익힘으로써 TOPIK II 3급 수준에 달성합니다.",
        },
        {
          title: "TOPIK II 심화",
          paragraph:
            "TOPIK II 4급 수준의 답안 작성을 훈련합니다. AI가 생성한 실전 모의 문제를 바탕으로 논리적 글쓰기 능력을 완성합니다.",
        },
        {
          title: "전공 적응 한국어",
          paragraph:
            "대학생활에 필요한 핵심 어휘 및 표현을 학습합니다. AI 논술 지도 서비스를 통해 전공에 따른 글쓰기를 집중 훈련하여 수업 적응력을 강화합니다.",
        },
      ],
    },
    about: {
      title: "자체 개발 교재로 기초부터 전공까지",
      paragraph:
        "기초 한국어부터 TOPIK·전공 적응까지 자체 교재와 해설 노트로 단계를 연계합니다.",
      imageAlt: "교재 미리보기",
      cards: [
        {
          badge: "기초 교재 ①",
          category: "Foundations",
          title: "가나다 한국어 1",
          description:
            "자음·모음·받침 원리를 정리하고 간결한 회화 패턴으로 읽기와 기초 말하기를 동시에 익힙니다.",
        },
        {
          badge: "기초 교재 ②",
          category: "Foundations",
          title: "가나다 한국어 2",
          description:
            "기본 문장 구조와 필수 문형을 누적하며 듣기·읽기 기본기를 다져 TOPIK II 대비로 연결합니다.",
        },
        {
          badge: "보조 교재",
          category: "Vocabulary",
          title: "코어 어휘북",
          description:
            "일상·학습 필수 어휘를 빈출 기준으로 선별하고 예문 중심으로 구성해 단어를 문장으로 바로 확장합니다.",
        },
        {
          badge: "TOPIK II",
          category: "Extras",
          title: "TOPIK II 해설 노트",
          description:
            "외부 교재의 핵심 유형을 인니어로 정리하고 풀이 루틴, 함정 포인트, 시간 배분까지 한 번에 다룹니다.",
        },
        {
          badge: "TOPIK II",
          category: "Extras",
          title: "TOPIK II 쓰기 노트",
          description:
            "유형별 답안 구조와 문단 전개를 템플릿으로 제공하고 예시 답안과 표현 확장으로 4급 수준 쓰기를 목표로 합니다.",
        },
        {
          badge: "전공 적응",
          category: "Academic",
          title: "캠퍼스 브릿지",
          description:
            "전공별 핵심 어휘와 학업 글쓰기를 훈련하고 과제·리포트·이메일 등 대학 과제 형식까지 실전으로 연결합니다.",
        },
      ],
    },
    pricing: {
      title: "수강 옵션",
      paragraph:
        "정규 학기 과정은 협약 대학에서 진행되며, 현재 인도네시아 수강생에 한하여 서비스를 제공합니다.",
      entry: {
        badge: "ENTRY",
        packageName: "한국어 기초 1개월",
        priceLabel: "IDR 99.000",
        subtitle:
          "‘가나다라’부터 발음·받침·기초 회화를 4주 안에 빠르게 잡는 입문 코스",
        cta: "지금 바로 시작하기",
        note: "입문 과정은 본 사이트에서 바로 수강할 수 있습니다.",
        features: [
          "한글·발음·받침 빠른 정리",
          "기초 회화 패턴 & 필수 표현",
          "AI 어시스턴트 활용 학습",
          "TOPIK II 대비(3–4급) 트랙",
          "전공 한국어/레포트 훈련",
        ],
      },
      semester: {
        badge: "SEMESTER",
        packageName: "정규 학기 과정 (총 4학기)",
        priceLabel: "IDR 5.000.000",
        priceUnit: "/ 학기",
        subtitle:
          "TOPIK II 준비부터 전공 한국어까지 연결되는 커리큘럼",
        cta: "협약 대학 리스트 보기",
        note: "정규 과정은 협약 대학에서만 수강 가능합니다.",
        recommended: "Recommended",
        features: [
          "입문 과정 전체 커리큘럼",
          "듣기·읽기·쓰기 유형 훈련",
          "AI 어시스턴트 활용 학습",
          "TOPIK II 대비(3–4급) 트랙",
          "전공 한국어/레포트 훈련",
        ],
      },
    },
    contact: {
      title: "상담 신청",
      description:
        "아래에 정보를 남겨주시면 이메일로 빠르게 안내드리겠습니다.",
      form: {
        name: "이름",
        namePlaceholder: "이름을 입력해주세요",
        email: "이메일",
        emailPlaceholder: "이메일을 입력해주세요",
        target: "목표 대학/전공 (선택)",
        targetPlaceholder: "예: 수도권 대학 / 경영학",
        timeline: "지원 시기 (선택)",
        timelinePlaceholder: "예: 2026년 9월 지원",
        message: "문의 내용",
        messagePlaceholder:
          "현재 상황(학력/학점/한국어 수준)과 궁금한 점을 간단히 적어주세요.",
        subject: "상담 신청 이메일",
        submit: "상담 신청하기",
      },
    },
    footer: {
      tagline:
        "국내 유일 성공적인 편입학을 위한 AI 기반 전공 맞춤 한국어 교육을 제공합니다.",
      menuTitle: "메뉴",
      policyTitle: "정책",
      terms: "이용약관",
      privacy: "개인정보처리방침",
      refund: "환불 규정",
      contactTitle: "문의",
      emailLabel: "이메일",
      copyright:
        "교재·콘텐츠 및 사이트 내 모든 자료의 무단 복제·배포를 금합니다.",
    },
    breadcrumb: {
      home: "Home",
    },
    language: {
      id: "Bahasa",
      ko: "한국어",
    },
  },
};

export type Translations = typeof translations.id;

export function getTranslation(lang: Language): Translations {
  return translations[lang];
}
