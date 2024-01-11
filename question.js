    //해야할 것들
    //질문객체가 담긴 배열 만들기
    //클릭했을 때 배열을 하나씩 순회하면서 질문이랑 답 텍스트가 바뀌게
    //버튼 눌렀을 때 점수 +
    //눌렀을 때 누른 버튼 색이 유지되도록.
    //버늩 누른 후에 문제,답변 바뀌기 -> 텍스트만 바꿜지. 화면 전체를 바꿀지
    //된다면) 이전 이후 질문으로
    //가장 높은 점수 출력.
    
    //버튼 클릭했을 때 점수 부여//
    const question = document.getElementById('question')
    const answer = document.querySelector('.answers')
    const bread1 = document.querySelector(".bread1");
    const bread2 = document.querySelector(".bread2");
    const bread3 = document.querySelector(".bread3");
    const bread4 = document.querySelector(".bread4");
    const bread5 = document.querySelector(".bread5");
    const answerTop = document.querySelector("#answer-left")
    const answerBottom = document.querySelector("#answer-right")
    const answerArr = [0, 0, 0, 0, 0];
 //질문객체가 담긴 배열 만들기
    const questions = [ 
        {
        question: "친구가 '나 속상해서 붕어빵 사먹었어' 라고 한다. 나의 반응은?",
        answers: {
            A : {text: "무슨 붕어빵?", class: "bread1"}, 
            B : {text: "왜 속상했어?", class: "bread2"},
        }},
             {
        question: "올해 첫 붕어빵을 먹었다. 친구들한테 자랑해야지",
        answers: {
            A : {text: "사진찍어서 인스타 스토리에 올린다", class: "bread3"},
            B : {text: "카톡으로 말해준다", class: "bread1"}
        }},
             {
        question: "자고 일어났더니 내가 붕어빵으로 변해있다. 가장 먼저 드는 생각은?",
        answers: {
            A : {text: "나 무슨 붕어빵 일까?", class: "bread5"},
            B : {text: "으악 춥다", class: "bread1"}
        }},
             {
        question: "어젯밥에 붕어빵으로 변하는 꿈을 꿨다. 친구한테 말해줄때 나는?",
        answers: {
            A : {text: "아 나 붕어빵 되는 꿈 꿨음 ㅋㅋ 붕어빵 먹으러 가실?", class: "bread4"},
            B : {text: "야 나 어제 꿈에서 슈붕됨 ㅋ 웃기지 ", class: "bread5"}
        }},
             {
        question: "내가 매일 가던 붕어빵 집이 문을 닫았다",
        answers: {
            A : {text: "헉 사장님 아프신 건 아니겠지?", class: "bread2"},
            B : {text: "아 길 건너편 붕어빵집 열었으려나", class: "bread4"}
        }},
             {
        question: "친구가 붕어빵 기게를 사서 붕어빵을 만들어먹고 싶다고 한다",
        answers: {
            A : {text: "근데 만들어 먹는 것 보다 사먹는게 쌀걸", class: "bread5"},
            B : {text: "오오 재밌겠다 만들때 나도 불러줘", class: "bread3"}
        }},
             {
        question: "친구가 붕어빵을 만들어줬다. 나의 반응은?",
        answers: {
            A : {text: "뭐임? 붕어빵 기계 샀음?", class: "bread5"},
            B : {text: "와 개맜있다 !! 붕어빵 장사하셈", class: "bread3 "}
        }},
             {
        question: "붕어빵 집 앞에 줄이 엄청 길게 서있다",
        answers: {
            A : {text: "헐 맛집인가 보네. 나도 나중에 먹어봐야지", class: "bread4"},
            B : {text: "저 붕어빵 집 몇시에 열지? 오픈런해야지", class: "bread1"}
        }},
             {
        question: "오늘따라 붕어빵 반죽이 맛이 없다",
        answers: {
            A : {text: "오늘 계랑 잘못하셨나보넹", class: "bread5"},
            B : {text: "사장님 무슨 일 있으신가", class: "bread2"}
        }},
             {
        question: "사장님이 신메뉴로 시금치 붕어빵을 만들었다고 먹어보라고한다",
        answers: {
            A : {text: "오! 신메뉴! 먹어봐야한다.", class: "bread3"},
            B : {text: "그냥 원래 먹던 팥붕 먹는다", class: "bread1"}
        }},
             {
        question: "팥붕 5개를 샀는데 슈붕 5개를 주셨다",
        answers: {
            A : {text: "슈붕 안좋아하는데.. 그냥 먹는다", class: "bread2"},
            B : {text: "사장님께 말씀드리고 바꿔먹는다", class: "bread1"}
        }},
             {
        question: "자주가던 붕어빵 사장님이 나를 알아보고 반갑게 인사한다",
        answers: {
            A : {text: "어.. 내일부터는 다른 데 가야겠네", class: "bread2"},
            B : {text: "오 사장님 센스! 더 자주 와야지", class: "bread3"}
        }},
             {
        question: "오랜만에 쉬는 날. 갑자기 친구가 붕어빵을 사왔으니 나오라고 한다",
        answers: {
            A : {text: "당장 출동~!!~ 나갈준비한다", class: "bread4"},
            B : {text: "쉬고싶은데 .. 그래도 붕어빵을 사왔으니까 ..", class: "bread5"}
        }},
             {
        question: "나는 슈크림, 친구는 팥 붕어빵을 샀다",
        answers: {
            A : {text: "하나씩 바꿔서 먹는다", class: "bread2"},
            B : {text: "내가 산 슈크림만 먹는다?", class: "bread4"}
        }}
]


  
  //답변 클릭했을 때 배열을 하나씩 순회하면서 질문이랑 답 텍스트가 바뀌게
//   const question = document.getElementById('question')
//     const answer = document.querySelector('.answers')
//     const bread1 = document.querySelector(".bread1");
//     const bread2 = document.querySelector(".bread2");
//     const bread3 = document.querySelector(".bread3");
//     const bread4 = document.querySelector(".bread4");
//     const bread5 = document.querySelector(".bread5");
//     const answerTop = document.querySelector("#answer-left")
//     const answerBottom = document.querySelector("#answer-right")
//     const answerArr = [0, 0, 0, 0, 0];
   let ArrIndex = 0;
            answer.addEventListener('click',function(){
            if(ArrIndex < questions.length){
                question.textContent = questions[ArrIndex].question
                answerTop.textContent = questions[ArrIndex].answers.A.text
                answerBottom.textContent = questions[ArrIndex].answers.B.text
                ArrIndex++;
            }
            });

           const breadclassA =  questions[ArrIndex].answers.A.class // bread1
           const breadclassB =  questions[ArrIndex].answers.B.class //bread2
           
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



            // for(let i =1; i<=5; i++){
            //     const bread = document.querySelector(`.bread${i}`);
            //     bread.addEventListener("click", function () {
            //       answerArr[i - 1] += 1
            //       console.log(answerArr);
            //     });
            //   };
     
   
    


    
    // for(let i =0 ; i <=15 ; i++) {
    //     ('.question p)의 
    //     innterText = "questions[i].question"
        
    //     ('#answer-left p')
    //     innterHTML = "<p class="&{uestions[0].answer.a.type}">&{uestions[0].answer.a.text}</p>"
        
    //     }