const breadResult = [
  {
    breadType: "팥붕어빵",
    comment:
      "팥붕어빵은 상황을 실용적으로 대처하면서도 고요한 팥 속에 담백한 맛이 있는데, 마치 사업가의 두뇌와 마음을 가진 것 같아요. 타인을 배려하고 사려 깊은 성향을 가지고 있어요. 문제를 신속하게 해결하면서도 주변에 신뢰를 주고 있어요.",
  },
  {
    breadType: "탕후루붕어빵",
    comment:
      "탕후루붕어빵은 상상력의 화신처럼 창의성과 독창성을 중요시하는 예술가 같아요. 고소한 탕후루와 다양한 과일이 마치 색다른 아이디어와 독특한 관점으로 세상을 바라보는 것을 상징해요. 판타지의 나래를 펼치며 새로운 가능성을 모색하는 것을 즐기고 있어요.",
  },
  {
    breadType: "슈붕어빵",
    comment:
      "녹두붕어빵은 따뜻한 마음을 가진 친구 같아요. 사회적인 활동을 중시하며, 주변에 활력을 불어넣고 다양한 관계를 형성하는 데 능숙해요. 친근한 녹두 속에 담백한 맛이 있어 사람들과의 소통을 즐기고 있어요.",
  },
  {
    breadType: "고구마붕어빵",
    comment:
      "피자붕어빵은 도전의 불꽃을 키우는 전쟁장의 지휘관 같아요. 끈질기게 목표를 향해 나아가면서 도전하는 모습이 인상적이에요. 목표를 달성하는 데에 대한 높은 욕구를 가지고 있으며, 주변에 미래를 개척하는 에너지를 불어넣고 있어요.",
  },
  {
    breadType: "녹두붕어빵",
    comment:
      "녹두붕어빵은 정확하게 현실을 파악하고 계획을 세우며, 체계적으로 실행하는 실용적인 계획가 같아요. 고소한 팥 속에 담백한 맛이 있는데, 예술적인 아이디어를 갖고 그것을 현실에 투영시켜 문제를 효율적으로 해결하는 데에 큰 자부심을 느끼고 있어요.",
  },
  {
    breadType: "피자붕어빵",
    comment:
      "피자붕어빵은 열정적이고 긍정적인 에너지를 가지며, 여러 경험과 즐거움을 추구하는 경향이 있어요. 독특하고 다양한 속재료가 마치 여러 경험을 즐기는 모습을 상징하고 있어요",
  },
];

const type = localStorage.getItem("breadType");
const resultImg = document.getElementById("bread-result-img");
const resultContent = document.getElementById("bread-result-content");
const resultInfo = document.getElementById("bread-result-info");
const shareBtn = document.getElementById("share");

resultImg.attributes[1].value = `images/bread_${type}.png`;
resultContent.textContent = breadResult[type].breadType;
resultInfo.textContent = breadResult[type].comment;

reloadBtn.addEventListener("click", () => {
  location.href = "index.html";
});

////공유하기버튼...잘안됩니다
function clip() {
  const url = "";
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = "window.location.href";
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("링크 복사완료!");
}

shareBtn.addEventListener("click", function () {
  clip();
});
