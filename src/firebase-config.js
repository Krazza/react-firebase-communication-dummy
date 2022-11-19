import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUVgac5zZA1V7p7EQ3wRqoLoXGrwslZrE",
    authDomain: "react-firebase-training-f8a89.firebaseapp.com",
    projectId: "react-firebase-training-f8a89",
    storageBucket: "react-firebase-training-f8a89.appspot.com",
    messagingSenderId: "163873972725",
    appId: "1:163873972725:web:acefdfe84b15d9dea280bc"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export async function GetUserData()
{
    const userCollectionRef  = collection(database, "users/");
    const userData = await getDocs(userCollectionRef);

    const userHabitCollectionRef = collection(database, `users/${userData.docs[0].id}/habits`);
    const habitData = await getDocs(userHabitCollectionRef);
    console.log(habitData);
    console.log(habitData.docs[0]._document.data.value.mapValue.fields.currentWeekEntries.arrayValue.values[0].mapValue.fields);
}

