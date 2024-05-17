import React from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";

import styles from "./orders.module.scss";
import { useAuth } from "@/firebase/context";
import OrderItem from "@/components/OrderItem";
import { useOrders } from "hooks/order.hook";
import { useRouter } from "next/router";

export default function Orders() {
  const { user: userData, loading: userLoading } = useAuth();

  const { data: orderData } = useOrders();

  const router = useRouter();

  if (!userData && !userLoading) router.push("/login");

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Orders</h1>
        <div className={styles.content}>
          {orderData?.length === 0 ? (
            <span>You have not placed any orders yet.</span>
          ) : (
            <div className={styles.orders}>
              {orderData?.map((orderItem) => {
                return <OrderItem data={orderItem} key={orderItem.id} />;
              })}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
