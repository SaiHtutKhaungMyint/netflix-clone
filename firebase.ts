// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzhQdKOfkTCOm06QQUsRE8kX07sKZT9ko',
  authDomain: 'netflix-clone-bb32e.firebaseapp.com',
  projectId: 'netflix-clone-bb32e',
  storageBucket: 'netflix-clone-bb32e.appspot.com',
  messagingSenderId: '737943178020',
  appId: '1:737943178020:web:1285642015db16a1ccc1b1',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
