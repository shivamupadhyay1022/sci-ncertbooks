import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "sci-ncertbooks.firebaseapp.com",
  databaseURL: "https://sci-ncertbooks-default-rtdb.firebaseio.com",
  projectId: "sci-ncertbooks",
  storageBucket: "sci-ncertbooks.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Note: The database structure should be initialized manually through the Firebase console
// using the structure from BookList.jsx

// Function to get all books for a specific class and subject
export const getBooksForClassAndSubject = async (classLevel, subject) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `books/ncert/${classLevel}/${subject}`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return {};
    }
  } catch (error) {
    console.error("Error getting books:", error);
    return {};
  }
};

// Function to get all chapters for a specific book
export const getChaptersForBook = async (classLevel, subject, book) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `books/ncert/${classLevel}/${subject}/${book}/chapters`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No chapters available");
      return {};
    }
  } catch (error) {
    console.error("Error getting chapters:", error);
    return {};
  }
};

// Note: Adding new books and chapters should be done manually through the Firebase console

export { database };
