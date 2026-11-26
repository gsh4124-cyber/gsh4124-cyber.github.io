// 계산기 주제에 맞는 쿠팡 파트너스 추천 (계산 카드 바로 아래에 한 번만 표시)
(() => {
  "use strict";
  const DISCLOSURE = "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";
  const SETS = {
    elec: { title: "전기요금 줄이는 데 도움 되는 것", items: [
      ["절전", "에코파워탭 LED 절전형 L자 멀티탭 1구 (2개)", "안 쓰는 가전의 대기전력을 스위치로 끊어요", "https://link.coupang.com/a/iZsAKmVrI4"],
      ["사용량 확인", "타포 스마트 에너지 모니터링 플러그", "어느 가전이 전기를 많이 먹는지 앱으로 봐요", "https://link.coupang.com/a/iZsFgtbmBE"],
      ["개별 스위치", "필립스 멀티탭 맥스 서지보호 6구", "구마다 따로 끌 수 있어요", "https://link.coupang.com/a/iZsBR5RNpQ"]] },
    car: { title: "차 관리에 자주 찾는 것", items: [
      ["거치대", "VHBW 송풍구 클립형 휴대폰 거치대", "내비 보기 편하게", "https://link.coupang.com/a/iZsDuTay6e"],
      ["안전 점검", "디지털 타이어 공기압 게이지", "공기압만 맞춰도 연비가 좋아져요", "https://link.coupang.com/a/iZsDPZ34Jo"],
      ["실내 청소", "포스젯 맥스 무선 차량용 청소기", "시트 틈새 먼지까지", "https://link.coupang.com/a/iZsEbv7FcW"]] },
    move: { title: "이사·정리할 때 같이 보면 좋은 것", items: [
      ["이사", "코멧 두꺼운 이사박스 3T (5개)", "테이프 감기 쉬운 두꺼운 박스", "https://link.coupang.com/a/iZsH6eUz00"],
      ["수납", "잔비오 접이식 패브릭 리빙박스 (4개)", "이불·옷 정리를 한 번에", "https://link.coupang.com/a/iZsIr6Sonc"],
      ["부피 줄이기", "진공 압축팩 (펌프 포함, 6개입)", "겨울 이불 부피를 확 줄여요", "https://link.coupang.com/a/iZsINN8Oe4"]] },
    money: { title: "돈 관리할 때 같이 쓰면 좋은 것", items: [
      ["기록", "인디고 만년형 가계부·용돈기입장", "날짜 없이 언제든 시작해요", "https://link.coupang.com/a/iZsHo6apk4"],
      ["저축 습관", "프리브 머니핏 현금 바인더", "봉투 저축으로 지출을 나눠요", "https://link.coupang.com/a/iZsKoNTdN6"],
      ["계산", "카시오 일반 계산기 JS-40B", "사무실 표준 계산기", "https://link.coupang.com/a/iZsI9fzsbs"]] }
  };
  const page = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  const key = /^electric/.test(page) ? "elec" : page === "cartax" ? "car"
    : ["area", "broker", "rent"].includes(page) ? "move"
    : /^salary/.test(page) || ["yearend", "hourly", "savings"].includes(page) ? "money" : null;
  if (!key) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const put = () => {
    const card = document.querySelector("main > .card");
    if (!card || document.querySelector(".rec")) return;
    const s = SETS[key], box = document.createElement("section");
    box.className = "card rec";
    box.innerHTML = `<h2>${esc(s.title)}</h2><div class="rec-grid">${s.items.map(([tag, name, note, url]) =>
      `<a class="rec-item" href="${esc(url)}" target="_blank" rel="sponsored noopener" referrerpolicy="unsafe-url"><small>${esc(tag)}</small><b>${esc(name)}</b><span>${esc(note)}</span><em>쿠팡에서 보기 →</em></a>`).join("")}</div><p class="rec-note">${DISCLOSURE} 가격·배송 조건은 쿠팡에서 확인하세요.</p>`;
    card.after(box);
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", put) : put();
})();
