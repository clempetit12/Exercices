import { createBrowserRouter } from "react-router-dom";



import AddAlbumForm from "./album/AddAlbumForm";
import Modal from "./shared/Modal";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          { path: "/addAlbumForm", element: <Modal><AddAlbumForm/></Modal> },
    
    
        ],
      },
    ]);
  

export default router