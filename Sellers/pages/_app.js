
import {auth} from '../Firebase.js'
import QuickbuyNavbar from '../components/QuickbuyNavbar'
import { useEffect, useState } from 'react'
import '../styles/globals.css'
import {onAuthStateChanged} from 'firebase/auth'
function QuickbuyApp({ Component, pageProps }) {
const [user,setUser] = useState(null)
useEffect(()=>{
onAuthStateChanged(auth,(currentUser)=>{
if(currentUser){
setUser(currentUser)
}
else{
setUser(null)
}
})
},[])
return<>
<QuickbuyNavbar currentUser={user}/>
<Component {...pageProps} currentUser={user} />
</>
}
export default QuickbuyApp