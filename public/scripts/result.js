const breadResult = [
  {
    breadType: "팥붕어빵",
    comment:
      "당신은 붕어빵의 리더 팥 붕어빵! \n 주변에 쉽게 휘둘리지않고 단단한 팥 처럼 상황을 잘 해결하는 타입이에요. 가끔 주위 사람들에게 냉정하다고 보일 수 있지만, 속으로는 항상 타인을 배려하고있어요. 그런 당신을 신뢰하는 사람들이 많답니다.",
  },
  {
    breadType: "탕후루붕어빵",
    comment:
      "당신은 호기심 가득 탕후루 붕어빵! \n 탕후루와 붕어빵. 그 누구도 생각하지 못한 조합을  당신은 일상처럼 생각해내는 독창적인 생각의 소유자같아요. 알록달록 탕후루처럼 사람들 사이에 있는 것을 좋아하며  그런 당신 곁에는 항상 사람들이 많답니다. .",
  },
  {
    breadType: "슈붕어빵",
    comment:
      "당신은 따뜻한 마음을 가진 슈붕어빵! \n 항상 주변에 활력을 불어넣고 다양한 관계 속에서 잘 지내는 타입이에요. 그만큼 상처도 잘 받지만, 또 그 상처를 치료해주는 것은 사람이죠. 따뜻한 붕어빵 속 달달한 슈크림 같은 마음이  사람들과의 소통을 원활하게 해준답니다.",
  },
  {
    breadType: "고구마붕어빵",
    comment:
      "당신은 불타는 열정을 가진 고구마붕어빵! \n 어떤 일이든 최선을 다하고, 결과도 잘 따라와주는 타입이에요. 그래서인지 다른 사람이 하는 것 보다 내가 하는 게 더 마음이 편할 때가 많아요. 하지만 자신의 바운더리 안에 들어오면 한없이 헌신적이랍니다. ",
  },
  {
    breadType: "녹두붕어빵",
    comment:
      "당신은 모범생 녹두붕어빵! \n 상황을 현실적으로 바라보며 안정적인 일상을 추구하는 타입이에요.  그만큼 문제가 생기면 책임감을 가지고 논리적인 사고로 효율적으로 해결하는 능력이 있답니다. 처음 본 사람과는 낯가림이 심하지만, 친해지면 이만큼 재밌는 사람이 없답니다.",
  },
  {
    breadType: "피자붕어빵",
    comment:
      "당신은 붕어빵 중의 연예인 피자붕어빵! \n 누구도 따라올 수 없는 에너지로 항상 분위기를 잘 이끌어주는 타입이에요.  다양한 재료가 섞인 피자처럼, 어떤 상황에서도 잘 적응하고 은근 현실적이랍니다. '재밌다'가 제일 기분 좋은 칭찬일만큼 다른 사람들을 기쁘게하는 것을 좋아해요.",
  },
];

const type = localStorage.getItem("breadType");
const resultImg = document.getElementById("bread-result-img");
const resultContent = document.getElementById("bread-result-content");
const resultInfo = document.getElementById("bread-result-info");
const shareBtn = document.getElementById("share");

resultImg.attributes[1].value = `images/bread_${type}.png`;
resultContent.innerText = breadResult[type].breadType;
resultInfo.innerText = breadResult[type].comment;

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
