// React router
import { RouterProvider } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsubscribeFromSnapshot = onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            uid: snapshot.id,
            ...snapshot.data(),
          });
        });

        // Clean up the snapshot listener when the component is unmounted or when auth changes
        return () => unsubscribeFromSnapshot();
      } else {
        setCurrentUser(null);
      }
    });

    // Clean up the auth listener when the component is unmounted
    return () => unsubscribeFromAuth();
  }, []);


  const router = createRouter(currentUser);

  return <RouterProvider router={router} />;
}

export default App;
