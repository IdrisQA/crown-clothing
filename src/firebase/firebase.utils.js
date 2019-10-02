import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: 'AIzaSyDntZl235JGNpNH31EN9y6RBqJbVGt1u6Q',
    authDomain: 'crown-clothing-989e3.firebaseapp.com',
    databaseURL: 'https://crown-clothing-989e3.firebaseio.com',
    projectId: 'crown-clothing-989e3',
    storageBucket: '',
    messagingSenderId: '513194185546',
    appId: '1:513194185546:web:ee880e2eefc2ecc101e7b3',
    measurementId: 'G-4MQQLZK71E'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;