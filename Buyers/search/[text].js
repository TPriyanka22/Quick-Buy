import React from "react";
import { db } from "@/config/firebase";

import Head from "next/head";

import styles from "./search.module.scss";

import Layout from "components/Layout";
import FilterButton from "@/components/FilterButton";
import ProductCard from "@/components/ProductCard/product-card";
import { useAuth } from "@/firebase/context";

export default function SearchPage({ searchResults, query }) {
  const { user, loading } = useAuth();

  console.log(searchResults, query);

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
              Listing {searchResults.length} products for "{query.text}"
            </h1>
            <div className={styles.headerButtons}>
              <FilterButton type="sort" style={{ marginRight: 20 }} />
              <FilterButton count={0} />
            </div>
          </div>
          <div className={styles.products}>
            {!loading && searchResults &&
              searchResults.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    brand={product.seller}
                    name={product.productDisplayName}
                    image={product.link}
                    price={product.price + 78}
                    sale_price={product.price}
                    favorite={user?.favorites?.includes(product.id)}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </Layout>
  );
}

SearchPage.getInitialProps = async function ({ query }) {
  let searchResults = {};
  let error = {};
  // await db
    // .collection("Products")
    // .where("productDisplayName", "array-contains                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ", query.text)
    // .get()
    // .then(function (querySnapshot) {
    //   // searchResults = querySnapshot.docs
    //   //   // .filter((item) => item.data().productDisplayName.includes(query.text) 
    //   //   // || item.data().gender.includes(query.text)
    //   //   // || item.data().masterCategory.includes(query.text) || item.data().subCategory.includes(query.text) 
    //   //   // || item.data().sellers.includes(query.text)
    //   //   )
    //   //   .map(function (doc) {
    //   //     return { id: doc.id, ...doc.data() };
    //   //   });
    // })
    // .catch((e) => (error = e));
    // console.log("searchResults", searchResults)

  const res = await fetch(`http://localhost:5000/search?query=${query.text}`)
  const result = await res.json()
  console.log("search ,", result.searchResult)

  return {
    searchResults: result.searchResult,
    error,
    query,
  };
}