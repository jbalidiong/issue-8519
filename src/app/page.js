'use client'

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInAnonymously } from 'firebase/auth';

export default function Home() {

  const firebaseConfig = {
    apiKey : "test",
    authDomain: "",
    daabaseURL: "",
    pojectId: "test"
  }

  const firebaseApp = getApps.length ? getApp() : initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);

  const initEmulator = () => {
    if(firebaseApp){
      try{
        connectAuthEmulator(firebaseAuth,"http://127.0.0.1:9099");
        console.log("Connected to emulator");
      } catch(err){
        console.log("Error occured", err);
      }
    }
  }
  initEmulator();

  const signInAnon = () =>{
    signInAnonymously(firebaseAuth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={signInAnon}>Sign in Anonymously</button>
    </div>
  );
}
