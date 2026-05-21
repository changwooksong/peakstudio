// ─── PORTFOLIO DATA ───
const portfolioData = [
  { category: "뷰티", title: "만족도 4.9, 누적 30억+ 써마쎄라가 만든 고주파 페이스튠", desc: "40W 의료기기급 고주파 + 영하 2도 CRYO가 동시에! 와디즈 뷰티 1위", img: "https://cdn3.wadiz.kr/studio/images/2025/09/16/19c395f5-56b4-4f15-a2b2-d7dcc760b7f5.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/373961" },
  { category: "뷰티", title: "만족도 4.9점 뷰티1위 | 15억 신화 HIFU 써마쎄라 마지막 앵콜", desc: "뷰티 1위 뷰티기기, 4.5mm 침투 HIFU 써마쎄라 역대급 조건", img: "https://cdn3.wadiz.kr/studio/images/2025/01/20/de0f5bc5-97bb-470a-b9fe-c456ee802905.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/317733" },
  { category: "뷰티", title: "[1,200RPM] 발각질 고민 종결! 속도,구성,가격까지 모두 국내 유일", desc: "국내 최고 속도 1200RPM, 고성능 3세대 전동 풋 글라인더", img: "https://cdn3.wadiz.kr/studio/images/2025/09/25/47eb2e40-8504-4648-a943-2838cfd501cf.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/359190" },
  { category: "뷰티", title: "미국 HSN 홈쇼핑 매진, 닥터트리 콜라겐 신상 한국 첫출시!", desc: "미국 홈쇼핑 완판! 피부 탄력을 위한 고함량 콜라겐&펩타이드 크림", img: "https://cdn3.wadiz.kr/studio/images/2026/01/22/31f71a99-9334-4afa-86f6-2d764a98743e.jpeg", url: "https://www.wadiz.kr/web/wcomingsoon/rwd/390565" },
  { category: "푸드", title: "대기업 임원 명절 선물 | 1000개 중 오직 5개 홍삼으로 만든 천작환", desc: "농협홍삼 한삼인 최상위 프리미엄 천작환, 100세트 한정 판매", img: "https://cdn3.wadiz.kr/studio/images/2025/08/25/c0a444f6-48ac-483c-a4c2-28e656d6e4ab.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/349002" },
  { category: "푸드", title: "쌍화탕맛 중독자라면 이 양갱을 주목해야 합니다. 홍삼 밤양갱", desc: "농협홍삼 한삼인 인기 간식 홍삼 밤양갱 스틱", img: "https://cdn3.wadiz.kr/studio/images/2025/08/25/09837d80-2080-448d-bb73-6c7062da944c.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/370216" },
  { category: "푸드", title: "S* 홈쇼핑 1등 | 6분이면 전문점 퀄리티 뼈 없는 갈비찜 완성!", desc: "좋은 소갈비와 한약재로 만든 밥도둑 갈비찜", img: "https://cdn3.wadiz.kr/studio/images/2025/09/09/240098f2-e2b0-4a32-964a-21ce7e678bf7.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/365477" },
  { category: "테크가전", title: "[한국첫런칭] 글로벌 100억! AI 폼팩터폰 Mind One K Pro", desc: "IKKO AI 시스템으로 업무와 공부, 여행의 효율을 높이는 AI 폼팩터폰", img: "https://cdn3.wadiz.kr/studio/images/2026/02/03/5c0c85d6-ff09-4e36-b224-2edfcb1ab633.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/391378" },
  { category: "테크가전", title: "[두유 단 20분] 무소음 두유제조기 등장! 이 블렌더는 새벽에 돌립니다", desc: "35db 사무실 소음보다 적은 무소음 블렌더", img: "https://cdn3.wadiz.kr/studio/images/2024/04/29/ac2b8742-eb8e-477b-9ef2-e53ba83b07f5.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/275932" },
  { category: "여행레저", title: "루프박스가 50만원대? 내 차에 또다른 트렁크 | 캠핑로망 휴고코리아", desc: "와디즈 단독 구성 휴고코리아 루프박스", img: "https://cdn3.wadiz.kr/studio/images/2024/09/11/ecd0eb80-7369-4da7-940b-d6af3686ddca.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/311487" },
  { category: "여행레저", title: "성인 6명 사이즈가 150만원대 | 이 에어텐트는 250만원대여야 합니다", desc: "초대형 에어텐트, 합리성과 내구성 모두 갖춘", img: "https://cdn3.wadiz.kr/studio/images/2025/03/20/add1c2bd-688f-4ddf-a6f3-da43e3015552.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/256730" },
  { category: "여행레저", title: "이거 진짜 괴물이네. 괴물급 압력에 생활방수까지 울트라 에어펌프 5.0", desc: "무려 5.0Kpa 강한 압력에 보조배터리 기능까지", img: "https://cdn.wadiz.kr/wwwwadiz/green001/2022/0811/20220811154548337_158716.jpg/wadiz/resizecrop/600x315/composite/ne/format/jpg/quality/80", url: "https://www.wadiz.kr/web/campaign/detail/158716" },
  { category: "여행레저", title: "1분 착화 | 진공 포장 장작은 이렇게 진화했어야 합니다. 리박스 혁신장작", desc: "제주감귤로 만든 친환경 장작, 감귤 향을 즐길 수 있는 캠핑 장작", img: "https://cdn3.wadiz.kr/studio/images/2025/03/14/885fd7d3-3671-4263-b2ec-1573f148f413.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/342864" },
  { category: "패션잡화", title: "[오늘마감] 미국 1위 템퍼 매트리스 내 발에 | TEMPUR® 인솔", desc: "NASA에서 인정 받은 우주기술로 만든 TEMPUR® THE ZERO 인솔", img: "https://cdn3.wadiz.kr/studio/images/2025/08/28/e4afd37b-e696-4187-83dc-f6a51b7c73c8.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/370779" },
  { category: "패션잡화", title: "4만원대 | 눈부심과 가격거품 삭제. 선명함과 퀄리티만 남겼어요 VS-011", desc: "자외선 차단 99.9% / 하이앤드급 편광렌즈 선글라스", img: "https://cdn3.wadiz.kr/studio/images/2026/03/10/b34d88ef-8787-4855-ad75-ece6589ac29e.jpeg", url: "https://www.wadiz.kr/web/wcomingsoon/rwd/395220" },
  { category: "패션잡화", title: "[와디즈 최초공개] 비즈니스의 신뢰, 가방으로 말하다. 코럴리프 가방", desc: "프리미엄 사피아노 비건레더로 완성한 고급 비즈니스 가방", img: "https://cdn3.wadiz.kr/studio/images/2025/11/06/43671315-9a33-45da-bd8b-967f8f8337c7.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/374018" },
  { category: "홈리빙", title: "하루 딱 10분만! 천국의계단과 탄다 사이클 AI앱으로 급찐살 삭제", desc: "홈트 앱 탄다 사이클이 직접 천국의 계단까지 만들었습니다", img: "https://cdn3.wadiz.kr/studio/images/2025/09/30/506ae7a9-0878-4b4c-8c17-dcf15c0a5746.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/375554" },
  { category: "홈리빙", title: "[탄다 사이클] 저소음! 컴팩트 사이즈! 칼로리 삭제! 땀샘 폭발 홈트", desc: "탄다 사이클 앱과 집에서도 즐기는 실내 라이딩", img: "https://cdn3.wadiz.kr/studio/images/2025/12/15/aa84a356-d6cb-4e1b-9782-98783b113b83.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/383991" },
  { category: "홈리빙", title: "백화점산 최상급 메리노울 양모매트 | 만져보면 부드러움에 놀라실 거예요", desc: "최상급 메리노울, 호주산 양모 매트 인테리어", img: "https://cdn3.wadiz.kr/studio/images/2025/12/01/80c3e56e-0ecd-483d-88db-f51737912351.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/383910" },
  { category: "반려동물", title: "[대형견, 다견 엄마아빠 필수템] 120kg도 문제없는 애착웨건 등장!", desc: "전용 캐노피 + 1초 폴딩 + 완전 매트 세척 캠프365 파파웨건", img: "https://cdn3.wadiz.kr/studio/images/2025/05/27/1a1f7268-dd73-4b82-8cb1-48d5832efa8b.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/228078" },
  { category: "전시컬쳐", title: "2026 GOCF | 4월 봄나들이 고민? 아웃도어를 사랑한다면 바로여기", desc: "가평 자라섬에서 열리는 3일간의 아웃도어 대축제", img: "https://cdn3.wadiz.kr/studio/images/2026/03/05/c28d8735-3206-443a-8505-4fbf0a62ff47.jpeg", url: "https://www.wadiz.kr/web/wcomingsoon/rwd/394371" },
  { category: "자동차", title: "연비상승, 매연감소, 출력향상 효과를 단 한번의 주입으로 지속한다면?", desc: "레비온 지속형 스마트 연료 개선제", img: "https://cdn3.wadiz.kr/studio/images/2025/07/28/a4ea1207-ef54-472b-8d59-02aa4a6a81e0.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/364950" },
  { category: "자동차", title: "졸음운전 감지 기술, 나와 가족을 지키는 운전자 안전 솔루션", desc: "국내 유일 유럽 인증 기술 졸음 감지 모본 M60", img: "https://cdn3.wadiz.kr/studio/images/2025/11/28/21c7b502-666f-46f6-902d-8c54835c68a8.jpeg", url: "https://www.wadiz.kr/web/campaign/detail/381056" },
];

// ─── LOADER ───
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2000);
});

// ─── CURSOR GLOW ───
const glow = document.getElementById('cursorGlow');
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ─── NAV SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── COUNTER ANIMATION ───
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(update);
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

// ─── PORTFOLIO RENDER ───
const grid = document.getElementById('portfolioGrid');

function renderPortfolio(filter = 'all') {
  const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.category === filter);
  grid.innerHTML = '';
  filtered.forEach((item, i) => {
    const card = document.createElement('a');
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'portfolio-card reveal';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="portfolio-thumb-wrap">
        <img class="portfolio-thumb" src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="portfolio-category-badge">${item.category}</span>
      </div>
      <div class="portfolio-info">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <div class="portfolio-link-icon">자세히 보기 →</div>
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

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
