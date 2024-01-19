import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const API_KEY = config.apikey;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "oz-project-16f76.firebaseapp.com",
  projectId: "oz-project-16f76",
  storageBucket: "oz-project-16f76.appspot.com",
  messagingSenderId: "603853071891",
  appId: "1:603853071891:web:8f5897ccba3d96e7e541e6",
};
const appFS = initializeApp(firebaseConfig);
const db = getFirestore(appFS);
let bufCount;

async function getCount() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    bufCount = Number(doc.data().count);
    bufCount++;
    console.log(bufCount);
    updateCount();
  });
}

async function updateCount() {
  const userRefUpdate = doc(db, "users", "0");

  // Set the "capital" field of the city 'DC'
  await updateDoc(userRefUpdate, {
    count: bufCount,
  });
}

getCount();
const question = document.getElementById("question");
const answerTop = document.querySelector("#answer-left");
const answerBottom = document.querySelector("#answer-right");
const backBtn = document.getElementById("back");

const answerArr = [];
const questions = [
  {
    question:
      "자고 일어났더니 내가 붕어빵으로 변해있다. 가장 먼저 드는 생각은?",
    answers: {
      A: { text: "이런 슈붕..", type: "bread1" },
      B: { text: "나 무슨 붕어빵일까? ㅎㅎ 팥붕이면 좋겠다", type: "bread2" },
    },
  },
  {
    question: `만약, 당신이 붕어빵 가게 사장님이라면, \n  어떤 전략을 세울건가요?`,
    answers: {
      A: { text: "요즘은 무조건 홍보! 적극 SNS 활용", type: "bread3" },
      B: { text: "근본은 맛이지. 맛도리 붕어빵을 만들거야!", type: "bread6" },
    },
  },
  {
    question: "올해 첫 붕어빵을 먹었다. \n 친구들한테 자랑해야지",
    answers: {
      A: { text: "사진찍어서 인스타 스토리에 올린다", type: "bread6" },
      B: { text: "카톡으로 말해준다", type: "bread4" },
    },
  },
  {
    question:
      "둘 중 하나에 참여하면 붕어빵을 서비스로 준다! 어떤 이벤트에 참여할 것인가? ",
    answers: {
      A: { text: "붕어빵 맛있게 먹기 대회", type: "bread6" },
      B: { text: "붕어빵 많이 먹기 대회", type: "bread4" },
    },
  },
  {
    question: "친구가 붕어빵기게를 샀다며 만들어먹자고한다. \n 나의 반응은?",
    answers: {
      A: {
        text: "친구야 붕어빵 기게 사는게 더 비싸지 않니?",
        type: "bread5",
      },
      B: { text: "헐! 재밌겠다 당장 가져와", type: "bread2" },
    },
  },
  {
    question:
      "당신은 붕어빵가게 사장님! \n  손님이 나에게 했을때 더 기분 좋은 말은?",
    answers: {
      A: {
        text: "사장님 매일 연구하시더니  \n 여기 붕어빵이 세상에서 제일 맛있어요..",
        type: "bread6",
      },
      B: {
        text: "사장님 인스타보면 매일 놀러다니시는 것 같은데  \n  왜 이렇게 맛있어요?????",
        type: "bread3",
      },
    },
  },
  {
    question: "친구가 나 속상해서 붕어빵 사먹었어 라고 한다.  \n 나의 반응은?",
    answers: {
      A: { text: "... 무슨 붕어빵?", type: "bread1" },
      B: { text: "왜 속상했어? ", type: "bread4" },
    },
  },
  {
    question: "붕어빵을 먹을 때!",
    answers: {
      A: { text: "머리부터 먹는다.", type: "bread6" },
      B: { text: "꼬리부터 먹는다", type: "bread5" },
    },
  },
  {
    question: "내가 매일 가던 붕어빵 가게가 오늘 문을 닫았다",
    answers: {
      A: { text: "헉 사장님 어디 아프신가? ㅠ", type: "bread2" },
      B: { text: "길건너편 붕어빵가게 몇시에 열더라", type: "bread1" },
    },
  },
  {
    question:
      "신메뉴 아이디어가 떠올랐는데, \n  손님들이 좋아할 지 모르겠다.  나의 선택은?",
    answers: {
      A: { text: "일단 만들어서 도전해본다", type: "bread2" },
      B: {
        text: "손님들에게 조사해보고 좋아하실 것 같으면 출시한다",
        type: "bread4",
      },
    },
  },
  {
    question: "붕어빵과 잘 어울리는 음료는?",
    answers: {
      A: { text: "붕어빵엔 우유지", type: "bread3" },
      B: { text: "붕어빵엔 아메리카노지", type: "bread1" },
    },
  },
  {
    question: "신메뉴 마라붕어빵이 생각보다 너무 잘 팔린다.\n  당신의 선택은?",
    answers: {
      A: { text: "마라붕어빵만 집중 판매한다.", type: "bread5" },
      B: {
        text: "슈크림이랑 팥 붕어빵도 팔아야하니까..\n  기존의 붕어빵을 사먹도록 유도한다.",
        type: "bread5",
      },
    },
  },
  {
    question:
      "우리 가게 옆에 붕어빵 가게가 생겼다. \n  그런데 마라붕어빵이 메뉴에 있다..!? \n 나의 대응은?",
    answers: {
      A: { text: "옆 가게에 가서 따진다. ", type: "bread5" },
      B: {
        text: " 화가 나지만 어쩔 수 없지하며 신메뉴를 개발한다. ",
        type: "bread1",
      },
    },
  },
  {
    question: "맛있는 붕어빵을 샀다. 한 입 먹으려는 순간…!",
    answers: {
      A: { text: "나 먹으려고?.. 붕어빵이 내게 말을 한다", type: "bread2" },
      B: {
        text: "앗뜨거 붕어빵에서 팥이 흘러나왔다. ..",
        type: "bread3",
      },
    },
  },
  {
    question:
      "자주가던 붕어빵 가게 사장님이 나를 알아보고 서비스로 붕어빵 하나를 더 주신다.",
    answers: {
      A: { text: "우와! 사장님 센스 ㅎㅎ 더 자주 와야지", type: "bread3" },
      B: {
        text: "어.. 좋은데 부담 ㅠ 내일부터는 조금씩 와야지ㅠ",
        type: "bread4",
      },
    },
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
    backBtn.style.display = "block";
  } else {
    const answerAType = questions[ArrIndex - 1].answers.A.type;
    typeArr.push(answerAType); // 배열에 어떤 붕어빵인지 넣어주기
    location.href = "result.html";
    maxBreadIndex(typeArr);
  }
});

answerBottom.addEventListener("click", function () {
  if (ArrIndex < questions.length) {
    const answerBType = questions[ArrIndex - 1].answers.B.type;
    typeArr.push(answerBType); // 배열에 어떤 붕어빵인지 넣어주기
    questionPrint();
    progressBarPrint();
    console.log(typeArr);
    backBtn.style.display = "block";
  } else {
    location.href = "result.html";
    maxBreadIndex(typeArr);
  }
});

function questionPrint() {
  question.innerText = questions[ArrIndex].question;
  answerTop.innerText = questions[ArrIndex].answers.A.text;
  answerBottom.innerText = questions[ArrIndex].answers.B.text;
  ArrIndex++;
}
function progressBarPrint() {
  const progressBar = document.querySelector(".progressbar-bar");
  const currentWidth = progressBar.offsetWidth; // 30
  progressBar.style.width = currentWidth + 30 + "px";
}
// 화살표 눌렀을 때, 이전 질문과 답으로 돌아가도록. (인덱싱오류.... )
// 뒤로 갈때 배열에 담긴 이전 답변도 삭제해야함

backBtn.onclick = function () {
  if (ArrIndex > 1) {
    ArrIndex--;
    question.innerText = questions[ArrIndex-1].question;
    answerTop.innerText = questions[ArrIndex-1].answers.A.text;
    answerBottom.innerText = questions[ArrIndex-1].answers.B.text;
    typeArr.pop(); // 배열의 마지막 요소 삭제
    console.log(typeArr); // 없어졌는지 확인

    const progressBar = document.querySelector(".progressbar-bar");
    const currentWidth = progressBar.offsetWidth; // 30
    progressBar.style.width = currentWidth - 30 + "px";
  }
};

// 최대값 구하기!!
function maxBreadIndex(arr) {
  for (let i = 0; i < 6; i++) {
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
  return localStorage.setItem("breadType", maxIndex);
}
