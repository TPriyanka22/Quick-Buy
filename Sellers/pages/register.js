import { useRouter } from 'next/router'
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore'
import registerStyles from '../styles/QuickbuyRegistration.module.css'



import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const QuickbuyRegistrationPage = () => {
const [fullName, setFullName] = useState("")

const auth = getAuth()
const db = getFirestore()

const [userEmail, setUserEmail] = useState("")
const [userPassword, setUserPassword] = useState("")
const router = useRouter()
const registerUser = async () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const registeredUser = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: fullName
              }).then(async() => {

                await setDoc(doc(db, "Vendors", registeredUser.uid), {
                    email: userEmail,
                    name: fullName,
                    products: [],
                    cart: {},
                    phone: "",
                    profilePhoto: null
                }).then(() => router.push("/quickbuy-dashboard")).catch(e => console.log(e))
                
              }).catch((error) => {
                    console.log(error.message)
              });
        })
        .catch((error) => {
            console.log(error)
        });
}

return (
    <div className={registerStyles.container} >
        <h1>Quickbuy Registration</h1>
        <input className={registerStyles.inputField} onChange={(e) => setFullName(e.target.value)} type="text" name="" placeholder='please Enter your Full Name' />
        <input className={registerStyles.inputField} onChange={(e) => setUserEmail(e.target.value)} placeholder='please Enter your Email' />
        <input className={registerStyles.inputField} onChange={(e) => setUserPassword(e.target.value)} placeholder='please Enter your Password' />
        <button className={registerStyles.registerButton} onClick={registerUser}>Create Quickbuy Account</button>
    </div>
    
)

}
export default QuickbuyRegistrationPage
