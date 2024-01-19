import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
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

// 카운터 불러오기
const appFS = initializeApp(firebaseConfig);
const db = getFirestore(appFS);
const countDiv = document.querySelector(".countDiv");
let bufCount;

async function getCount() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    bufCount = Number(doc.data().count);
    console.log(bufCount);
  });
}

getCount().then(() => {
  countDiv.innerHTML = `<p>${bufCount}명 참여</p>`;
});

// 다시보기 버튼 생성
const ToResult = document.querySelector(".ToResult");
const value = localStorage.getItem("breadType");
value !== null
  ? ToResult.classList.add("display_block")
  : ToResult.classList.remove("display_block");
