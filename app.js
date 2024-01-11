const questions = [
  {
    question: "질문",
    answer: {
      a: { text: '"<p bread-type="A">오오 그래??? 나중에 먹어봐야지</p>"' },
      b: { text: "답", type: "유형" },
    },
  },
  {
    question: "질문2",
    answer: {
      a: { text: "답", type: "유형" },
      b: { text: "답", type: "유형" },
    },
  },
  {
    question: "질문3",
    answer: {
      a: { text: "답", type: "유형" },
      b: { text: "답", type: "유형" },
    },
  },
];

// 태그 속성값을 배열에 넣는 예시
let test = document.getElementById("answer-left");
let answer = [];

test.addEventListener("click", (e) => {
  console.log(e.target.ou);
  answer.push(e.target.attributes[0].value);
  console.log(answer);
});

// 답안 프린트
console.log(questions[0].answer.a.text);

// 클릭시 푸쉬되는 값들 // 15개

let countA = answer.filter((item) => item === "a").length;
let countB = answer.filter((item) => item === "b").length; // 각각 개수 세어서

let scoreList; // 점수 배열에 푸쉬
let maxIndex1 = scoreList.indexOf(Math.max(...scoreList));
console.log(maxIndex1); // 가장 큰 수의 인덱스 불러오기

// 페이지가 바뀔때 해야하는 것,
// 질문객체 순회하는 인덱스 값 ++
// 프로그래스 바 +30px

답 = [0, 0, 0, 0, 0];
