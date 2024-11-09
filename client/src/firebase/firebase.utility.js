import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "any-store-d5aae.firebaseapp.com",
    projectId: "any-store-d5aae",
    storageBucket: "any-store-d5aae.appspot.com",
    messagingSenderId: "329415293925",
    appId: "1:329415293925:web:c16d38182b7c7822a8cd0c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = Timestamp.fromDate(new Date());

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error creating user document: ", error.message);
        }
    }

    return userRef;
};


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

const SignInWithGoogle = () => signInWithPopup(auth, provider);

export { app, auth, db, SignInWithGoogle };
