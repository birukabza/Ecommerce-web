import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector";
import "./App.scss";
import createRouter from "./routes/Routes";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import useAuthListener from "./hooks/useAuthListener";  

function App() {
  useAuthListener(); 
  const currentUser = useSelector(selectCurrentUser);
  const router = createRouter(currentUser);

  return (
    <MantineProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  );
}

export default App;
