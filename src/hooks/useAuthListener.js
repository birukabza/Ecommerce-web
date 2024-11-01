import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/user/userSlice";
import { auth } from "../firebase/firebase.utility";
import { createUserProfileDocument } from "../firebase/firebase.utility";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapshot) => {
          const userData = snapshot.data();

          if (userData.createdAt) {
            userData.createdAt = userData.createdAt.toDate().toISOString();
          }

          dispatch(
            setCurrentUser({
              uid: snapshot.id,
              ...userData,
            })
          );
        });

        return () => unsubscribeFromSnapshot();
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);
};

export default useAuthListener;
