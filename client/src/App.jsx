import { RouterProvider } from "react-router-dom";
import "./App.scss";
import createRouter from "./routes/Routes";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import useAuthListener from "./hooks/useAuthListener";  
import Modal from 'react-modal';

Modal.setAppElement('#root');


function App() {
  useAuthListener(); 
  const router = createRouter();

  return (
    <MantineProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  );
}

export default App;
