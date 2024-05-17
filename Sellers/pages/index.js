import { collection, getDocs, query, where } from "@firebase/firestore";
import { auth, db } from '../config/firebase'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';

import Head from 'next/head'
import Image from 'next/image'
import SignOutScreen from '../components/SignOutScreen'
import design from '../styles/Dashboard.module.css'


export default function VendorDashboard({currentUser}) {

  return (
    <>
    {
      currentUser 
      ?
      <>
      <div className={design.titleContainer}>
        <p className={design.title}>Greetings, Vendor of Quickbuy</p>
      </div>

      <div className={design.productShowcase}>
        <h2 className={design.sectionTitle}>Listed Items</h2>



      </div>
      </>
      :
      <SignOutScreen/>
    }
    </>
    
  )
}