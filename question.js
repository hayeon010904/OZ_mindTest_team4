//하연 해야할 것들
//질문객체가 담긴 배열 만들기 -> 완!!
//클릭했을 때 배열을 하나씩 순회하면서 질문이랑 답 텍스트가 바뀌게 -> 완!!
//상단 진행 바 +30px -> 완!!

//버튼 눌렀을 때 점수 // -> 첫 질문을 html에서 설정 or js에서 설정?
// js에서 하는게 좋을 것 같은데 시작하기 눌렀을 때 바로 질문 뜨도록 설정해야하는디
// 방법1: js에서 첫 문제 띄우기 main html에 question.js연결해서 버튼 누르면 뜨도록
// 방법2: html로 하는 방법 : 수동으로 첫번째 문제의 class 값 배열에 담아주기
//가장 높은 점수 출력 하는 것 까지!!

//+
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

const answerArr = [0, 0, 0, 0, 0];
//질문객체가 담긴 배열 만들기
const questions = [
  {
    question: "친구가 마라 붕어빵이 맛있다며 먹어보라고 한다. 나의 대답은?",
    answers: {
      A: { text: "오오 그래? 나중에 먹어봐야지", class: "bread1" },
      B: { text: "무슨 맛 인데?", class: "bread2" },
    },
  },
  {
    question: "친구가 '나 속상해서 붕어빵 사먹었어' 라고 한다. 나의 반응은?",
    answers: {
      A: { text: "무슨 붕어빵?", class: "bread1" },
      B: { text: "왜 속상했어?", class: "bread2" },
    },
  },
  {
    question: "올해 첫 붕어빵을 먹었다. 친구들한테 자랑해야지",
    answers: {
      A: { text: "사진찍어서 인스타 스토리에 올린다", class: "bread3" },
      B: { text: "카톡으로 말해준다", class: "bread1" },
    },
  },
  {
    question:
      "자고 일어났더니 내가 붕어빵으로 변해있다. 가장 먼저 드는 생각은?",
    answers: {
      A: { text: "나 무슨 붕어빵 일까?", class: "bread5" },
      B: { text: "으악 춥다", class: "bread1" },
    },
  },
  {
    question: "어젯밥에 붕어빵으로 변하는 꿈을 꿨다. 친구한테 말해줄때 나는?",
    answers: {
      A: {
        text: "아 나 붕어빵 되는 꿈 꿨음 ㅋㅋ 붕어빵 먹으러 가실?",
        class: "bread4",
      },
      B: { text: "야 나 어제 꿈에서 슈붕됨 ㅋ 웃기지 ", class: "bread5" },
    },
  },
  {
    question: "내가 매일 가던 붕어빵 집이 문을 닫았다",
    answers: {
      A: { text: "헉 사장님 아프신 건 아니겠지?", class: "bread2" },
      B: { text: "아 길 건너편 붕어빵집 열었으려나", class: "bread4" },
    },
  },
  {
    question: "친구가 붕어빵 기게를 사서 붕어빵을 만들어먹고 싶다고 한다",
    answers: {
      A: { text: "근데 만들어 먹는 것 보다 사먹는게 쌀걸", class: "bread5" },
      B: { text: "오오 재밌겠다 만들때 나도 불러줘", class: "bread3" },
    },
  },
  {
    question: "친구가 붕어빵을 만들어줬다. 나의 반응은?",
    answers: {
      A: { text: "뭐임? 붕어빵 기계 샀음?", class: "bread5" },
      B: { text: "와 개맜있다 !! 붕어빵 장사하셈", class: "bread3 " },
    },
  },
  {
    question: "붕어빵 집 앞에 줄이 엄청 길게 서있다",
    answers: {
      A: { text: "헐 맛집인가 보네. 나도 나중에 먹어봐야지", class: "bread4" },
      B: { text: "저 붕어빵 집 몇시에 열지? 오픈런해야지", class: "bread1" },
    },
  },
  {
    question: "오늘따라 붕어빵 반죽이 맛이 없다",
    answers: {
      A: { text: "오늘 계랑 잘못하셨나보넹", class: "bread5" },
      B: { text: "사장님 무슨 일 있으신가", class: "bread2" },
    },
  },
  {
    question: "사장님이 신메뉴로 시금치 붕어빵을 만들었다고 먹어보라고한다",
    answers: {
      A: { text: "오! 신메뉴! 먹어봐야한다.", class: "bread3" },
      B: { text: "그냥 원래 먹던 팥붕 먹는다", class: "bread1" },
    },
  },
  {
    question: "팥붕 5개를 샀는데 슈붕 5개를 주셨다",
    answers: {
      A: { text: "슈붕 안좋아하는데.. 그냥 먹는다", class: "bread2" },
      B: { text: "사장님께 말씀드리고 바꿔먹는다", class: "bread1" },
    },
  },
  {
    question: "자주가던 붕어빵 사장님이 나를 알아보고 반갑게 인사한다",
    answers: {
      A: { text: "어.. 내일부터는 다른 데 가야겠네", class: "bread2" },
      B: { text: "오 사장님 센스! 더 자주 와야지", class: "bread3" },
    },
  },
  {
    question: "오랜만에 쉬는 날. 갑자기 친구가 붕어빵을 사왔으니 나오라고 한다",
    answers: {
      A: { text: "당장 출동~!!~ 나갈준비한다", class: "bread4" },
      B: {
        text: "쉬고싶은데 .. 그래도 붕어빵을 사왔으니까 ..",
        class: "bread5",
      },
    },
  },
  {
    question: "나는 슈크림, 친구는 팥 붕어빵을 샀다",
    answers: {
      A: { text: "하나씩 바꿔서 먹는다", class: "bread2" },
      B: { text: "내가 산 슈크림만 먹는다?", class: "bread4" },
    },
  },
];


//답변 클릭했을 때 배열을 하나씩 순회하면서 질문이랑 답 텍스트가 바뀌게 + 콘솔에 붕어빵 종류 담기게
let ArrIndex = 1;
const classArr = []; //class값 담아주는 배열 -> 최종적으로 15개 담깁니다!
// 위 버튼 선택했을 때
answerTop.addEventListener("click", function () {
    if (ArrIndex < questions.length) {
      question.textContent = questions[ArrIndex].question;
      answerTop.textContent = questions[ArrIndex].answers.A.text;
      answerBottom.textContent = questions[ArrIndex].answers.B.text;
      //Class값 저장
      const answerAclass = questions[ArrIndex-1].answers.A.class;
      console.log(answerAclass); //질문에 맞는 class 값인지 확인용
      classArr.push(answerAclass); // 배열에 어떤 붕어빵인지 넣어주기
      console.log(classArr); // 배열에 잘 들어갔는지 확인
       
      ArrIndex++;
      // 진행바 +30px씩
      const progressBar = document.querySelector(".progressbar-bar");
      const currnetWIdth = progressBar.offsetWidth; // 30
      const newWidth = currnetWIdth + 30; // 30씩 추가
      progressBar.style.width = newWidth + "px";
    } 
  });
//아래버튼 선택했을 때
answerBottom.addEventListener("click", function () {
  if (ArrIndex < questions.length) {
    question.textContent = questions[ArrIndex].question;
    answerTop.textContent = questions[ArrIndex].answers.A.text;
    answerBottom.textContent = questions[ArrIndex].answers.B.text;
    //Class값 저장
    const answerBclass = questions[ArrIndex - 1].answers.B.class;
    console.log(answerBclass); //질문에 맞는 class 값인지 확인용
    classArr.push(answerBclass); // 배열에 어떤 붕어빵인지 넣어주기
    console.log(classArr); // 배열에 잘 들어갔는지 확인

    // if(ArrIndex===14){//마지막 질문일때의 class 값 수동으로 배열에 넣어주기!
    //     const answerAClass = questions[14].answers.A.class;
    //     classArr.push(answerAClass);
    //     console.log(classArr);
    // }
    ArrIndex++;
    // 진행바 +30px씩
    const progressBar = document.querySelector(".progressbar-bar");
    const currnetWIdth = progressBar.offsetWidth; // 30
    const newWidth = currnetWIdth + 30; // 30씩 추가
    progressBar.style.width = newWidth + "px";
  }
});

// const answerBClass = questions[ArrIndex].answers.B.class;
// console.log(answerBClass)
// //아래부터는 점수계산 시도들..~

// const breadclassA = questions[ArrIndex].answers.A.class; // bread1
// const breadclassB = questions[ArrIndex].answers.B.class; //bread2

//    console.log(breadclass1)
//    console.log(breadclass2)

//    if (breadclassA === 'bread1') {
//         answer.addEventListener("click", function () {
//         answerArr[0] += 1
//         console.log(answerArr);
//       });
//      elseIf(breadclassA === 'bread2');{
//             answer.addEventListener("click", function () {
//             answerArr[1] += 1
//             console.log(answerArr);
//           });
//      }
//    } else {

//    }
