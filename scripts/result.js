const breadResult = [
  {
    breadType: "팥붕어빵",
    comment: "이것은 팥붕어빵 입니다. ",
  },
  {
    breadType: "슈붕어빵",
    comment: "이것은 슈붕어빵 입니다. ",
  },
  {
    breadType: "피자붕어빵",
    comment: "이것은 피자붕어빵 입니다. ",
  },
  {
    breadType: "녹두붕어빵",
    comment: "이것은 녹두붕어빵 입니다. ",
  },
  {
    breadType: "고구마붕어빵",
    comment: "이것은 고구마붕어빵 입니다. ",
  },
];

const type = localStorage.getItem("breadType");
const resultImg = document.getElementById("bread-result-img");
const resultContent = document.getElementById("bread-result-content");
const resultInfo = document.getElementById("bread-result-info");
const shareBtn = document.getElementById("share");
const reloadBtn = document.getElementById("reload");

resultImg.attributes[1].value = `images/bread_${type}.png`;
resultContent.textContent = breadResult[type].breadType;
resultInfo.textContent = breadResult[type].comment;

reloadBtn.addEventListener("click", () => {
  location.href = "index.html";
});
