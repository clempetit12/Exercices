import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthMode } from "./Components/auth/authSlice";



function App() {

  const authMode = useSelector(state => state.auth.authMode)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <header>

      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-2 " data-bs-theme="dark">
        <NavLink to={"/"} className="navbar-brand" >
         <i class="bi bi-house-heart display-6"></i>   Home  

        </NavLink >

       <NavLink className=" ms-auto btn btn-success p-2" to="/signform" type="button" >
          { authMode}
          
        </NavLink>


       
      </nav>
    </header>
    <main>
      <div className="container" >
        <Outlet />
        
      </div>
      </main>
     
  </>
  );
}

export default App;


