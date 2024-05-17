
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Quickbuy Navbar.module.css'
import {auth} from '../Firebase'
const QuickbuyNavbar = ({currentUser}) => {
return (
<div className={styles.container}>
<div className={styles.leftSection}>
<div className={styles.title}>Welcome to Quickbuy!</div>
</div>
<div className={styles.rightSection}>
<ul>
<li>Home</li>
<li><Link href='/quickbuy-analysis'>Quickbuy Analysis</Link> </li>
<li><Link href='/quickbuy-marketplace'>Quickbuy Marketplace</Link></li>
{
currentUser
?
<>
<li><Link href='/quickbuy-upload'>Upload Product to Quickbuy</Link></li>
<li><button className={styles.logoutButton} onClick={()=>auth.signOut()}>Sign Out of Quickbuy</button></li>
<li>{currentUser.displayName}</li>
</>
:
<>
<li><Link href='/quickbuy-register'>Register with Quickbuy</Link></li>
<li><Link href='/quickbuy-login'>Login to Quickbuy</Link></li>
</>
}
</ul>
</div>
</div>
)
}