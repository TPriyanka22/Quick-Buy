import React from "react";
import { db } from "@/config/firebase";

import Head from "next/head";

import styles from "./brand.module.scss";

import Layout from "components/Layout";
import Button from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard/product-card";
import { useAuth } from "@/firebase/context";

export default function BrandPage({ products, query }) {
  const { user, loading } = useAuth();

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Listing {products.length} products for "{query.brand}"
            </h1>
            <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>
          <div className={styles.products}>
            {!loading &&
              products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    brand={product.brand}
                    name={product.product_name}
                    image={product.cover_photo}
                    price={product.price}
                    sale_price={product.sale_price}
                    quickbuy={user?.favorites?.includes(product.id)}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </Layout>
  );
}

BrandPage.getInitialProps = async function ({ query }) {
  let products = [];
  let error = {};
  await db
    .collection("Products")
    .where("brand", "==", query.brand)
    .get()
    .then(function (querySnapshot) {
      products = querySnapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data() };
      });
    })
    .catch((e) => (error = e));

  return {
    products,
    error,
    query,
  };
};
