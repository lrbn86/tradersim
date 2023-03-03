/**
 * Contains all the functions that interacts with the Cloud Firestore database
 */

import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

/**
 * @param collectionName name of the collection to get the documents from
 * @returns an array of document objects that contains the document data and id
 */
export async function getDocsFromCollection(collectionName) {
    const data = await getDocs(collection(db, collectionName));
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
