import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {

  const authMode = useSelector(state => state.auth.authMode)
  const navigate = useNavigate()
  return (
    <>
    <header>

      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-2 " data-bs-theme="dark">
        <NavLink to={"/"} className="navbar-brand" >
         <i class="bi bi-house-heart display-6"></i>   Home  

        </NavLink >
       
        <NavLink className="navbar-brand btn-success" to="/signform" type="button" >
          {authMode}
          
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
