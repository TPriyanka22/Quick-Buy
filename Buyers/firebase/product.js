import { quickBuy, quickBuyAuth, quickBuyDb } from "../config/quick-buy";
function addToCart(newCart) {
  const currentUser = quickBuyAuth.currentUser.uid;

  return quickBuyDb.collection("Users").doc(currentUser).update({
    cart: newCart,
  });
}

function removeFavorite(id) {
  const currentUser = quickBuyAuth.currentUser.uid;

  return quickBuyDb
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: quickBuy.firebase.firestore.FieldValue.arrayRemove(id),
    });
}


function addFavorite(id) {
  const currentUser = quickBuyAuth.currentUser.uid;

  return quickBuyDb
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: quickBuy.firebase.firestore.FieldValue.arrayUnion(id),
    });
}


export { addFavorite, removeFavorite, addToCart };
