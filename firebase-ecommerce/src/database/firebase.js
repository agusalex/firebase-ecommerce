// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getFirestore,
    addDoc,
    documentId,
    query,
    getDoc,
    collection,
    where,
    limit,
    getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrqyG5NjwvGfMwWsenuiG92OcQ8bq3Cr8",
    authDomain: "coderhouse-377023.firebaseapp.com",
    projectId: "coderhouse-377023",
    storageBucket: "coderhouse-377023.appspot.com",
    messagingSenderId: "772707537323",
    appId: "1:772707537323:web:d1770332e45aeeffbd82ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)


export async function getAllItems(collectionName) {
    const collectionRef = collection(firestore, collectionName);
    const snapshot = await getDocs(collectionRef)
    const items = [];

    snapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        items.push(data);
    });

    return items;
}

// Function to get one particular item by field
export async function getItemByField(collectionName, fieldName, fieldValue) {
    let items = getAllItemsByField(collectionName, fieldName, fieldValue, 1)
    return items
}

export async function getItemByID(collectionName, id) {
    const collectionRef = collection(firestore, collectionName);
    let q = query(collectionRef, where(documentId(), '==', id), limit(1));
    const snapshot = await getDocs(q)
    console.log(snapshot)
    let item = undefined
    snapshot.docs.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        item = data
    });
    console.log(item)
    return item;
}

// Function to get all items in a collection that match a certain field value
export async function getAllItemsByField(collectionName, fieldName, fieldValue, limitNumber = 100) {
    const collectionRef = collection(firestore, collectionName);
    let q = undefined
    if (limitNumber === 0) {
        q = query(collectionRef, where(fieldName, '==', fieldValue));
    } else {
        q = query(collectionRef, where(fieldName, '==', fieldValue), limit(limitNumber));
    }
    const snapshot = await getDocs(q)
    const items = [];

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        items.push(data);
    });

    return items;
}


// Function to push an item to a collection
export async function pushItem(collectionName, data) {
    console.log("pusing item")
    const collectionRef = collection(firestore, collectionName);
    const docRef = await addDoc(collectionRef, data);
    const doc = await getDoc(docRef)

    return {
        id: doc.id,
        ...doc.data(),
    }
}
