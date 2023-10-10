// MyContext.js
import { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function MyContactContextProvider({ children }) {

    const [contacts, setContacts] = useState([])

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useMyContext() {
  return useContext(ContactContext);
}
