// React router
import { RouterProvider } from "react-router-dom";

// Hooks
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector";
import { setCurrentUser } from "./redux/user/userSlice";

// css
import "./App.scss";

// route
import createRouter from "./routes/Routes";

// firebase
import { auth } from "./firebase/firebase.utility";
import { createUserProfileDocument } from "./firebase/firebase.utility";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapshot) => {
          const userData = snapshot.data();

          // Convert createdAt date to a serializable format (if it's still a Date object) for redux
          if (userData.createdAt) {

              userData.createdAt = userData.createdAt.toDate().toISOString()
          }
          dispatch(
            setCurrentUser({
              uid: snapshot.id,
              ...userData,
            })
          )
        });

        // Clean up the snapshot listener when the component is unmounted or when auth changes
        return () => unsubscribeFromSnapshot();
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    // Clean up the auth listener when the component is unmounted
    return () => unsubscribeFromAuth();
  }, []);


  const router = createRouter(currentUser);

  return <RouterProvider router={router} />;
}

export default App;
