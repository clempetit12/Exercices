import { RouterProvider } from 'react-router-dom';
import router from '../app-routing';
import { useState } from 'react';
import ItemContext from '../Context/ItemContext';

function Top() {

    const [itemList, setItemList] = useState([])
    const [basket, setBasket] = useState([])
    const   [access, setAccess] = useState([])
 
    


  return (
    <ItemContext.Provider value={{itemList, setItemList,basket,setBasket, access,setAccess}}>
      <RouterProvider router={router} />
      </ItemContext.Provider>
  );
}

export default Top;