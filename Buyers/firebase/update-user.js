import { quickBuyFirebase, quickBuyAuth, quickBuyDb } from "../config/quick-buy";


function updatePassword({ currentPassword, newPassword }) {
  const currentUser = quickBuyAuth.currentUser;

  const credential = quickBuyFirebase.auth.EmailAuthProvider.credential(
    quickBuyFirebase.auth().currentUser.email,
    currentPassword
  );

  const update = () => {
    return currentUser
      .updatePassword(newPassword)
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const reauth = () => {
    return currentUser.reauthenticateWithCredential(credential);
  };

  return {
    reauth,
    update,
  };
}

function updateUser({ email, name, surname, phoneNumber, photo, finalEvent }) {
  const currentUser = quickBuyAuth.currentUser.uid;

  if (photo) {
    return quickBuyFirebase
      .storage()
      .ref("images/" + currentUser + (photo?.name || "0"))
      .put(photo)
      .then((doc) => {
        doc.ref.getDownloadURL().then((url) => {
          quickBuyDb.collection("Users")
            .doc(currentUser)
            .update({
              name,
              surname,
              email,
              phoneNumber: phoneNumber || "",
              photoUrl: url,
            })
            .catch((e) => console.log(e))
            .finally(() => finalEvent());
        });
      })
      .catch((e) => console.log(e));
  }

  return quickBuyDb
    .collection("Users")
    .doc(currentUser)
    .update({
      name,
      surname,
      email,
      phoneNumber: phoneNumber || "",
    });
}



export { updateUser, updatePassword };
