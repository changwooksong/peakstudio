// ─── PORTFOLIO DATA ───
const portfolioData = [
  {
    category: "뷰티",
    title: "만족도 4.9, 누적 30억+ 써마쎄라가 만든 고주파 페이스튠",
    desc: "40W 의료기기급 고주파 + 영하 2도 CRYO가 동시에! 와디즈 뷰티 1위",
    img: "https://cdn3.wadiz.kr/studio/images/2025/09/16/19c395f5-56b4-4f15-a2b2-d7dcc760b7f5.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/373961",
    funding: "30억+",
    rating: "4.9",
    rank: "와디즈 뷰티 1위",
    strategy: [
      "의료기기급 40W 스펙 강조 비주얼 설계",
      "피부 임상 전후 비교 데이터 시각화 및 도표화",
      "핵심 소구점 기반 타겟별 맞춤 고관여 카피라이팅"
    ]
  },
  {
    category: "뷰티",
    title: "만족도 4.9점 뷰티1위 | 15억 신화 HIFU 써마쎄라 마지막 앵콜",
    desc: "뷰티 1위 뷰티기기, 4.5mm 침투 HIFU 써마쎄라 역대급 조건",
    img: "https://cdn3.wadiz.kr/studio/images/2025/01/20/de0f5bc5-97bb-470a-b9fe-c456ee802905.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/317733",
    funding: "15.7억+",
    rating: "4.9",
    rank: "뷰티기기 앵콜 1위",
    strategy: [
      "리얼 고객 사용 후기 및 누적 평점 데이터 레이아웃 배치",
      "4.5mm 침투 HIFU 핵심 작동 메커니즘을 3D 그래픽으로 설명",
      "기존 펀딩 만족도 4.9점 신뢰성 중심 기획"
    ]
  },
  {
    category: "뷰티",
    title: "[1,200RPM] 발각질 고민 종결! 속도,구성,가격까지 모두 국내 유일",
    desc: "국내 최고 속도 1200RPM, 고성능 3세대 전동 풋 글라인더",
    img: "https://cdn3.wadiz.kr/studio/images/2025/09/25/47eb2e40-8504-4648-a943-2838cfd501cf.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/359190",
    funding: "1.1억+",
    rating: "4.8",
    rank: "바디케어 실시간 1위",
    strategy: [
      "국내 최고 1,200RPM 강력한 속도 스펙 과학적 검증",
      "살롱급 케어 비포/애프터 초고화질 매크로 촬영",
      "각질 고민 해결을 위한 3단계 연마 헤드 시연"
    ]
  },
  {
    category: "뷰티",
    title: "미국 HSN 홈쇼핑 매진, 닥터트리 콜라겐 신상 한국 첫출시!",
    desc: "미국 홈쇼핑 완판! 피부 탄력을 위한 고함량 콜라겐&펩타이드 크림",
    img: "https://cdn3.wadiz.kr/studio/images/2026/01/22/31f71a99-9334-4afa-86f6-2d764a98743e.jpeg",
    url: "https://www.wadiz.kr/web/wcomingsoon/rwd/390565",
    funding: "2억+ (오픈 예정)",
    rating: "4.7",
    rank: "스킨케어 급상승",
    strategy: [
      "미국 HSN 홈쇼핑 매진 대기록 스토리텔링 도입",
      "고함량 콜라겐 & 펩타이드 흡수율 시험 시각화",
      "고급스러운 에스테틱 브랜드 이미지의 톤앤매너 구축"
    ]
  },
  {
    category: "푸드",
    title: "대기업 임원 명절 선물 | 1000개 중 오직 5개 홍삼으로 만든 천작환",
    desc: "농협홍삼 한삼인 최상위 프리미엄 천작환, 100세트 한정 판매",
    img: "https://cdn3.wadiz.kr/studio/images/2025/08/25/c0a444f6-48ac-483c-a4c2-28e656d6e4ab.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/349002",
    funding: "3억+",
    rating: "4.9",
    rank: "선물세트 1위",
    strategy: [
      "0.5%만 선별되는 천삼 원료의 희소성 극대화",
      "품격 있는 패키지 디자인 및 보자기 포장 연출 컷 촬영",
      "명절 시즌 선물 카테고리에 최적화된 마케팅 타겟팅"
    ]
  },
  {
    category: "푸드",
    title: "쌍화탕맛 중독자라면 이 양갱을 주목해야 합니다. 홍삼 밤양갱",
    desc: "농협홍삼 한삼인 인기 간식 홍삼 밤양갱 스틱",
    img: "https://cdn3.wadiz.kr/studio/images/2025/08/25/09837d80-2080-448d-bb73-6c7062da944c.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/370216",
    funding: "1.5억+",
    rating: "4.8",
    rank: "간식 펀딩 상위권",
    strategy: [
      "할매입맛(뉴트로) 트렌드를 적극 반영한 브랜딩 메시지",
      "달콤 쌉싸름한 맛의 비율 시각적인 텍스트 카피 기획",
      "간편한 스틱 형태의 라이프스타일 컷 촬영 및 배치"
    ]
  },
  {
    category: "푸드",
    title: "S* 홈쇼핑 1등 | 6분이면 전문점 퀄리티 뼈 없는 갈비찜 완성!",
    desc: "좋은 소갈비와 한약재로 만든 밥도둑 갈비찜",
    img: "https://cdn3.wadiz.kr/studio/images/2025/09/09/240098f2-e2b0-4a32-964a-21ce7e678bf7.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/365477",
    funding: "2억+",
    rating: "4.8",
    rank: "푸드 실시간 1위",
    strategy: [
      "홈쇼핑 1등 이력과 푸드 에디터의 추천 멘트 결합",
      "6분 완성 조리 과정 및 뼈를 완전히 제거한 조리 편리성 소구",
      "삼, 버섯 등 전통 건강 식재료를 부각한 고품격 연출 촬영"
    ]
  },
  {
    category: "테크가전",
    title: "[한국첫런칭] 글로벌 100억! AI 폼팩터폰 Mind One K Pro",
    desc: "IKKO AI 시스템으로 업무와 공부, 여행의 효율을 높이는 AI 폼팩터폰",
    img: "https://cdn3.wadiz.kr/studio/images/2026/02/03/5c0c85d6-ff09-4e36-b224-2edfcb1ab633.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/391378",
    funding: "5.1억+",
    rating: "4.8",
    rank: "테크가전 1위",
    strategy: [
      "글로벌 펀딩 100억 성공 스토리 기반의 테크 신뢰 구축",
      "비서, 통역 등 실생활에 유용한 AI 폼팩터 사용 시연 영상 기획",
      "얼리어답터를 겨냥한 감도 높은 미니멀 그래픽 디자인"
    ]
  },
  {
    category: "테크가전",
    title: "[두유 단 20분] 무소음 두유제조기 등장! 이 블렌더는 새벽에 돌립니다",
    desc: "35db 사무실 소음보다 적은 무소음 블렌더",
    img: "https://cdn3.wadiz.kr/studio/images/2024/04/29/ac2b8742-eb8e-477b-9ef2-e53ba83b07f5.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/275932",
    funding: "3억+",
    rating: "4.9",
    rank: "실시간 가전 1위",
    strategy: [
      "35db 도서관 수준 저소음을 보여주는 소음 측정 비교 테스트 연출",
      "두유, 죽, 이유식 등 20분 쾌속 조리 기능 영상 상세 설명",
      "주방 인테리어를 돋보이게 하는 모던 가전 톤앤매너 매칭"
    ]
  },
  {
    category: "여행레저",
    title: "루프박스가 50만원대? 내 차에 또다른 트렁크 | 캠핑로망 휴고코리아",
    desc: "와디즈 단독 구성 휴고코리아 루프박스",
    img: "https://cdn3.wadiz.kr/studio/images/2024/09/11/ecd0eb80-7369-4da7-940b-d6af3686ddca.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/311487",
    funding: "8.2억+",
    rating: "4.7",
    rank: "캠핑/아웃도어 1위",
    strategy: [
      "경쟁사 대비 압도적인 50만원대 가성비 장점 기획",
      "SUV, 세단 등 실제 차량 장착 아웃도어 필드 촬영",
      "많은 짐 수납이 가능한 실용적 공간 비포/애프터 대비"
    ]
  },
  {
    category: "여행레저",
    title: "성인 6명 사이즈가 150만원대 | 이 에어텐트는 250만원대여야 합니다",
    desc: "초대형 에어텐트, 합리성과 내구성 모두 갖춘",
    img: "https://cdn3.wadiz.kr/studio/images/2025/03/20/add1c2bd-688f-4ddf-a6f3-da43e3015552.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/256730",
    funding: "12억+",
    rating: "4.8",
    rank: "에어텐트 실시간 1위",
    strategy: [
      "성인 6명이 들어가는 실내 공간 및 레이아웃 와이드 앵글 촬영",
      "고급 사양 소재 대비 150만원대 런칭 혜택 가격 대비 구조",
      "캠린이도 10분 내 자립할 수 있는 에어 주입식 설치 가이드 영상"
    ]
  },
  {
    category: "여행레저",
    title: "이거 진짜 괴물이네. 괴물급 압력에 생활방수까지 울트라 에어펌프 5.0",
    desc: "무려 5.0Kpa 강한 압력에 보조배터리 기능까지",
    img: "https://cdn.wadiz.kr/wwwwadiz/green001/2022/0811/20220811154548337_158716.jpg/wadiz/resizecrop/600x315/composite/ne/format/jpg/quality/80",
    url: "https://www.wadiz.kr/web/campaign/detail/158716",
    funding: "4.1억+",
    rating: "4.9",
    rank: "레저 기어 상위권",
    strategy: [
      "미니 펌프 대비 5.0Kpa 초강력 분사 및 흡입 압력 데이터 입증",
      "야외 비/물방울에도 끄떡없는 IPX 방수 등급 실제 시연",
      "포켓 사이즈의 컴팩트한 디자인을 강조하는 매크로 렌즈 촬영"
    ]
  },
  {
    category: "여행레저",
    title: "1분 착화 | 진공 포장 장작은 이렇게 진화했어야 합니다. 리박스 혁신장작",
    desc: "제주감귤로 만든 친환경 장작, 감귤 향을 즐길 수 있는 캠핑 장작",
    img: "https://cdn3.wadiz.kr/studio/images/2025/03/14/885fd7d3-3671-4263-b2ec-1573f148f413.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/342864",
    funding: "1억+",
    rating: "4.8",
    rank: "친환경 용품 주목",
    strategy: [
      "제주 감귤나무 벌채목 업사이클링 친환경 캠페인성 가치 브랜딩",
      "토치로 단 1분 만에 점화 가능한 고화력 특허 건조율 소개",
      "감귤향 불멍이 주는 특별한 감성 무드의 야간 힐링 컷 촬영"
    ]
  },
  {
    category: "패션잡화",
    title: "[오늘마감] 미국 1위 템퍼 매트리스 내 발에 | TEMPUR® 인솔",
    desc: "NASA에서 인정 받은 우주기술로 만든 TEMPUR® THE ZERO 인솔",
    img: "https://cdn3.wadiz.kr/studio/images/2025/08/28/e4afd37b-e696-4187-83dc-f6a51b7c73c8.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/370779",
    funding: "10억+",
    rating: "4.9",
    rank: "인솔 펀딩 역대 1위",
    strategy: [
      "글로벌 탑 매트리스 TEMPUR® 라이선스의 오리지널리티 부각",
      "우주 기술 충격 완충 소재의 탄성력 그래프 수치화 및 스틸볼 낙하 실험",
      "발 피로도가 높은 직군 타겟 맞춤 라이프스타일 컷 제작"
    ]
  },
  {
    category: "패션잡화",
    title: "4만원대 | 눈부심과 가격거품 삭제. 선명함과 퀄리티만 남겼어요 VS-011",
    desc: "자외선 차단 99.9% / 하이앤드급 편광렌즈 선글라스",
    img: "https://cdn3.wadiz.kr/studio/images/2026/03/10/b34d88ef-8787-4855-ad75-ece6589ac29e.jpeg",
    url: "https://www.wadiz.kr/web/wcomingsoon/rwd/395220",
    funding: "2.2억+ (오픈 예정)",
    rating: "4.7",
    rank: "패션잡화 실시간 급상승",
    strategy: [
      "자외선 99.9% 차단과 난반사 제거 테스트 시각화 자료 기획",
      "4만원대의 유통 마진 제거 구조 도표 및 프리미엄 프레임 성능 분석",
      "액티브 및 캐주얼 환경 모두 어울리는 모델 룩북 촬영"
    ]
  },
  {
    category: "패션잡화",
    title: "[와디즈 최초공개] 비즈니스의 신뢰, 가방으로 말하다. 코럴리프 가방",
    desc: "프리미엄 사피아노 비건레더로 완성한 고급 비즈니스 가방",
    img: "https://cdn3.wadiz.kr/studio/images/2025/11/06/43671315-9a33-45da-bd8b-967f8f8337c7.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/374018",
    funding: "1.5억+",
    rating: "4.8",
    rank: "비즈니스백 주목",
    strategy: [
      "프리미엄 사피아노 가죽 특유의 질감과 무결점 마감을 살린 초밀접 접사",
      "직장인의 필수 소지품(맥북, 마우스, 텀블러 등) 멀티 포켓 수납 섹션 촬영",
      "비즈니스 미팅 컨셉 포멀 오피스룩 코디네이션 연출"
    ]
  },
  {
    category: "홈리빙",
    title: "하루 딱 10분만! 천국의계단과 탄다 사이클 AI앱으로 급찐살 삭제",
    desc: "홈트 앱 탄다 사이클이 직접 천국의 계단까지 만들었습니다",
    img: "https://cdn3.wadiz.kr/studio/images/2025/09/30/506ae7a9-0878-4b4c-8c17-dcf15c0a5746.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/375554",
    funding: "6억+",
    rating: "4.9",
    rank: "스포츠/피트니스 1위",
    strategy: [
      "부피가 커 부담스러운 헬스장 기구를 홈트 사이즈로 브랜딩",
      "AI 연동 실시간 라이브 러닝 및 게이미피케이션 동기부여 요소 소구",
      "짧은 시간 고효율 칼로리 소모 데이터의 그래프 디자인 시각화"
    ]
  },
  {
    category: "홈리빙",
    title: "[탄다 사이클] 저소음! 컴팩트 사이즈! 칼로리 삭제! 땀샘 폭발 홈트",
    desc: "탄다 사이클 앱과 집에서도 즐기는 실내 라이딩",
    img: "https://cdn3.wadiz.kr/studio/images/2025/12/15/aa84a356-d6cb-4e1b-9782-98783b113b83.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/383991",
    funding: "4.2억+",
    rating: "4.8",
    rank: "실내 피트니스 실시간 1위",
    strategy: [
      "마그네틱 저항 벨트식 구동을 통한 층간 소음 제로(0) 테스트 시그널 부각",
      "구글 스트리트뷰 맵을 활용한 세계 유명 코스 가상 라이딩 앱 연동 강점",
      "원터치 간편 사이즈 조절 설계의 가족 친화적 디자인 소개"
    ]
  },
  {
    category: "홈리빙",
    title: "백화점산 최상급 메리노울 양모매트 | 만져보면 부드러움에 놀라실 거예요",
    desc: "최상급 메리노울, 호주산 양모 매트 인테리어",
    img: "https://cdn3.wadiz.kr/studio/images/2025/12/01/80c3e56e-0ecd-483d-88db-f51737912351.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/383910",
    funding: "2.5억+",
    rating: "4.8",
    rank: "침구/매트 카테고리 1위",
    strategy: [
      "백화점 판매 명품 원단을 중간 유통 없이 제공하는 합리적 이점 설명",
      "호주 프리미엄 메리노울 천연 가공 인증 마크 및 푹신함 강조 매크로 촬영",
      "실내 인테리어 잡지 화보 느낌의 아늑한 침실 연출"
    ]
  },
  {
    category: "반려동물",
    title: "[대형견, 다견 엄마아빠 필수템] 120kg도 문제없는 애착웨건 등장!",
    desc: "전용 캐노피 + 1초 폴딩 + 완전 매트 세척 캠프365 파파웨건",
    img: "https://cdn3.wadiz.kr/studio/images/2025/05/27/1a1f7268-dd73-4b82-8cb1-48d5832efa8b.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/228078",
    funding: "3.2억+",
    rating: "4.9",
    rank: "반려동물 펀딩 1위",
    strategy: [
      "성인 남성이 타도 견디는 120kg 하중 하이퍼 스트렝스 실측 테스트",
      "반려동물 동반 시 유용한 가림막 캐노피 및 세척 편리함 상세 기획",
      "야외 강아지와 함께하는 나들이용 웨건 무드컷 야외 촬영"
    ]
  },
  {
    category: "전시컬쳐",
    title: "2026 GOCF | 4월 봄나들이 고민? 아웃도어를 사랑한다면 바로여기",
    desc: "가평 자라섬에서 열리는 3일간의 아웃도어 대축제",
    img: "https://cdn3.wadiz.kr/studio/images/2026/03/05/c28d8735-3206-443a-8505-4fbf0a62ff47.jpeg",
    url: "https://www.wadiz.kr/web/wcomingsoon/rwd/394371",
    funding: "5.3억+ (오픈 예정)",
    rating: "4.8",
    rank: "티켓/문화 실시간 1위",
    strategy: [
      "가평 자라섬 전체 캠핑 사이트 스케일 및 주요 밴드 라인업 기획",
      "얼리버드 한정 혜택 펀딩 가격 설계 및 타켓층 맞춤 포스터 비주얼",
      "현장 어트랙션 및 부스 위치 정보 전달에 최적화된 모던 레이아웃"
    ]
  },
  {
    category: "자동차",
    title: "연비상승, 매연감소, 출력향상 효과를 단 한번의 주입으로 지속한다면?",
    desc: "레비온 지속형 스마트 연료 개선제",
    img: "https://cdn3.wadiz.kr/studio/images/2025/07/28/a4ea1207-ef54-472b-8d59-02aa4a6a81e0.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/364950",
    funding: "1.5억+",
    rating: "4.8",
    rank: "연료첨가제 주목",
    strategy: [
      "매번 넣는 소모품이 아닌 '1회 주입 반영구 지속' 파괴적 강점 부각",
      "국가 인증 기관 연비/매연 성적 인증서 검증 상세 배치",
      "엔진 내부 복원 및 피스톤 마찰 감소 과정을 인포그래픽으로 직관화"
    ]
  },
  {
    category: "자동차",
    title: "졸음운전 감지 기술, 나와 가족을 지키는 운전자 안전 솔루션",
    desc: "국내 유일 유럽 인증 기술 졸음 감지 모본 M60",
    img: "https://cdn3.wadiz.kr/studio/images/2025/11/28/21c7b502-666f-46f6-902d-8c54835c68a8.jpeg",
    url: "https://www.wadiz.kr/web/campaign/detail/381056",
    funding: "2.1억+",
    rating: "4.9",
    rank: "차량가전 실시간 1위",
    strategy: [
      "유럽 및 국토부 규격 인증 안전 알고리즘 기술력 소개 기획",
      "야간/터널/선글라스 착용 상태에서도 얼굴을 정확히 인식하는 시연 테스트",
      "가정용 차량 자가 설치 10분 완료 직관적 비주얼 설명 가이드 제공"
    ]
  }
];

// ─── LOADER ───
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 1500);
});

// ─── THEME TOGGLE ───
const themeToggleBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

// If local storage theme is set, apply it
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeToggleBtn(currentTheme);
} else {
  // Check system preference
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = systemPrefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeToggleBtn(initialTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let targetTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    updateThemeToggleBtn(targetTheme);
  });
}

function updateThemeToggleBtn(theme) {
  if (!themeToggleBtn) return;
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = '🌞'; // Show Sun icon to switch to light mode
    themeToggleBtn.setAttribute('aria-label', '라이트 모드로 전환');
  } else {
    themeToggleBtn.innerHTML = '🌙'; // Show Moon icon to switch to dark mode
    themeToggleBtn.setAttribute('aria-label', '다크 모드로 전환');
  }
}

// ─── CURSOR GLOW ───
const glow = document.getElementById('cursorGlow');
if (window.innerWidth > 768 && glow) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Grow cursor glow on interactive elements
  document.body.addEventListener('mouseenter', (e) => {
    const target = e.target;
    if (target.matches('a, button, .portfolio-card, .filter-btn, .step-card, .faq-header, .form-btn')) {
      glow.classList.add('grow');
    }
  }, true);

  document.body.addEventListener('mouseleave', (e) => {
    const target = e.target;
    if (target.matches('a, button, .portfolio-card, .filter-btn, .step-card, .faq-header, .form-btn')) {
      glow.classList.remove('grow');
    }
  }, true);
}

// ─── SCROLL PROGRESS & NAV SCROLL ───
const navbar = document.getElementById('navbar');
const progress = document.querySelector('.scroll-progress-bar');
window.addEventListener('scroll', () => {
  // Toggle nav bg
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }

  // Update progress bar
  if (progress) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  }
});

// ─── COUNTER ANIMATION ───
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const progressRatio = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (progressRatio < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ─── REVEAL ON SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

// ─── PORTFOLIO RENDER & MODAL ───
const grid = document.getElementById('portfolioGrid');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(index) {
  const item = portfolioData[index];
  if (!item || !modal || !modalBody) return;

  const strategiesHtml = item.strategy ? item.strategy.map(s => `<li>${s}</li>`).join('') : '<li>성공적 브랜딩 및 콘텐츠 기획</li>';

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-visual">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <div class="modal-content">
        <span class="modal-category">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="modal-desc">${item.desc}</p>
        
        <div class="modal-metrics">
          <div class="metric-item">
            <span class="metric-val">${item.funding || '-'}</span>
            <span class="metric-lbl">누적 펀딩액</span>
          </div>
          <div class="metric-item">
            <span class="metric-val">⭐ ${item.rating || '-'}</span>
            <span class="metric-lbl">평점 만족도</span>
          </div>
          <div class="metric-item">
            <span class="metric-val">${item.rank || '공식 파트너'}</span>
            <span class="metric-lbl">주요 달성 성과</span>
          </div>
        </div>

        <div class="modal-strategy">
          <h4>핵심 제작 및 마케팅 전략</h4>
          <ul>
            ${strategiesHtml}
          </ul>
        </div>

        <div class="modal-actions">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">실제 펀딩 페이지 방문하기</a>
          <button class="btn-outline modal-close-btn">닫기</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Add click listener for close button in modal body
  modalBody.querySelector('.modal-close-btn').addEventListener('click', closeProjectModal);
}

function closeProjectModal() {
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
}

// Modal closing helpers
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

function renderPortfolio(filter = 'all') {
  if (!grid) return;
  const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.category === filter);
  grid.innerHTML = '';
  filtered.forEach((item, i) => {
    const globalIdx = portfolioData.indexOf(item);
    const card = document.createElement('div');
    card.className = 'portfolio-card reveal';
    card.style.animationDelay = `${i * 0.05}s`;
    card.addEventListener('click', () => openProjectModal(globalIdx));
    card.innerHTML = `
      <div class="portfolio-thumb-wrap">
        <img class="portfolio-thumb" src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="portfolio-category-badge">${item.category}</span>
      </div>
      <div class="portfolio-info">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <div class="portfolio-link-icon">성과 분석 및 상세 보기 →</div>
      </div>
    `;
    grid.appendChild(card);
  });
  // Re-observe new cards
  grid.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
  // Trigger visibility after short delay
  setTimeout(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
});

// Initial render
renderPortfolio();

// ─── FAQ ACCORDION ───
document.querySelectorAll('.faq-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const body = header.nextElementSibling;
    const isOpen = item.classList.contains('active');

    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      otherItem.classList.remove('active');
      otherItem.querySelector('.faq-body').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('active');
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

// ─── PROJECT PLANNER FORM ───
// Handling interactive options (chips)
document.querySelectorAll('.form-group-chips').forEach(group => {
  const isMultiSelect = group.dataset.multiselect === 'true';
  const buttons = group.querySelectorAll('.form-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isMultiSelect) {
        btn.classList.toggle('active');
      } else {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
});

// Submit Form
const plannerForm = document.getElementById('projectPlannerForm');
if (plannerForm) {
  plannerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather selected values from chips
    const getActiveValues = (selector) => {
      return Array.from(document.querySelectorAll(`${selector} .form-btn.active`))
                  .map(btn => btn.dataset.value);
    };

    const categories = getActiveValues('#formCategory');
    const services = getActiveValues('#formServices');
    const budget = getActiveValues('#formBudget');

    const name = document.getElementById('clientName').value.trim();
    const company = document.getElementById('clientCompany').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const description = document.getElementById('projectDesc').value.trim();

    if (!name || !email || !description) {
      showToast('이름, 이메일, 그리고 문의 상세내용은 필수 항목입니다.', 'error');
      return;
    }

    const emailBody = `
[피크 스튜디오 견적/프로젝트 문의]
-----------------------------------------
■ 고객명: ${name}
■ 회사/브랜드명: ${company || '개인'}
■ 이메일: ${email}
■ 연락처: ${phone || '미입력'}

■ 관심 카테고리: ${categories.join(', ') || '선택하지 않음'}
■ 희망 서비스: ${services.join(', ') || '선택하지 않음'}
■ 희망 예산 규모: ${budget.join(', ') || '미정'}

■ 프로젝트 상세 소개:
${description}
-----------------------------------------
문의해주셔서 감사합니다. 빠른 시일 내에 연락드리겠습니다.
    `.trim();

    // Format mailto link
    const subject = encodeURIComponent(`[PEAK STUDIO 홈페이지 문의] ${company || name} 프로젝트`);
    const body = encodeURIComponent(emailBody);
    const mailtoUrl = `mailto:contact@peakstudio.kr?subject=${subject}&body=${body}`;

    // Action: open mail client AND copy content to clipboard
    window.location.href = mailtoUrl;

    navigator.clipboard.writeText(emailBody).then(() => {
      showToast('이메일 클라이언트가 실행되고 문의 내용이 클립보드에 복사되었습니다!', 'success');
      plannerForm.reset();
      document.querySelectorAll('.form-btn').forEach(b => b.classList.remove('active'));
    }).catch(err => {
      showToast('메일 전송 창으로 연결되었습니다.', 'success');
    });
  });
}

// ─── TOAST NOTIFICATION ───
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✨' : '⚠️'}</span>
    <span class="toast-message">${message}</span>
  `;
  
  toastContainer.appendChild(toast);

  // Trigger animations
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
