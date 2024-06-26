import Head from "next/head";
import styles from "./cart.module.scss";

import Layout from "components/Layout";
import CartItem from "@/components/CartItem";
import { useCart, useCartOnce } from "hooks/cart.hook";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/config/firebase";
import { useAuth } from "@/firebase/context";
import { addToCart } from "@/firebase/product";
import { useRouter } from "next/router";

export default function CartPage() {
  const { user, loading } = useAuth();
  const { data } = useCart();

  const totalItems = Object.keys(data).reduce((a, b) => a + data[b].length, 0);

  const cartProducts =
    totalItems > 0
      ? Object.keys(data)
          .map((product) => {
            return data[product].map((size) => {
              return {
                name: product,
                size,
              };
            });
          })
          .flat(1)
      : [];

  const sizeCount = cartProducts.reduce(
    (acc, value) => ({
      ...acc,
      [value.name + "__size__" + value.size]:
        (acc[value.name + "__size__" + value.size] || 0) + 1,
    }),
    {}
  );

  const cartProductsArray = [
    ...new Set(
      cartProducts.filter(
        (v, i, a) =>
          a.findIndex((t) => t.name === v.name && t.size === v.size) === i
      )
    ),
  ].map((product) => {
    return { ...product, count: sizeCount[product.name + "__size__" + product.size] };
  });

  const addToQuickbuy = (id, size) => {
    const newCart = size
      ? {
          ...data,
          [id]: data.hasOwnProperty(id) ? [...data[id], size] : [size],
        }
      : {
          ...data,
          [id]: data.hasOwnProperty(id) ? [...data[id], "-"] : ["-"],
        };
    addToCart(newCart);
  };

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && typeof window !== "undefined") router.push("/login");
  }, [loading, user]);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>My Cart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Cart</h1>
            <h4>You have {totalItems} items in your cart</h4>
          </div>
          {cartProductsArray.map((product, index) => (
            <CartItem
              key={index}
              id={product.name}
              size={product.size}
              count={product.count}
              onAdd={addToQuickbuy}
            />
          ))}
        </main>
      </div>
    </Layout>
  );
}