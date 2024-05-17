
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'next/router'



import React, { useState } from 'react'
import loginStyles from '../styles/Login.module.css'
const router = useRouter()
const handleLogin = async()=>{
try{
await signInWithEmailAndPassword(auth,email,password)
router.push('/dashboard')
}catch(err){
console.log(err.message)
}
}



const LoginPage = () => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

return (
<div className={loginStyles.container}>
<h1>Login Page</h1>
<input className={loginStyles.inputField} placeholder='Please Enter Your E-Mail for Quickbuy' onChange={(e)=>setEmail(e.target.value)} />
<input className={loginStyles.inputField} placeholder='Please Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
<button className={loginStyles.loginButton} onClick={handleLogin}>Log In</button>
</div>
)
}
export default LoginPage