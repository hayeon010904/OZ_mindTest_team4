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
const usersRef = collection(db, "users");
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

const breadResult = [
  {
    breadType: "팥붕어빵",
    comment: "이것은 팥붕어빵 입니다. ",
  },
  {
    breadType: "탕후루붕어빵",
    comment: "이것은 탕후루붕어빵 입니다. ",
  },
  {
    breadType: "슈붕어빵",
    comment: "이것은 슈붕어빵 입니다. ",
  },
  {
    breadType: "고구마붕어빵",
    comment: "이것은 고구마붕어빵 입니다. ",
  },
  {
    breadType: "녹두붕어빵",
    comment: "이것은 녹두붕어빵 입니다. ",
  },
  {
    breadType: "피자붕어빵",
    comment: "이것은 피자붕어빵 입니다. ",
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
