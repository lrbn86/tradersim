/**
 * Contains all the functions that interacts with the Cloud Firestore database
 */

import { doc, addDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './config';

/**
 * @param collectionName name of the collection to get the documents from
 * @returns an array of document objects that contains the document data and id
 */
export async function getDocsFromCollection(collectionName) {
    const data = await getDocs(collection(db, collectionName));
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

/**
 * @param doc the document object to be added to the collection
 * @param collectionName name of the collection where document objects are added to
 */
export async function addDocToCollection(doc, collectionName) {
    await addDoc(collection(db, collectionName), doc);
}

export async function updateDocFromCollection(docName, change, collectionName) {
    const ref = doc(db, collectionName, docName);
    await updateDoc(ref, change);
}
