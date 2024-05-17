import { quickBuyAuth, quickBuyDb } from "../config/quick-buy";


function registerSellerDatabase({ id, email, name }) {
  return quickBuyDb.collection("Users").doc(id).set({
    name,
    email,
    products: [],
    addresses: [],
    cart: {},
    favorites: [],
    orders: [],
    phoneNumber: "",
    photoUrl: null,
  });
}

function registerDatabase({ id, email, name, surname }) {
  return quickBuyDb.collection("Users").doc(id).set({
    name,
    surname,
    email,
    addresses: [],
    cart: {},
    favorites: [],
    orders: [],
    phoneNumber: "",
    photoUrl: null,
  });
}

function emailRegister({ email, password }) {
  return quickBuyAuth.createUserWithEmailAndPassword(email, password);
}

export { emailRegister, registerDatabase, registerSellerDatabase };
