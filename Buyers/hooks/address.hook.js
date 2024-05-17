import { useEffect, useState } from "react";
import { quickBuyAuth, quickBuyDb } from "../config/quick-buy";


const useAddress = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      quickBuyAuth.currentUser &&
        quickBuyDb
          .collection("Addresses")
          .doc(id)
          .get()
          .then(function (doc) {
            setData(doc.data());
            setLoading(false);
          })
          .catch((e) => setError(e));
    }

    fetchFromFirestore();
  }, [quickBuyAuth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};

export { useAddresses, useAddress };

const useAddresses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromFirestore() {
      quickBuyAuth.currentUser &&
        quickBuyDb
          .collection("Users")
          .doc(quickBuyAuth.currentUser.uid)
          .get()
          .then(function (doc) {
            const addresses = doc.data().addresses;
            if (addresses) {
              quickBuyDb.collection("Addresses")
                .get()
                .then(function (querySnapshot) {
                  const addressArray = querySnapshot.docs
                    .filter((doc) => addresses.includes(doc.id))
                    .map(function (doc) {
                      return { id: doc.id, ...doc.data() };
                    });
                  setData(addressArray);
                  setLoading(false);
                });
            }
          });
    }

    fetchFromFirestore();
  }, [quickBuyAuth.currentUser]);

  return {
    data,
    loading,
    error,
  };
};


