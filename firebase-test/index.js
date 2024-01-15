import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const appSettings = {
  databaseURL: "https://oz-project-16f76-default-rtdb.firebaseio.com/",
};
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

async function test() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

test();

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

let count = 0;
addButtonEl.addEventListener("click", () => {
  count++;
  const input = inputFieldEl.value;
  inputFieldEl.value = "";
  console.log(input);
  push(shoppingListDB, input);
  push(shoppingListDB, count);
});
