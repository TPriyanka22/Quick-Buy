import React, { useState } from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";
import AddressCard from "@/components/AddressCard";
import AddAddress from "./add-address";

import styles from "./address.module.scss";
import { useAuth } from "@/firebase/context";
import { useAddresses } from "hooks/address.hook";
import { useRouter } from "next/router";

export default function Addresses() {
  const [isModalOpen, setModalOpen] = useState(false);

  const { user } = useAuth();
  const isLoadingUser = useAuth().loading;

  const { data: addressesData, loading: isLoadingAddresses } = useAddresses();

  if (!user && !isLoadingUser) useRouter().push("/login");

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Addresses</h1>
        <div className={styles.content}>
          {isLoadingAddresses ? (
            <span>Loading...</span>
          ) : addressesData.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>You have not any address</p>
              <button
                className={styles.addAddress}
                onClick={() => setModalOpen(true)}
              >
                <p>+</p>Add New Address
              </button>
            </div>
          ) : (
            <div className={styles.addresses}>
              <button
                className={styles.addAddress}
                onClick={() => setModalOpen(true)}
              >
                <p>+</p>Add New Address
              </button>
              {addressesData?.map((address) => {
                return <AddressCard data={address} />;
              })}
            </div>
          )}
        </div>
        {isModalOpen && <AddAddress closeEvent={() => setModalOpen(false)} />}
      </main>
    </Layout>
  );
}
