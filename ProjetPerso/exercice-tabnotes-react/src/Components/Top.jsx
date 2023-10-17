import { RouterProvider } from 'react-router-dom';
import router from '../app-routing';
import { useState } from 'react';
import StudentContext from '../Context/StudentContext';

function Top() {

    const [noteList, setNoteList] = useState([])
    const [note, setNote] = useState([])
    const   [student, setStudent] = useState([])
    const [matter, setMatter] = useState([])
 
    


  return (
    <StudentContext.Provider value={{noteList, setNoteList, note, setNote, student, setStudent, matter, setMatter}}>
      <RouterProvider router={router} />
      </StudentContext.Provider>
  );
}

export default Top;