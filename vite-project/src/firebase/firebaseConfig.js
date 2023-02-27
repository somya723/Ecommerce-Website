// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    where,
    query,
    getDocs
} from "firebase/firestore"

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDJvVkqdyw8zrFbvIvYry3b5z6OM7ogAY4",
  
    authDomain: "ecommerce-website-c206f.firebaseapp.com",
  
    projectId: "ecommerce-website-c206f",
  
    storageBucket: "ecommerce-website-c206f.appspot.com",
  
    messagingSenderId: "864389300978",
  
    appId: "1:864389300978:web:6beaca85e3fb1ec5b1866b",
  
    measurementId: "G-EW5068Y1W9"
  
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });

            await setDoc(doc(db, "individual-todos", user.email), {
                task: [
                    {
                        uid: 0,
                        completed: false,
                        title: "Sample Task"
                    }
                ]
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


const loginInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await updateProfile(user, {
            displayName: name
        });
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

        await setDoc(doc(db, "individual-todos", email), {
            task: [
                {
                    uid: 0,
                    completed: false,
                    title: "Sample Task"
                }
            ]
        });

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(getAuth())
};

export {
    auth,
    db,
    signInWithGoogle,
    loginInWithEmailAndPassword,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};

