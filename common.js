// 공통: 헤더/푸터, 숫자 포맷, 콤마 입력
const SITE = "계산<span>모아</span>";
const CALCS = [
  ["yearend.html", "연말정산 계산기", "2025년 귀속 환급금 미리 계산"],
  ["salary.html", "연봉 실수령액 계산기", "2026년 4대보험·소득세 반영"],
  ["broker.html", "중개수수료 계산기", "매매·전세·월세 중개보수"],
  ["loan.html", "대출이자 계산기", "원리금균등·원금균등·만기일시"],
  ["savings.html", "적금·예금 이자 계산기", "단리/복리, 세후 수령액"],
  ["severance.html", "퇴직금 계산기", "평균임금 기준 법정 퇴직금"],
  ["rent.html", "전월세 전환 계산기", "보증금 ↔ 월세 환산"],
  ["area.html", "평수 계산기", "㎡ ↔ 평 변환"],
  ["age.html", "만나이 계산기", "만나이·연나이·띠·D-day"],
  ["percent.html", "퍼센트 계산기", "비율·증감률·%p 계산"],
  ["vat.html", "부가세 계산기", "공급가액 ↔ 합계금액"],
  ["bmi.html", "BMI 계산기", "체질량지수·비만도"],
  ["dday.html", "날짜·D-day 계산기", "며칠 남았는지, 며칠 후"],
  ["hourly.html", "시급·주휴수당 계산기", "2026 최저시급 10,320원"],
  ["charcount.html", "글자수 세기", "공백 포함·제외, 바이트"],
  ["discount.html", "할인율 계산기", "할인 가격·할인율 역산"],
  ["leave.html", "연차 계산기", "입사일 기준 연차 일수"],
];

document.addEventListener("DOMContentLoaded", () => {
  const h = document.querySelector("header");
  if (h) h.innerHTML = `<div class="wrap top"><a class="logo" href="index.html">${SITE}</a>
    <nav>${CALCS.slice(0, 4).map(c => `<a href="${c[0]}">${c[1].replace(" 계산기", "")}</a>`).join("")}</nav></div>`;
  const f = document.querySelector("footer");
  if (f) f.innerHTML = `<a href="about.html">서비스 소개</a> · <a href="privacy.html">개인정보처리방침</a> · <a href="contact.html">문의</a><br>계산 결과는 참고용이며 실제 금액은 금융기관·법령 기준에 따라 달라질 수 있습니다.<br>© ${new Date().getFullYear()} 계산모아`;
  const more = document.querySelector("#more");
  if (more) {
    const here = location.pathname.split("/").pop();
    more.innerHTML = `<h2 style="font-size:16px;margin:0 0 10px">다른 계산기</h2><div class="grid">` +
      CALCS.filter(c => c[0] !== here).map(c => `<a class="tile" href="${c[0]}"><b>${c[1]}</b><small>${c[2]}</small></a>`).join("") + `</div>`;
  }
  // 금액 입력칸 콤마 자동
  document.querySelectorAll("input.money").forEach(el => {
    el.setAttribute("inputmode", "numeric");
    el.addEventListener("input", () => {
      const v = el.value.replace(/[^0-9]/g, "");
      el.value = v ? Number(v).toLocaleString("ko-KR") : "";
    });
  });
});

const num = id => {
  const el = document.getElementById(id);
  return Number(String(el.value).replace(/,/g, "")) || 0;
};
const won = n => Math.round(n).toLocaleString("ko-KR") + "원";
const kv = (k, v) => `<div class="kv"><span>${k}</span><b>${v}</b></div>`;
function show(id, html) {
  const r = document.getElementById(id);
  r.innerHTML = html;
  r.classList.add("show");
}
