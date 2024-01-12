// 질문.답 자연스럽게 정, 줄바꿈설정
// 이전 버튼 눌렀을 때 이전 질문으로 돌아가는데, 눌렀던 버튼이 저장되도록
// 로컬스토리지에 사용자정보 저장 -> 다시 돌아오면 결과화면뜨도록.

const question = document.getElementById("question");
const answer = document.querySelector(".answers");
const bread1 = document.querySelector(".bread1");
const bread2 = document.querySelector(".bread2");
const bread3 = document.querySelector(".bread3");
const bread4 = document.querySelector(".bread4");
const bread5 = document.querySelector(".bread5");
const answerTop = document.querySelector("#answer-left");
const answerBottom = document.querySelector("#answer-right");

const answerArr = [];
const questions = [
  {
    question: "친구가 마라 붕어빵이 맛있다며 먹어보라고 한다. 나의 대답은?",
    answers: {
      A: { text: "오오 그래? 나중에 먹어봐야지", type: "bread1" },
      B: { text: "무슨 맛 인데?", type: "bread2" },
    },
  },
  {
    question: "친구가 '나 속상해서 붕어빵 사먹었어' 라고 한다. 나의 반응은?",
    answers: {
      A: { text: "무슨 붕어빵?", type: "bread1" },
      B: { text: "왜 속상했어?", type: "bread2" },
    },
  },
  {
    question: "올해 첫 붕어빵을 먹었다. 친구들한테 자랑해야지",
    answers: {
      A: { text: "사진찍어서 인스타 스토리에 올린다", type: "bread3" },
      B: { text: "카톡으로 말해준다", type: "bread1" },
    },
  },
  {
    question:
      "자고 일어났더니 내가 붕어빵으로 변해있다. 가장 먼저 드는 생각은?",
    answers: {
      A: { text: "나 무슨 붕어빵 일까?", type: "bread5" },
      B: { text: "으악 춥다", type: "bread1" },
    },
  },
  {
    question: "어젯밥에 붕어빵으로 변하는 꿈을 꿨다. 친구한테 말해줄때 나는?",
    answers: {
      A: {
        text: "아 나 붕어빵 되는 꿈 꿨음 ㅋㅋ 붕어빵 먹으러 가실?",
        type: "bread4",
      },
      B: { text: "야 나 어제 꿈에서 슈붕됨 ㅋ 웃기지 ", type: "bread5" },
    },
  },
  {
    question: "내가 매일 가던 붕어빵 집이 문을 닫았다",
    answers: {
      A: { text: "헉 사장님 아프신 건 아니겠지?", type: "bread2" },
      B: { text: "아 길 건너편 붕어빵집 열었으려나", type: "bread4" },
    },
  },
  {
    question: "친구가 붕어빵 기게를 사서 붕어빵을 만들어먹고 싶다고 한다",
    answers: {
      A: { text: "근데 만들어 먹는 것 보다 사먹는게 쌀걸", type: "bread5" },
      B: { text: "오오 재밌겠다 만들때 나도 불러줘", type: "bread3" },
    },
  },
  {
    question: "친구가 붕어빵을 만들어줬다. 나의 반응은?",
    answers: {
      A: { text: "뭐임? 붕어빵 기계 샀음?", type: "bread5" },
      B: { text: "와 개맜있다 !! 붕어빵 장사하셈", type: "bread3 " },
    },
  },
  {
    question: "붕어빵 집 앞에 줄이 엄청 길게 서있다",
    answers: {
      A: { text: "헐 맛집인가 보네. 나도 나중에 먹어봐야지", type: "bread4" },
      B: { text: "저 붕어빵 집 몇시에 열지? 오픈런해야지", type: "bread1" },
    },
  },
  {
    question: "오늘따라 붕어빵 반죽이 맛이 없다",
    answers: {
      A: { text: "오늘 계랑 잘못하셨나보넹", type: "bread5" },
      B: { text: "사장님 무슨 일 있으신가", type: "bread2" },
    },
  },
  {
    question: "사장님이 신메뉴로 시금치 붕어빵을 만들었다고 먹어보라고한다",
    answers: {
      A: { text: "오! 신메뉴! 먹어봐야한다.", type: "bread3" },
      B: { text: "그냥 원래 먹던 팥붕 먹는다", type: "bread1" },
    },
  },
  {
    question: "팥붕 5개를 샀는데 슈붕 5개를 주셨다",
    answers: {
      A: { text: "슈붕 안좋아하는데.. 그냥 먹는다", type: "bread2" },
      B: { text: "사장님께 말씀드리고 바꿔먹는다", type: "bread1" },
    },
  },
  {
    question: "자주가던 붕어빵 사장님이 나를 알아보고 반갑게 인사한다",
    answers: {
      A: { text: "어.. 내일부터는 다른 데 가야겠네", type: "bread2" },
      B: { text: "오 사장님 센스! 더 자주 와야지", type: "bread3" },
    },
  },
  {
    question: "오랜만에 쉬는 날. 갑자기 친구가 붕어빵을 사왔으니 나오라고 한다",
    answers: {
      A: { text: "당장 출동~!!~ 나갈준비한다", type: "bread4" },
      B: {
        text: "쉬고싶은데 .. 그래도 붕어빵을 사왔으니까 ..",
        type: "bread5",
      },
    },
  },
  {
    question: "나는 슈크림, 친구는 팥 붕어빵을 샀다",
    answers: {
      A: { text: "하나씩 바꿔서 먹는다", type: "bread2" },
      B: { text: "내가 산 슈크림만 먹는다?", type: "bread4" },
    },
  },
];
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

//답변 클릭했을 때 배열을 하나씩 순회하면서 질문이랑 답 텍스트가 바뀌게 + 콘솔에 붕어빵 종류 담기게
let ArrIndex = 1;
const typeArr = []; //type 담아주는 배열 -> 최종적으로 15개 담깁니다!

answerTop.addEventListener("click", function () {
  if (ArrIndex < questions.length) {
    const answerAType = questions[ArrIndex - 1].answers.A.type;
    typeArr.push(answerAType); // 배열에 어떤 붕어빵인지 넣어주기 /
    questionPrint();
    progressBarPrint();
    console.log(typeArr);
  } else {
    const answerAType = questions[ArrIndex - 1].answers.A.type;
    typeArr.push(answerAType); // 배열에 어떤 붕어빵인지 넣어주기

    location.href = "result.html";
    let arrMaxIndex = maxBreadIndex(typeArr);
    printResult(arrMaxIndex);
    console.log(typeArr);
  }
});

answerBottom.addEventListener("click", function () {
  if (ArrIndex < questions.length) {
    const answerBType = questions[ArrIndex - 1].answers.B.type;
    typeArr.push(answerBType); // 배열에 어떤 붕어빵인지 넣어주기
    questionPrint();
    progressBarPrint();
    console.log(typeArr);
  } else {
    const answerBType = questions[ArrIndex - 1].answers.B.type;
    typeArr.push(answerBType); // 배열에 어떤 붕어빵인지 넣어주기
    console.log(typeArr);

    location.href = "result.html";
    let arrMaxIndex = maxBreadIndex(typeArr);
    printResult(arrMaxIndex);
  }
});

function questionPrint() {
  question.textContent = questions[ArrIndex].question;
  answerTop.textContent = questions[ArrIndex].answers.A.text;
  answerBottom.textContent = questions[ArrIndex].answers.B.text;
  ArrIndex++;
}

function progressBarPrint() {
  const progressBar = document.querySelector(".progressbar-bar");
  const currentWidth = progressBar.offsetWidth; // 30
  progressBar.style.width = currentWidth + 30 + "px";
}
// 최대값 구하기!!
function maxBreadIndex(arr) {
  for (let i = 0; i < 5; i++) {
    answerArr.push(
      arr.reduce(
        (count, element) => (element === `bread${i}` ? count + 1 : count),
        0
      )
    );
  }
  let maxIndex = answerArr.indexOf(Math.max(...answerArr));
  console.log(answerArr);
  console.log(maxIndex);
  return localStorage.setItem("breadtype", maxIndex);
}
